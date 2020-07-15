import React from 'react';
import '../styles/style.css';
import Button from 'react-bootstrap/Button';
import Missingno from '../assets/Missingno.svg';


function CartList(props) {        
  
    if (props.isEmpty) return <p className="col-md-3 col-sm-12 mt-2 mb-2 cart-screen">Seu carrinho está vazio :(</p>;
  
    function showModal() {    
      document.getElementById("popup").style.display = "block";
      props.emptyCart();
    }

    function addDefaultSrc(ev) {
        ev.target.src = Missingno;
    }
  
    return (
      <div className="col-12 mt-2 mb-2 cart-screen">
        <h1 className="cart-subtotal">
          (Sub-total: <img src="https://cdn.bulbagarden.net/upload/8/8b/Pok%C3%A9monDollar_VIII_ZH.png" width="7%" alt=""/> {props.cartTotal})
        </h1>
  
        {!props.isEmpty && <Button variant="danger" className="mb-3" onClick={props.emptyCart}>Esvaziar carrinho</Button>}
  
        <ul>
          {props.items.map(item => (
            <li className="poke-name" key={item.id}>
              <br />
              <div className="cart-item">
                <img className="imageItemCart" onError={e => addDefaultSrc(e)} src={ item.image } alt=""/>
                ({item.quantity}) {item.name}
                <br />
              </div>
              <div className="button-add">
                <Button
                  variant="primary"
                  className="m-2"
                  onClick={() => props.updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <Button
                  variant="primary"
                  className="m-2"
                  onClick={() => props.updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>            
              <Button 
                variant="info"
                className="m-2 button-remove"
                onClick={() => props.removeItem(item.id)}>Remover &times;</Button>
              <br />
            </li>
          ))}
        </ul>
  
        {!props.isEmpty && <Button variant="secondary" onClick={ showModal }>Finalizar compra</Button>}
      </div>
    );
  }

  export default CartList;