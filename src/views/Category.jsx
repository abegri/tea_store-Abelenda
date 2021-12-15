import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Footer from "../components/Footer/Footer";

export default function Category() {

    let params= useParams();
    console.log(params)
    
    return (
        <div>
            <NavBar/>
            <ItemListContainer greetings="¡Bienvenidos a Tea-Time!"/>
            <Footer/>
        </div>
    )
}
