import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncmock'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(productId).then(prod => {
            setProduct(prod)
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
            <ItemDetail {...product}/>

        </div>
    )
}

export default ItemDetailContainer