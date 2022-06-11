import { getProductsById } from "../../asyncMockProduct"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState();
    useEffect(() => {
        getProductsById(1).then(response => setProduct(response))
        
    },[])
    
    console.log(product)
    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer