import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import "./ItemDetail.css"


const ItemDetail = ({itemDetails}) => {


    return (
        <section className="section-details">

            {itemDetails && itemDetails.map((itemDetail) => (

                <div className="contenedorcito" key={itemDetail.id} item={itemDetail}>
                    <h6>Home / Productos / {itemDetail.category} / {itemDetail.name}</h6>
                    {/*Ese Home podría ser un link a Home */}
                    <div className="details-container" >
                        
                            <div className="details-img-container">
                                    <img src={itemDetail.imgUrl} className="details-image" alt={itemDetail.name}/>
                            </div>

                            <div className="details-description-container">
                                <h2>{itemDetail.name}</h2>
                                <h5>Descripción:</h5>
                                <p>{itemDetail.description}</p>
                                <h4>${itemDetail.price}</h4>
                                <ItemCount stock={itemDetail.stock} initial={0} item={itemDetail}/>
                               {/*<button onClick={() => addToCart(itemDetail)}  className="addToCart-button">Agregar al carrito</button> */} 
                                
                            </div>
                            
                    
                    </div>
                    <div className="buttons-container">
                        <Link to="/" className="continue-link">
                            <button className="continue-purchase">Seguir comprando</button>
                        </Link>

                        <Link to="/cart" className="finish-link">
                            <button className="finish-purchase">Terminar compra</button>
                        </Link>
                        
                        
                    </div>

                </div>
                
            ))}
        </section>
    )
}

export default ItemDetail