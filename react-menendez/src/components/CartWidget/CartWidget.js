import './CartWidget.css'
import cart from './cart.png'
import { useContext } from 'react';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)

  return (
    <Link to={'/'} className="cartWidget">
        <img src={cart} alt='cart' />
        <span className="cartCount">{ getQuantity() }</span>
    </Link>
  )
}

export default CartWidget
