import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import './ItemCount.css';


const ItemCount = ({stock, initial}) => {
 
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
               
                    <button onClick={onSustract} className="sustract-button"><FontAwesomeIcon icon={faMinus} className="faPlus" /></button>
                    <h1>{count}</h1>
                    <button onClick={onAdd} className="add-button"><FontAwesomeIcon icon={faPlus} className="faPlus" /></button>

                </div>

                <button className="addToCart">Agregar al carrito</button>
            
        </div>
        </section>
    )
}

export default ItemCount;
