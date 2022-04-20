//import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    // getProducts(categoryId).then(response => {
    //   setProducts(response)
    // }).catch(error => {
    //   console.log(error)
    // }).finally(() => {
    //   setLoading(false)
    // })

    const collectionRef = categoryId ?
      query(collection(firestoreDb, 'items'), where('category', '==', categoryId)) :
      collection(firestoreDb, 'items')

    getDocs(collectionRef).then(querySnapshot => {
      const products = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      setProducts(products)
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
