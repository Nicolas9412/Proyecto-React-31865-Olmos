import Counter from "../Counter/Counter";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  const [showCounter, setShowCounter] = useState(true);

  const { addItem, removeItem, isInCart, clearCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    addItem({ id, title, quantity, price });
    setShowCounter(!showCounter);
  };

  const handleRemoveItem = () => {
    removeItem({ id, title });
    setShowCounter(!showCounter);
  };

  const handleClearCart = () => {
    clearCart();
    setShowCounter(!showCounter);
  };

  useEffect(() => {
    if (isInCart({ id })) setShowCounter(false);
  }, [id, isInCart, showCounter]);

  return (
    <>
      <h2 className="text-center mt-5 fs-1">Detalle de producto</h2>
      <div className="container d-flex justify-content-center align-items-center mb-3">
        <div>
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
        <div>
          <img className="img-detail" src={pictureUrl} alt={title} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
