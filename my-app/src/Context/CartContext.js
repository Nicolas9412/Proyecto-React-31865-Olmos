import { createContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([])

    const addToCart = (productToAdd) => {
        if(!(cart.some((prod) => prod.id === productToAdd.id))){
            setCart([...cart,productToAdd])
            console.log(`Se agregaron ${productToAdd.quantity} ${productToAdd.title}`)
        }
    }

    return(
        <CartContext.Provider value={{cart , addToCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext