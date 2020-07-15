import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img className="img-logo" src={props.image} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Pesquisar Pokémon" className="mr-sm-2" />
            <Button variant="outline-danger"><FontAwesomeIcon className="cartIcon" icon={faSearch} /></Button>
          </Form>
          <Nav className="mr-auto">
            <NavDropdown title={ <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} onClick={ displayList } /> - {totalItems} } id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <CartList 
                  isEmpty = {isEmpty}
                  cartTotal = {cartTotal}
                  totalItems = {totalItems}
                  items = {items}
                  updateItemQuantity = {updateItemQuantity}
                  removeItem = {removeItem}
                  emptyCart = {emptyCart}
                />
              </NavDropdown.Item>              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    
  }
  
export default Header;
