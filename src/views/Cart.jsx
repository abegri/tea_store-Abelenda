import React from 'react';
import { Link } from 'react-router-dom';
import { CartConsumer } from '../context/CartProvider'; 

export default function Cart() {

    const {cart, clear, removeItem} = CartConsumer();

    
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
                
                <div>{cart.map((item) => (
                    <>
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.quantity} x ${item.price.toFixed(2)}</div>
                    </div>

                    <button onClick={() => removeItem(item)}>Eliminar item</button>
                    </>
                ))}
                    <button onClick={() => clear()}>Vaciar Carrito</button>

                
                </div>
                
                }
            </div>
        </div>
    )
}


