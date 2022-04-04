import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const onAdd = () => {
    console.log('Funcion para agregar al carrito')
  }

  return (
      <div className="itemDetail">
        <img src={img} alt='itemImg' />
        <h1>{name} - {category}</h1>
        <p>{description}</p>
        <p>Stock: {stock} - Precio: ${price}</p>
        <ItemCount initial={0} stock={stock} onAdd={onAdd} />
      </div>
  )
}

export default ItemDetail
