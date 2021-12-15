import React from 'react';
import "./ItemDetail.css"


const ItemDetail = ({itemDetails}) => {
    return (
        <section className="section-details">
            {itemDetails && itemDetails.map((itemDetail) => (
                <>
                <h6>Home / Productos / {itemDetail.category} / {itemDetail.name}</h6>
                {/*Ese Home podría ser un link a Home */}
                <div className="details-container" key={itemDetail.id} item={itemDetail}>
                       
                        <div className="details-img-container">
                                <img src={itemDetail.imgUrl} className="details-image" alt={itemDetail.name}/>
                        </div>

                        <div className="details-description-container">
                            <h2>{itemDetail.name}</h2>
                            <h5>Descripción:</h5>
                            <p>{itemDetail.description}</p>
                            <h4>${itemDetail.price}</h4>
                           
                            <button className="addToCart-button">Agregar al carrito</button>
                        </div>
                
                
                </div>
                </>
            ))}
        </section>
    )
}

export default ItemDetail