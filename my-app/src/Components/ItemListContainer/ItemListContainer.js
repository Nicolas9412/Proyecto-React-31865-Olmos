import { useEffect, useState } from "react"
import {getProducts, getProductsByCategory} from "../../asyncMockProduct"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"

const ItemListContainer = ({greeting}) =>{

    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    const {category} = useParams()

    useEffect(() => {
        setLoading(true)
        if(!category){
            getProducts().then(response =>{
            setProducts(response)
            }).finally(() => {
                setLoading(false)
            })
        }
        else{
            getProductsByCategory(category).then(response =>{
                setProducts(response)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    },[category])

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

    return (
        <div className="container mt-3">
            <h1 className="mt-4">{!category? greeting : category}</h1>
            {products.length > 0 ? 
            <ItemList products={products}/>
            : <h2>No hay productos</h2>}
            
        </div>
    )
}

export default ItemListContainer