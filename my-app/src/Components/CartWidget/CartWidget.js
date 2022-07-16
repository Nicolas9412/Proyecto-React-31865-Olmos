import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <button
      type="button"
      className="btn btn-dark position-relative ms-lg-4 ms-2 btn-carrito"
    >
      <i className="bi bi-cart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {` ${totalQuantity()}`}
      </span>
    </button>
  );
};

export default CartWidget;
