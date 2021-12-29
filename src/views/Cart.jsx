import React from 'react';
import { CartConsumer } from '../context/CartProvider'; 

export default function Cart() {

    const {cart} = CartConsumer();

    
    return (
        <div>
            <h1>Bienvenido a tu carrito</h1>
            <ul>
                <li>{cart.length}</li>
            </ul>
        </div>
    )
}


