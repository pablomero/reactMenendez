import { useContext } from "react"
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            {
              cart.map(prod => <div key={prod.id}>{prod.name}</div>)
            }
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
