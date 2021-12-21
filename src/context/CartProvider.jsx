import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();
export const CartConsumer =()=> useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [stateOne, setStateOne] = useState(1);
    const [stateTwo, setStateTwo] = useState(2);
    const [stateThree, setStateThree] = useState(3);


    function addToCart(item){
        setCart(...cart, item);
    }

    function checkItems(){
        console.log("Estoy revisando la cantidad")
    }
    /*recomendación: mantener states y funciones separados */
    return (
        /*si quiero que esté disponible para todos los componentes, agregamos value */
        <CartContext.Provider value={{cart, setCart, addToCart, checkItems}}>
            {children}
        </CartContext.Provider>
    )
}

/*Necesitamos decirle a React que esto es un context
y para eso está el Hook: createContext */