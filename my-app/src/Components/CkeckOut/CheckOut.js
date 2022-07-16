import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import { crearOrdenCompra } from "../../LogicBusiness/ventaLogic";
import { useNavigate } from "react-router-dom";
import MensajeErrorInput from "../MensajeErrorInput/MensajeErrorInput";
import { NotificacionContext } from "../../Notificacion/Notificacion";

const CheckOut = () => {
  const navigate = useNavigate();
  const { totalQuantity, cart, totalBuy, clearCart } = useContext(CartContext);
  const setNotificacion = useContext(NotificacionContext);
  const [nombre, setNombre] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [apellido, setApellido] = useState("");
  const [apellidoError, setApellidoError] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telefonoError, setTelefonoError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [direccion, setDireccion] = useState("");
  const [direccionError, setDireccionError] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [ciudadError, setCiudadError] = useState("");
  const [provincia, setProvincia] = useState("");
  const [provinciaError, setProvinciaError] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [codigoPostalError, setCodigoPostalError] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
    setNombreError("");
  };

  const handleChangeApellido = (e) => {
    setApellido(e.target.value);
    setApellidoError("");
  };
  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value);
    setTelefonoError("");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleChangeDireccion = (e) => {
    setDireccion(e.target.value);
    setDireccionError("");
  };

  const handleChangeCiudad = (e) => {
    setCiudad(e.target.value);
    setCiudadError("");
  };

  const handleChangeProvincia = (e) => {
    setProvincia(e.target.value);
    setProvinciaError("");
  };

  const handleChangeCodigoPostal = (e) => {
    setCodigoPostal(e.target.value);
    setCodigoPostalError("");
  };

  const finalizarCompra = async (e) => {
    e.preventDefault();
    if (nombre === "") {
      setNombreError("Se debe ingresar nombre");
      return;
    }
    if (apellido === "") {
      setApellidoError("Se debe ingresar apellido");
      return;
    }
    if (telefono === "") {
      setTelefonoError("Se debe ingresar teléfono");
      return;
    }
    if (email === "") {
      setEmailError("Se debe ingresar email");
      return;
    }
    if (direccion === "") {
      setDireccionError("Se debe ingresar dirección");
      return;
    }
    if (ciudad === "") {
      setCiudadError("Se debe ingresar ciudad");
      return;
    }
    if (provincia === "") {
      setProvinciaError("Se debe ingresar provincia");
      return;
    }
    if (codigoPostal === "") {
      setCodigoPostalError("Se debe ingresar código postal");
      return;
    }
    const res = await crearOrdenCompra(
      nombre,
      apellido,
      telefono,
      email,
      direccion,
      ciudad,
      provincia,
      codigoPostal,
      cart,
      totalBuy()
    );
    clearCart();
    if (res) {
      setNotificacion("Orden de compra cargada con éxito", "success");
    } else {
      setNotificacion(
        "Tenemos faltantes de los productos que pediste, realiza de nuevo tu compra",
        "danger"
      );
    }

    navigate("/");
  };

  return (
    <div className="container checkoutContainer" style={{ maxWidth: 960 }}>
      <main>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Tu Carrito</span>
              <span className="badge bg-primary rounded-pill">{` ${totalQuantity()}`}</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map((itemCart) => (
                <li
                  key={itemCart.id}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 className="my-0">{`${itemCart.title}`}</h6>
                    <small className="text-muted">{`Cantidad: ${itemCart.quantity}`}</small>
                  </div>
                  <span className="text-muted ms-2">{`${itemCart.price}`}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>{`$ ${totalBuy()}`}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Dirección de facturación</h4>
            <form className="needs-validation" onSubmit={finalizarCompra}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="nombres" className="form-label">
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombres"
                    value={nombre}
                    onChange={handleChangeNombre}
                  />
                  <MensajeErrorInput mensajeError={nombreError} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="apellidos" className="form-label">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidos"
                    value={apellido}
                    onChange={handleChangeApellido}
                  />
                  <MensajeErrorInput mensajeError={apellidoError} />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="telefono" className="form-label">
                    Número de teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    value={telefono}
                    onChange={handleChangeTelefono}
                  />
                  <MensajeErrorInput mensajeError={telefonoError} />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                  <MensajeErrorInput mensajeError={emailError} />
                </div>

                <div className=" col-12">
                  <label htmlFor="domicilio" className="form-label">
                    Direccion
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="domicilio"
                    value={direccion}
                    onChange={handleChangeDireccion}
                  />
                  <MensajeErrorInput mensajeError={direccionError} />
                </div>

                <div className="col-sm-6 col-md-12 col-lg-6">
                  <label htmlFor="ciudad" className="form-label">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChangeCiudad}
                  />
                  <MensajeErrorInput mensajeError={ciudadError} />
                </div>

                <div className="col-sm-6 col-md-12 col-lg-6">
                  <label htmlFor="provincia" className="form-label">
                    Provincia
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="provincia"
                    value={provincia}
                    onChange={handleChangeProvincia}
                  />
                  <MensajeErrorInput mensajeError={provinciaError} />
                </div>

                <div className="col-sm-6 col-md-5 col-lg-4">
                  <label htmlFor="codigoPostal" className="form-label">
                    Código postal
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="codigoPostal"
                    value={codigoPostal}
                    onChange={handleChangeCodigoPostal}
                  />
                  <MensajeErrorInput mensajeError={codigoPostalError} />
                </div>
              </div>

              <hr className="my-4" />
              <button type="submit" className="w-100 btn btn-primary btn-lg">
                Finalizar compra
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckOut;
