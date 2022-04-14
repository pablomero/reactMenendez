import './Cart.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext)

    return (
        <div className='cartList'>
            <h1>Mi Carrito</h1>
            {
              cart.map(prod =>
                <div key={prod.id} className='cartItem'>
                  {console.log(prod)}
                  <img src={prod.img} alt='itemImg' />
                  <p>{prod.name}</p>
                </div>
              )
            }
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
