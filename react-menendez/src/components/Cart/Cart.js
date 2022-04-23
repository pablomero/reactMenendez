import './Cart.css'
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const Cart = () => {
  const [loading, setLoading] = useState(false)
  const { cart, clearCart, getQuantity, getTotal, removeItem } = useContext(CartContext)
  const createOrder = () => {
    setLoading(true)
    const objOrder = {
      buyer: {
        name: 'Juan Pablo',
        phone: '123456789',
        email: 'pablo@mail.com'
      },
      items: cart,
      total: getTotal()
    }


    const collectionRef = collection(firestoreDb, 'items')
    const ids = cart.map(prod => prod.id)
    const batch = writeBatch(firestoreDb)
    const outOfStock = []
    getDocs(query(collectionRef, where(documentId(), 'in', ids))).then(response => {
      response.docs.forEach(doc => {
        const dataDoc = doc.data()
        const productQuantity = objOrder.items.find(prod => prod.id === doc.id).quantity
        if(dataDoc.stock >= productQuantity) {
          batch.update(doc.ref, { stock: dataDoc.stock - productQuantity })
        } else {
          outOfStock.push({ id: doc.id, dataDoc })
        }
      })
    }).then(() => {
      if(outOfStock.length === 0) {
        const collectionRef = collection(firestoreDb, 'orders')
        return addDoc(collectionRef, objOrder)
      } else {
        return Promise.reject({ name: 'outOfStockError', products: outOfStock })
      }
    }).then(({id}) => {
      batch.commit()
      clearCart()
      console.log(`Se generó la orden con id: ${id}`)
    }).catch((error) => {
      if(error && error.name === 'outOfStockError' && error. products.length > 0) {
        console.log(error.products)
      } else {
        console.log(error)
      }
    }).finally(() => {
      setLoading(false)
    })
  }
  const handleRemove = (id) => {
    removeItem(id)
  }

  if(loading) {
    return <h1>Se está procesando su orden</h1>
  }

  if (getQuantity() == 0)
  {
    return(
    <div>
      <h1>No hay items en el carrito</h1>
      <Link to={'/'}>Volver al inicio</Link>
    </div>
    )
  }

  return (
    <div className='cartList'>
      <h1>Mi Carrito</h1>
      { cart.map(prod =>
        <div key={prod.id} className='cartItem'>
          <img src={prod.img} alt='itemImg' />
          <p>{prod.name}</p>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Subtotal: ${prod.quantity*prod.price}</p>
          <button onClick={() => handleRemove(prod.id)}>X</button>
        </div>
      )}
      <h2>Total: ${getTotal()}</h2>
      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={createOrder}>Terminar mi compra</button>
    </div>
  )

}

export default Cart
