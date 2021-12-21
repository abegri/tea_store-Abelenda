import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartConsumer } from '../../context/CartProvider';
import { Link } from 'react-router-dom';

import './CartWidget.css'

const CartWidget =()=>{

    //const cartContext = useContext(CartContext);

    const {cart} = CartConsumer();

    console.log(cart);


    return (
        <Link to="/cart">
            <div className="cart-container">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <p>0</p>
            </div>
        </Link>
    )
}

export default CartWidget;