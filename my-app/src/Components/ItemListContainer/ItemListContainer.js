import { useContext, useEffect, useState } from "react"
import {getProducts, getProductsByCategory} from "../../asyncMockProduct"
import ItemList from "../ItemList/ItemList"
import {useParams, Link} from "react-router-dom"
import CartContext from "../../Context/CartContext"

const ItemListContainer = ({greeting}) =>{

    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [showBtnCart, setShowBtnCart] = useState(false)

    const {category} = useParams()

    const {cart, clearCart} = useContext(CartContext)

    const handleClearCart = () => {
        clearCart()
        setShowBtnCart(!showBtnCart)
    }

    useEffect(() => {
        if(cart.length !== 0) setShowBtnCart(!showBtnCart) 
    },[])

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
            <h1 className="mt-4 text-capitalize">{!category? greeting : category}</h1>
            {showBtnCart &&
            <div className='d-flex justify-content-center align-items-center my-3'>
                <button className='btn btn-danger fs-5 mx-2' onClick={handleClearCart}>Vaciar carrito</button>
                <Link to="/cart"><button className='btn btn-success fs-5 mx-2' onClick={handleClearCart}>Terminar compra</button></Link>
            </div>
            }
            {products.length > 0 ? 
            <ItemList products={products}/>
            : <h2>No hay productos</h2>}
        </div>
    )
}

export default ItemListContainer