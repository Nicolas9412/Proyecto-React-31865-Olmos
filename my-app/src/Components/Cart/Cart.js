import { useContext, useEffect } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, totalBuy, clearCart } = useContext(CartContext);

  const pintarCarrito = () => {
    return (
      <div className="container mt-5">
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
              <tr>
                <th scope="row">{`${(i = i + 1)}`}</th>
                <td>{`${itemCart.title}`}</td>
                <td>{`${itemCart.quantity}`}</td>
                <td>{`${itemCart.price}`}</td>
                <td>
                  <button
                    className="btn btn-warning text-white"
                    onClick={() => removeItem(itemCart)}
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
                <button className="btn btn-danger" onClick={() => clearCart()}>
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
          <button className="btn btn-primary">Pagar</button>
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
