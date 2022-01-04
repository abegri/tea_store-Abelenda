import React from 'react';
import { Link } from 'react-router-dom';
import { CartConsumer } from '../context/CartProvider'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";

export default function Cart() {

    const {cart, clear, removeItem} = CartConsumer();

    
    return (
        <div className='cartView-body'>
            <h1>Bienvenido a tu carrito</h1>
            <div>
                {cart.length === 0 ? 
                <div>
                    <h2>El carrito está vacío</h2>
                    <Link to="/" className="continue-link">
                            <button className="continue-purchase">Volver a la página principal</button>
                    </Link>
                   
                </div>
                 
                
                : 
                
                <div>
                    {cart.map((item) => (
                    <div key={item.id} className="cartItems-container">
                        <div className="itemContainer">
                            <div className="cartItems-imgContainer">
                                <img src={item.imgUrl} alt={item.name} className="cartItem-image"/>
                            </div>
                            <div className='cartItems-information'>
                                <h5>{item.name}</h5>
                                <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                                
                            </div>
                            <button onClick={() => removeItem(item)} className="removeItem-button"><FontAwesomeIcon icon={faTrashAlt}/></button>
                        </div>

                       
                    </div>
                ))}
                    <button onClick={() => clear()} className="clearCart-button">Vaciar Carrito</button>

                
                </div>
                
                }
            </div>
        </div>
    )
}


