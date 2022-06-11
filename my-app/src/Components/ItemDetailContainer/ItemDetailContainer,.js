import { getProductsById } from "../../asyncMockProduct"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState();

    const { productId } = useParams()

    useEffect(() => {
        getProductsById(parseInt(productId)).then(response => setProduct(response))   
    },[])
    
    console.log(product)
    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer