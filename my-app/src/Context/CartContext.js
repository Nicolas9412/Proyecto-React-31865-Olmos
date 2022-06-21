import { createContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([]) 

    const addItem = (productToAdd) => {
        if(!(cart.some((prod) => prod.id === productToAdd.id))){ // Lógica para resolver que los items no se repitan
            setCart([...cart,productToAdd])
            console.log(`Se agregaron ${productToAdd.quantity} ${productToAdd.title}`)
        }
    }

    const removeItem = (productToRemove) => {
        if(isInCart(productToRemove)){ // Comprueba si el item está en el carrito
            const cartWithoutProduct = cart.filter((prod) => prod.id !== productToRemove.id) // Filtra los productos que no se van a eliminar
            const findProductToRemove = cart.find((prod) => prod.id === productToRemove.id) // Busca la cantidad que tenía ese item en el carrito
            setCart(cartWithoutProduct)
            console.log(`Se removieron ${findProductToRemove.quantity} unidades del producto ${findProductToRemove.title}`)
        }
    }

    const isInCart = (productToFind) => {
        const flag = cart.some((prod) => prod.id === productToFind.id)
        return flag
    }

    const clearCart = () => {
        setCart([])
    }

    const totalBuy = () => {
        let acum = 0
        if(cart.length !== 0){
            cart.map((itemCart) => acum += itemCart.quantity * itemCart.price)
            return acum
        }
    }

    const totalQuantity = () => {
        let acum = 0
        if(cart.length !== 0){
            cart.map((itemCart) => acum += itemCart.quantity)
        }
        return acum
    }

    return(
        <CartContext.Provider value={{cart , addItem, removeItem, isInCart, clearCart, totalBuy, totalQuantity}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext