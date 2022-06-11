const ItemDetail = ({title, description, price, pictureUrl}) =>{
    return(
        <>
            <h2 className="text-center mt-5 fs-1">Detalle de producto</h2>
            <div className="container d-flex justify-content-center align-items-center mb-3">
                <div>
                    <p className="fs-2"><b>{title}</b></p>
                    <p className="fs-5"><b>Descripción: </b>{description}</p>
                    <p className="fs-2"><b>{`$ ${price}`}</b></p>
                    <button className="btn btn-primary fs-5">Agregar</button>
                </div>
                <div>
                    <img className="img-detail" src={pictureUrl} alt={title}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail