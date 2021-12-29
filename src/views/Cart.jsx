import React from 'react';
import { Link } from 'react-router-dom';
import { CartConsumer } from '../context/CartProvider'; 

export default function Cart() {

    const {cart} = CartConsumer();

    
    return (
        <div>
            <h1>Bienvenido a tu carrito</h1>
            <div>
                {cart.length === 0 ? 
                <>
                    <h2>El carrito está vacío</h2>
                    <Link to="/" className="continue-link">
                            <button className="continue-purchase">Volver a la página principal</button>
                    </Link>
                   
                </>
                 
                
                : 
                
                <div>{cart.length}</div>
                
                }
            </div>
        </div>
    )
}


