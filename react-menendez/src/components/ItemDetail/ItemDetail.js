import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (count) => {
    setQuantity(count)
    addItem({ id, name, price }, count)
  }
  return (
      <div className="itemDetail">
        <img src={img} alt='itemImg' />
        <h1>{name} - {category}</h1>
        <p>{description}</p>
        <p>Stock: {stock} - Precio: ${price}</p>
        {
          quantity == 0 ?
            <ItemCount onAdd={handleOnAdd} /> :
            <Link to='/cart'>Ir al carrito</Link>
        }
      </div>
  )
}

export default ItemDetail
