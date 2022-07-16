import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import { NotificacionContext } from "../../Notificacion/Notificacion";

const Item = ({ id, title, pictureUrl, price }) => {
  const { isInCart, removeItem } = useContext(CartContext);
  const setNotificacion = useContext(NotificacionContext);

  const [showDetail, setShowDetail] = useState(true);

  const handleRemoveItem = () => {
    const quantity = removeItem({ id, title });
    setShowDetail(!showDetail);
    setNotificacion(`Se removieron ${quantity} ${title}`, "warning", 2);
  };

  useEffect(() => {
    isInCart({ id }) ? setShowDetail(false) : setShowDetail(true);
  }, [isInCart, id]);

  return (
    <div className="card col-8 col-sm-6 col-md-4 col-xl-3 my-2 m-auto mx-sm-0">
      <img className="card-img-top" src={pictureUrl} alt={title} />
      <div className="card-body">
        <h5 className="card-title fs-3">{title}</h5>
        <p className="card-text fs-4">
          <b>$ {price}</b>
        </p>
        {showDetail && (
          <Link to={`/detail/${id.toString()}`}>
            <button className="btn btn-success">Ver detalle</button>
          </Link>
        )}
        {!showDetail && (
          <div className="d-flex justify-content-center align-items-center my-3">
            <button
              className="btn btn-warning text-white fs-5 mx-2"
              onClick={handleRemoveItem}
            >
              Remover Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
