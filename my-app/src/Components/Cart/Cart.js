import { useContext, useEffect } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, totalBuy } = useContext(CartContext)


    const pintarCarrito = () => {
        return(
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                    <th scope="col">SubTotal</th>
                    
                </tr>
                </thead>
                <tbody>
            {
                cart.map((itemCart, i = 1) => <tr>
                                            <th scope="row">{`${i++}`}</th>
                                            <td>{`${itemCart.title}`}</td>
                                            <td>{`${itemCart.quantity}`}</td>
                                            <td>{`${itemCart.price}`}</td>
                                            <td><button className="btn btn-warning text-white" onClick={() => removeItem(itemCart)}>Remover</button></td>
                                            <td>{`${itemCart.price * itemCart.quantity}`}</td>                  
                                        </tr>)
            }
                </tbody>
            </table>
            <div>
                <p className="fs-4 text-end">Total<b>{` ${totalBuy()}`}</b></p>
            </div>
        </div>
        )
    }

    const volverATienda = () => {
        return(
            <div className="container mt-3">
                <h2>No hay items en el carrito</h2>
                <Link to={`/`}>
                    <button className='btn btn-primary mt-2'>Volver a tienda</button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-center my-3">Carrito de compras</h1>
            { 
                cart.length !== 0 ? pintarCarrito() : volverATienda()
            }
        </div>
    )
}

export default Cart