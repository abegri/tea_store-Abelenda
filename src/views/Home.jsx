import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greetings="¡Bienvenidos a Tea-Time!"/>
            <Footer/>
        </div>
    )
}
