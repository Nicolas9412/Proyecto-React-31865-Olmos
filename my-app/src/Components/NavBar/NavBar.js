import React, { useState } from "react"

const NavBar = () =>{

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link mx-xl-4 mx-lg-3 dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Componentes de PC
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">HDD</a></li>
                            <li><a className="dropdown-item" href="#">SSD</a></li>
                            <li><a className="dropdown-item" href="#">Memoria Ram</a></li>
                            <li><a className="dropdown-item" href="#">Microprocesadores</a></li>
                            <li><a className="dropdown-item" href="#">Motherboards</a></li>
                            <li><a className="dropdown-item" href="#">Placas de video</a></li>
                            <li><a className="dropdown-item" href="#">Gabinetes</a></li>
                            <li><a className="dropdown-item" href="#">Placas de sonido</a></li>
                            <li><a className="dropdown-item" href="#">Fuentes</a></li>
                            <li><a className="dropdown-item" href="#">Pastas Térmicas</a></li>
                            <li><a className="dropdown-item" href="#">Refrigeración</a></li>
                            <li><a className="dropdown-item" href="#">Combos de actualización</a></li>
                        </ul>
                    </li>
                    <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
                    <a className="nav-link" href="#">PC armadas</a>
                    </li>
                    <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
                    <a className="nav-link" href="#">Notebooks</a>
                    </li>
                    <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
                    <a className="nav-link">Tablets</a>
                    </li>
                    <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
                    <a className="nav-link">Celulares</a>
                    </li>
                    <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
                    <a className="nav-link">Arma tu pc</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
