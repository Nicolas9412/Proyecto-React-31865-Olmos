import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    // Lógica para resolver que los items no se repitan
    if (!cart.some((prod) => prod.id === productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };

  const removeItem = (productToRemove) => {
    // Comprueba si el item está en el carrito
    if (isInCart(productToRemove)) {
      // Filtra los productos que no se van a eliminar
      const cartWithoutProduct = cart.filter(
        (prod) => prod.id !== productToRemove.id
      );
      setCart(cartWithoutProduct);
    }
  };

  const isInCart = (productToFind) => {
    const flag = cart.some((prod) => prod.id === productToFind.id);
    return flag;
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalBuy = () => {
    let acum = 0;
    if (cart.length !== 0) {
      cart.map((itemCart) => (acum += itemCart.quantity * itemCart.price));
      return acum;
    }
  };

  const totalQuantity = () => {
    let acum = 0;
    if (cart.length !== 0) {
      cart.map((itemCart) => (acum += itemCart.quantity));
    }
    return acum;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        isInCart,
        clearCart,
        totalBuy,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
