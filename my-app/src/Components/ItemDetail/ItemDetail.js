import Counter from '../Counter/Counter';

const ItemDetail = ({title, description, price, pictureUrl, stock}) =>{

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} ${title}`)
    }

    return(
        <>
            <h2 className="text-center mt-5 fs-1">Detalle de producto</h2>
            <div className="container d-flex justify-content-center align-items-center mb-3">
                <div>
                    <p className="fs-2"><b>{title}</b></p>
                    <p className="fs-5"><b>Descripción: </b>{description}</p>
                    <p className="fs-2"><b>{`$ ${price}`}</b></p>
                    <Counter title="Agregar al carrito" onAdd={handleOnAdd} stock={stock}/>
                </div>
                <div>
                    <img className="img-detail" src={pictureUrl} alt={title}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail