import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addItem, isInCart } = useContext(CartContext)

  const handleOnAdd = (count) => {
    addItem({ id, name, img, price }, count)
  }
  return (
      <div className="itemDetail">
        <img src={img} alt='itemImg' />
        <h1>{name} - {category}</h1>
        <p>{description}</p>
        <p>Stock: {stock} - Precio: ${price}</p>
        {
          isInCart(id) ?
            <Link to='/cart'>Ir al carrito</Link> :
            <ItemCount stock={stock} onAdd={handleOnAdd} />
        }
      </div>
  )
}

export default ItemDetail
