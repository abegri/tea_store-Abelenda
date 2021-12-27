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

    function addItem(){
        console.log("agregar cierta cantidad de un item al carrito")
    }

    function removeItem(){
        console.log("Remover un item del carrito por su Id")
    }

    function clear(){
        console.log("remover todos los items")
    }

    function isInCart(){
        console.log("id => true|false. Si está, tiene que retornar true. Si no, retorna false")
    }

  
    return (
        /*si quiero que esté disponible para todos los componentes, agregamos value */
        <CartContext.Provider value={{cart, addToCart, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
