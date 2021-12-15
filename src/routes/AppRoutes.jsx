import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "../views/Details";
import Home from "../views/Home";
import Cart from "../views/Cart";
import Error from "../views/Error";
import Category from "../views/Category";
import Checkout from "../views/Checkout";

export default function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/item/:id" element={<Details/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="/category/:category" element={<Category/>}/>
                    <Route path="/checkout/:idTicket" element={<Checkout/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}