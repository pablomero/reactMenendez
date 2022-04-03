import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className="listContainer">
    { products.map(product => <Item key={product.id} {...product} />)}
    </div>
    )
  }


export default ItemList
