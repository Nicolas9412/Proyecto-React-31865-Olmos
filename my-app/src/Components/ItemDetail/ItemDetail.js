import Counter from "../Counter/Counter";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { NotificacionContext } from "../../Notificacion/Notificacion";

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  const [showCounter, setShowCounter] = useState(true);

  const { addItem, removeItem, isInCart, clearCart } = useContext(CartContext);

  const setNotificacion = useContext(NotificacionContext);

  const handleOnAdd = (quantity) => {
    setNotificacion(`Se agregaron ${quantity} ${title}`, "success", 2);
    addItem({ id, title, quantity, price });
    setShowCounter(!showCounter);
  };

  const handleRemoveItem = () => {
    const quantity = removeItem({ id, title });
    setShowCounter(!showCounter);
    setNotificacion(`Se removieron ${quantity} ${title}`, "warning", 2);
  };

  const handleClearCart = () => {
    clearCart();
    setShowCounter(!showCounter);
    setNotificacion("Se ha vaciado el carrito", "warning", 2);
  };

  useEffect(() => {
    if (isInCart({ id })) setShowCounter(false);
  }, [id, isInCart, showCounter]);

  return (
    <div>
      <h2 className="text-center mt-5 fs-1">Detalle de producto</h2>
      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center mb-3 mt-4 mt-md-0">
        <div className="order-2 order-md-1 mt-4 mt-md-0">
          <p className="fs-2">
            <b>{title}</b>
          </p>
          <p className="fs-5">
            <b>Descripción: </b>
            {description}
          </p>
          <p className="fs-2">
            <b>{`$ ${price}`}</b>
          </p>
          {showCounter && (
            <Counter
              title="Agregar al carrito"
              onAdd={handleOnAdd}
              stock={stock}
            />
          )}
          {!showCounter && (
            <div className="d-flex justify-content-center align-items-center my-3">
              <button
                className="btn btn-warning text-white fs-5 mx-2"
                onClick={handleRemoveItem}
              >
                Remover Item
              </button>
              <button
                className="btn btn-danger fs-5 mx-2"
                onClick={handleClearCart}
              >
                Vaciar carrito
              </button>
            </div>
          )}
          {!showCounter && (
            <div className="d-flex justify-content-center my-3">
              <Link to="/cart">
                <button className="btn btn-success fs-4">
                  Terminar compra
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="order-1 order-md-2">
          <img className="img-detail" src={pictureUrl} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
