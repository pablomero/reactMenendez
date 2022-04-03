import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId).then(response => {
      setProducts(response)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })

    return(() => {
      setProducts([])
    })
  }, [categoryId])

  return (
    <>
      <h1>{greeting}</h1>
      {
        loading ?
          <h1>Cargando...</h1> :
        products.length ?
          <ItemList products={products} /> :
          <h1>No se encontraron productos</h1>
      }
    </>
  )
}

export default ItemListContainer
