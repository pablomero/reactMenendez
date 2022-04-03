import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    return (
        <div className="listItem">
          <img src={img} alt='itemImg' />
          <p>{name} - {category}</p>
          <p>{description}</p>
          <p>Stock: {stock} - Precio: ${price}</p>
          <ItemCount />
        </div>
    )
}

export default ItemDetail
