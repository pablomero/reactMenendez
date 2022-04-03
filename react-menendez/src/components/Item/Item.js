import './Item.css'
import {Link} from 'react-router-dom'

const Item = ( {id, name, img, price} ) => {
  return (
    <div className="listItem">
      <img src={img} alt='itemImg' />
      <p>{name}</p>
      <p>${price}</p>
      <Link to={`detail/${id}`}>Detalle</Link>
    </div>
  )
}

export default Item
