import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Footer from "../components/Footer/Footer";
import { useParams } from 'react-router-dom';

export default function Details() {

    let params = useParams();
    console.log(params)
    
    return (
        <div>
            <NavBar/>
            <ItemDetailContainer/>
            <Footer/>
        </div>
    )
}
