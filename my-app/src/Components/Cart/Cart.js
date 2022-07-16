import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { NotificacionContext } from "../../Notificacion/Notificacion";

const Cart = () => {
  const { cart, removeItem, totalBuy, clearCart } = useContext(CartContext);
  const setNotificacion = useContext(NotificacionContext);

  const handleRemoveItem = (itemCart) => {
    const quantity = removeItem(itemCart);
    setNotificacion(
      `Se removieron ${quantity} ${itemCart.title}`,
      "warning",
      2
    );
  };

  const handleClearCart = () => {
    clearCart();
    setNotificacion("Se ha vaciado el carrito", "warning", 2);
  };

  const pintarCarrito = () => {
    return (
      <div className="container mt-5 cartTableContainer">
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
            {cart.map((itemCart, i) => (
              <tr key={i}>
                <th scope="row">{`${(i = i + 1)}`}</th>
                <td>{`${itemCart.title}`}</td>
                <td>{`${itemCart.quantity}`}</td>
                <td>{`${itemCart.price}`}</td>
                <td>
                  <button
                    className="btn btn-warning text-white"
                    onClick={() => handleRemoveItem(itemCart)}
                  >
                    Remover
                  </button>
                </td>
                <td>{`${itemCart.price * itemCart.quantity}`}</td>
              </tr>
            ))}

            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleClearCart()}
                >
                  Vaciar carrito
                </button>
              </td>
              <td>
                <p className="fs-4">
                  TOTAL<b>{` ${totalBuy()}`}</b>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to={"/checkout"}>
          <button className="btn btn-primary">Terminar compra</button>
        </Link>
      </div>
    );
  };

  const volverATienda = () => {
    return (
      <div className="container mt-3">
        <h2>No hay items en el carrito</h2>
        <Link to={`/`}>
          <button className="btn btn-primary mt-2">Volver a tienda</button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-center my-3">Carrito de compras</h1>
      {cart.length !== 0 ? pintarCarrito() : volverATienda()}
    </div>
  );
};

export default Cart;
