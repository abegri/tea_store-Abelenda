import React, {useState} from 'react';
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import "./DropdownCategoryList.css"


const DropdownCategoryList =()=>{

    const[dropdown, setDropdown] = useState(false);

    const controlDropdown=()=>{
        setDropdown(!dropdown);
    }

    return(
                    <Dropdown isOpen={dropdown} toggle={controlDropdown} >
                        <DropdownToggle caret>Categorías</DropdownToggle>

                        <DropdownMenu>
                            <NavLink to="/category/te_en_hebras" className="nav-link">
                                <DropdownItem>Té en Hebras</DropdownItem>
                            </NavLink>
                            
                                <DropdownItem divider/>

                            <NavLink to="/category/tazas" className="nav-link">
                                <DropdownItem>Tazas</DropdownItem>
                            </NavLink>

                                <DropdownItem divider/>

                            <NavLink to="/category/accesorios" className="nav-link">
                                <DropdownItem>Accesorios</DropdownItem>
                            </NavLink>
                           


                        </DropdownMenu>

                    </Dropdown>
              
    )
}

export default DropdownCategoryList;