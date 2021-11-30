import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './CartWidget.css'

const CartWidget =()=>{
    return (
        <div className="cart-container">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            <p>0</p>
        </div>
    )
}

export default CartWidget;