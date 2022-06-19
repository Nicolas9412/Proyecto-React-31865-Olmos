import { Link } from 'react-router-dom'

const Item = ({id,title,pictureUrl,price}) => {
    return(
        <div className="card col-8 col-sm-6 col-md-4 col-xl-3 my-2 m-auto mx-sm-0">
            <img className="card-img-top" src={pictureUrl} alt={title}/>
            <div className="card-body">
                <h5 className="card-title fs-3">{title}</h5>
                <p className="card-text fs-4"><b>$ {price}</b></p>
                <Link to={`/detail/${id.toString()}`}>
                    <button className='btn btn-success'>Ver detalle</button>
                </Link>
                <button className="btn btn-primary ms-2 my-1">Agregar</button>
            </div>
        </div>
    )
}

export default Item