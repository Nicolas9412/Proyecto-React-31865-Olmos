import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'
import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const Header = () =>{

    const {totalQuantity} = useContext(CartContext)

    return (
        <header className="d-flex justify-content-lg-center justify-content-between header p-4">
            <Link to='/' className="text-decoration-none">
                <div className="d-flex justify-content-center align-items-center ms-lg-4 ms-2 p-3 logo ">
                    <img src={'../assets/img/logo.png'} alt='logo'></img>
                    <p className="ms-3 titulo-logo">PC Town</p>
                </div>
            </Link>
            <form class="d-none d-lg-flex justify-content-center align-items-center ms-4 form-inline my-2 my-lg-0 buscador">
                <input className="form-control me-3 mr-sm-2" type="search" placeholder="Buscar lo que sea..." aria-label="Search"/>
                <button className="btn btn-success my-2 my-sm-0" type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <div>
                <button className="btn btn-dark ms-lg-4 ms-2 btn-favoritos">
                    <i className="bi bi-suit-heart"></i>
                </button>
                {totalQuantity() !== 0 && <Link to='/cart'><CartWidget/></Link>}
                <button className="btn btn-dark ms-lg-4 ms-2 text-uppercase btn-inicioSesion">
                    <p className="d-none d-sm-block m-0">iniciar sesion</p> 
                    <i className="d-sm-none bi bi-person-circle iniciarSesion"></i>
                </button>
            </div>
        </header>
        
    )
}

export default Header