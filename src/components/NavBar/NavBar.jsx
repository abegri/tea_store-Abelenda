import React, {useState} from 'react';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
let logo= "/img/logo2-chico.png";

const NavBar =()=>{

    const[dropdown, setDropdown] = useState(false);

    const controlDropdown=()=>{
        setDropdown(!dropdown);
    }

    return(
        <div className="navBar-container">
            <div className="navBar-logo">
                <img src={logo} alt="logo" className="brand-logo"/>
            </div>
            <div className="drowDownMenu-container">
                <nav className="navBar">
                    
                    <Dropdown isOpen={dropdown} toggle={controlDropdown} >
                        <DropdownToggle caret>Categorías</DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem>Té en Hebras</DropdownItem>
                                <DropdownItem divider/>
                            <DropdownItem>Cajitas de té</DropdownItem>
                                <DropdownItem divider/>
                            <DropdownItem>Tazas</DropdownItem>
                        </DropdownMenu>

                    </Dropdown>
                </nav>
                <CartWidget/>

            </div>
            
        </div>
    )
}

export default NavBar;