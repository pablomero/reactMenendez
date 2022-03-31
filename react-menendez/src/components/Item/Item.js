import './Item.css'

const Item = ( {product} ) => {
  return (
    <div className="listItem">
      <img src={product.img} />
      <p>{product.category} - {product.name}</p>
      <p>${product.price}</p>
      <button>Detalle</button>
    </div>
  )
}

export default Item
