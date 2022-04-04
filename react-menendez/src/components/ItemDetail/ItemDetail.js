import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  return (
      <div className="itemDetail">
        <img src={img} alt='itemImg' />
        <h1>{name} - {category}</h1>
        <p>{description}</p>
        <p>Stock: {stock} - Precio: ${price}</p>
      </div>
  )
}

export default ItemDetail
