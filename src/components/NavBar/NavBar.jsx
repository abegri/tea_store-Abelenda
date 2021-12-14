import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import DropdownCategoryList from '../DropdownCategoryList/DropdownCategoryList';
let logo= "/img/logo2-chico.png";

const NavBar =()=>{

    return(
        <div className="navBar-container">
            <div className="navBar-logo">
                <img src={logo} alt="logo" className="brand-logo"/>
            </div>
            <div className="drowDownMenu-container">
                <nav className="navBar">
                    
                    <DropdownCategoryList/>
                    
                </nav>
                <CartWidget/>

            </div>
            
        </div>
    )
}

export default NavBar;