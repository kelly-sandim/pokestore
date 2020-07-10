import React from 'react';
import '../styles/style.css';
import { useCart } from "react-use-cart";
import { Button } from 'reactstrap';
import Missingno from '../assets/Missingno.svg';

function CartList() {    
    const {
      isEmpty,
      cartTotal,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart
    } = useCart();
  
    if (isEmpty) return <p className="col-md-3 col-sm-12 mt-2 mb-2 cart-screen">Seu carrinho está vazio :(</p>;
  
    function showModal() {    
      document.getElementById("popup").style.display = "block";
      emptyCart();
    }

    function addDefaultSrc(ev) {
        ev.target.src = Missingno;
    }
  
    return (
      <div className="col-md-3 col-sm-12 mt-2 mb-2 cart-screen">
        <h1 className="cart-subtotal">
          {totalUniqueItems} (Sub-total: <img src="https://cdn.bulbagarden.net/upload/8/8b/Pok%C3%A9monDollar_VIII_ZH.png" width="7%" alt=""/> {cartTotal})
        </h1>
  
        {!isEmpty && <Button color="danger" className="mb-3" onClick={emptyCart}>Esvaziar carrinho</Button>}
  
        <ul>
          {items.map(item => (
            <li className="poke-name" key={item.id}>
              <br />
              <div className="cart-item">
                <img className="imageItemCart" onError={e => addDefaultSrc(e)} src={ item.image } alt=""/>
                ({item.quantity}) {item.name}
                <br />
              </div>
              <div className="button-add">
                <Button
                  color="primary"
                  className="m-2"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <Button
                  color="primary"
                  className="m-2"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>            
              <Button 
                color="info"
                className="m-2 button-remove"
                onClick={() => removeItem(item.id)}>Remover &times;</Button>
              <br />
            </li>
          ))}
        </ul>
  
        {!isEmpty && <Button onClick={ showModal }>Finalizar compra</Button>}
      </div>
    );
  }

  export default CartList;