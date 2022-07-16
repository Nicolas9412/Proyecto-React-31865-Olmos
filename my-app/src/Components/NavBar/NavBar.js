import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link mx-xl-4 mx-lg-3 dropdown-toggle text-uppercase"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Componentes de PC
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item">HDD</a>
                </li>
                <li>
                  <a className="dropdown-item">SSD</a>
                </li>
                <li>
                  <a className="dropdown-item">Memoria Ram</a>
                </li>
                <li>
                  <a className="dropdown-item">Microprocesadores</a>
                </li>
                <li>
                  <a className="dropdown-item">Motherboards</a>
                </li>
                <li>
                  <a className="dropdown-item">Placas de video</a>
                </li>
                <li>
                  <a className="dropdown-item">Gabinetes</a>
                </li>
                <li>
                  <a className="dropdown-item">Placas de sonido</a>
                </li>
                <li>
                  <a className="dropdown-item">Fuentes</a>
                </li>
                <li>
                  <a className="dropdown-item">Pastas Térmicas</a>
                </li>
                <li>
                  <a className="dropdown-item">Refrigeración</a>
                </li>
                <li>
                  <a className="dropdown-item">Combos de actualización</a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
              <a className="nav-link">PC armadas</a>
            </li>
            <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
              <Link to="/category/notebook" className="nav-link">
                Notebooks
              </Link>
            </li>
            <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
              <Link to="/category/tablet" className="nav-link">
                Tablets
              </Link>
            </li>
            <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
              <Link to="/category/celular" className="nav-link">
                Celulares
              </Link>
            </li>
            <li className="nav-item mx-xl-4 mx-lg-3 text-uppercase">
              <a className="nav-link">Arma tu pc</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
