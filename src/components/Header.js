import React, { useState } from "react";
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,  
  Input     
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartList from './CartList';
import { useCart } from "react-use-cart";

function Header(props)  {
    const {
      isEmpty,
      cartTotal,
      totalItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart
    } = useCart();
    function displayList() {
        var list = document.getElementById("cartList");
        if (window.getComputedStyle(list).display === "none") {
          document.getElementById("cartList").style.display = "block";
        }
        else {
          document.getElementById("cartList").style.display = "none";
        }
    }

    
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
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} onClick={ displayList } /> - {totalItems}
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                      <CartList 
                        isEmpty = {isEmpty}
                        cartTotal = {cartTotal}
                        totalItems = {totalItems}
                        items = {items}
                        updateItemQuantity = {updateItemQuantity}
                        removeItem = {removeItem}
                        emptyCart = {emptyCart}
                      />
                    </DropdownItem>                    
                  </DropdownMenu>
                </UncontrolledDropdown>                 
            </Nav>            
            </Collapse>
        </Navbar>         
        
    );
    
  }
  
export default Header;
