import './CartWidget.css'
import cart from './cart.png'

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img src={cart}/>
      <span className="cartCount">0</span>
    </div>
  )
}

export default CartWidget
