import React, {useState} from 'react';
import { CartConsumer } from '../../context/CartProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import './ItemCount.css';


const ItemCount = ({stock, initial, item}) => {

    const {addToCart} = CartConsumer();

    const [count, setCount] = useState(initial);
   

    function onAdd(){
        stock > 0 && count < stock ? setCount(count + 1) : setCount(stock)
    }

    function onSustract(){
        count > 0 ? setCount(count - 1) : setCount(0)
    }

    return(
        <section>
            <div className="counter-container">
                
                    
                    <div className="buttons-containter">
                
                        <button onClick={onSustract} className="sustract-button">-</button>
                            <h1>{count}</h1>
                        <button onClick={onAdd} className="add-button">+</button>

                    </div>

                    <div>
                        <button onClick={() => addToCart(item)}  className="addToCart-button">Agregar al carrito</button>
                    </div>
    
            </div>
        </section>
    )
}

export default ItemCount;
