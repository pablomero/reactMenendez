import './Cart.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart, getQuantity, getTotal, removeItem } = useContext(CartContext)
    const handleRemove = (id) => {
      removeItem(id)
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
        <button>Terminar mi compra</button>
      </div>
    )

}

export default Cart
