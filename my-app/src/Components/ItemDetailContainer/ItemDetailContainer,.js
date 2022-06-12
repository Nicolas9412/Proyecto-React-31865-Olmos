import { getProductsById } from "../../asyncMockProduct"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState();
    const [loading,setLoading] = useState(true); 

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductsById(parseInt(productId)).then(response => setProduct(response)).finally(() => {setLoading(false)})   
    },[])

    if(loading){
        return(
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
                <h3>Cargando...</h3>
            </div>
            
        )
    }

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer