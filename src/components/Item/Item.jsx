import React from 'react';
import {Link} from "react-router-dom";

import "./Item.css"


const Item = ({item}) => {
    return (
        <div className="list-card">
            <div className="img-container">
                <img src={item.imgUrl} className="card-img" alt={item.name}/>
            </div>
            <div className="card-description">
                <h5>{item.name}</h5>
                <h6>{item.category}</h6>
                <p>${item.price}</p>
               
                <Link to={`/item/${item.id}`} className="button-a">
                    <button className="seeMore-button">Ver más</button>
                </Link>
               
            </div>
            
            
        </div>
    )
}

export default Item
