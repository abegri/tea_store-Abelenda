import React from 'react';
import './ItemListContainer.css'

const ItemListContainer =({greetings})=>{
    return(
        <div className="listContainer">
            <h1>{greetings}</h1>
        </div>
    )
}

export default ItemListContainer;