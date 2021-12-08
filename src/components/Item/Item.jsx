import React from 'react';

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

                <button className="seeMore-button">Ver más</button>
            </div>
            
            
        </div>
    )
}

export default Item
