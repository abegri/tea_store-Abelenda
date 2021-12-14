import React, {useState} from 'react';
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';


const DropdownCategoryList =()=>{

    const[dropdown, setDropdown] = useState(false);

    const controlDropdown=()=>{
        setDropdown(!dropdown);
    }

    return(
                    <Dropdown isOpen={dropdown} toggle={controlDropdown} >
                        <DropdownToggle caret>Categorías</DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem>Té en Hebras</DropdownItem>
                                <DropdownItem divider/>
                            <DropdownItem>Tazas</DropdownItem>
                                <DropdownItem divider/>
                            <DropdownItem>Accesorios</DropdownItem>
                        </DropdownMenu>

                    </Dropdown>
              
    )
}

export default DropdownCategoryList;