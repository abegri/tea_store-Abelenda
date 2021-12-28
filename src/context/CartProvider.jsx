import React, {createContext, useContext, useState} from 'react';

/*Necesitamos decirle a React que esto es un context
y para eso está el Hook: createContext */
const CartContext = createContext();

/*Esta función permite consumir la información de cartProvider*/
export const CartConsumer = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);


    function addToCart(item, quantity){
        let newItem = {
            ...item,
            quantity
        }
        //acá tiene que haber una condición:
        // if {} => primero se chequea si el item que estoy intenando agregar no está en el carrito. Si está, no hace nada. Si no está, lo agrega. 
        setCart([...cart, newItem]);
    }

    function removeItem(productToRemove){
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    }

    function clear(){
        setCart([]);
    }

  
    return (
        /*si quiero que esté disponible para todos los componentes, agregamos value */
        <CartContext.Provider value={{cart, addToCart, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
