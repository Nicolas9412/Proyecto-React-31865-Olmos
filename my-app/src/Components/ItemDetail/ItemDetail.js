import Counter from '../Counter/Counter';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) =>{

    const { cart, addItem, removeItem, isInCart, clearCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, title, quantity })
    }

    const handleRemoveItem = () => {
        removeItem({ id, title })
    }

    console.log(cart)

    return(
        <>
            <h2 className="text-center mt-5 fs-1">Detalle de producto</h2>
            <div className="container d-flex justify-content-center align-items-center mb-3">
                <div>
                    <p className="fs-2"><b>{title}</b></p>
                    <p className="fs-5"><b>Descripción: </b>{description}</p>
                    <p className="fs-2"><b>{`$ ${price}`}</b></p>
                    <Counter title="Agregar al carrito" onAdd={handleOnAdd} stock={stock}/>
                    {/*{isInCart({ id }) && <button className='btn btn-dark' onClick={handleRemoveItem}>Remover</button>}*/}
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <button className='btn btn-warning text-white fs-5 mx-2' onClick={handleRemoveItem}>Remover Item</button>
                        <button className='btn btn-danger fs-5 mx-2' onClick={clearCart}>Vaciar carrito</button>
                    </div>
                    
                </div>
                <div>
                    <img className="img-detail" src={pictureUrl} alt={title}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail