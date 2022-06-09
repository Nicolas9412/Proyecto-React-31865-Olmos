import { getProductsById } from "../../asyncMockProduct"
import { useEffect, useState } from "react"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState();
    useEffect(() => {
        getProductsById(1).then(response => setProduct(response))
        
    },[])

    console.log(product)
    return(
        <></>
    )
}

export default ItemDetailContainer