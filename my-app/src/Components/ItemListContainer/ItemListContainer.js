import { useEffect, useState } from "react"
import {getProducts} from "../../asyncMockProduct"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) =>{

    const [products,setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response =>{
            setProducts(response)
        })
    },[])

    return (
        <div className="container mt-3">
            <h1 className="mt-4">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer