import React, { useState } from "react";
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,    
    Input     
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header(props)  {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    
        <Navbar className="header-store" color="light" light expand="md">
            <NavbarBrand href="/"><img className="img-logo" src={props.image} alt=""/></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <Input placeholder="Pesquisar Pokémon" />
                </NavItem>   
                <FontAwesomeIcon className="cartIcon" icon={faShoppingCart}></FontAwesomeIcon>           
            </Nav>            
            </Collapse>
        </Navbar>         
        
    );
    
  }
  
export default Header;
