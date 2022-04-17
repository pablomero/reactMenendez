import './CartWidget.css'
import cart from './cart.png'
import { useContext } from 'react';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = ({ isEmpty }) => {
  const { getQuantity } = useContext(CartContext)

  if (isEmpty) {
    return([])
  }
  return (
    <Link to={'/cart'} className="cartWidget">
        <img src={cart} alt='cart' />
        <span className="cartCount">{ getQuantity() }</span>
    </Link>
  )
}

export default CartWidget
