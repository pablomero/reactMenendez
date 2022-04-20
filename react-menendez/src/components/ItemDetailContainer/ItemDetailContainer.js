import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import { getProductById } from '../../asyncmock'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({addToCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        // getProductById(productId).then(prod => {
        //     setProduct(prod)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })

        const docRef = doc(firestoreDb, 'items', productId)
        getDoc(docRef).then(querySnapshot => {
          const product = { id: querySnapshot.id, ...querySnapshot.data()}
          setProduct(product)
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          setLoading(false)
        })
    }, [productId])


    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} addToCart={addToCart} cart={cart}/>

        </div>
    )
}

export default ItemDetailContainer
