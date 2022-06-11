import { Link } from 'react-router-dom'

const Item = ({id,title,pictureUrl,price}) => {

    return(
        <div className="card col-8 col-sm-6 col-md-4 col-xl-3 my-2 m-auto mx-sm-0">
            <img className="card-img-top" src={pictureUrl} alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <button className="btn btn-primary">Agregar</button>
                <Link to={`/detail/${id.toString()}`}>
                    <button className='btn btn-success my-1'>Ver detalle</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Item