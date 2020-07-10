import React from 'react';
import '../../styles/style.css';
import { Container, Row, Button } from 'reactstrap';

import PokeGrass from '../../assets/pokestore-grass.svg';
import Missingno from '../../assets/Missingno.svg';
import { CartProvider, useCart } from "react-use-cart";
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Pokemons from '../../components/Pokemons';

function addDefaultSrc(ev) {
  ev.target.src = Missingno;
}

function Cart() {
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

  return (
    <div className="col-md-3 col-sm-12 mt-2 mb-2 cart-screen">
      <h1 className="cart-subtotal">
        {totalUniqueItems} (Sub-total: <img src="https://cdn.bulbagarden.net/upload/8/8b/Pok%C3%A9monDollar_VIII_ZH.png" width="10%" alt=""/> {cartTotal})
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

function Grass() {    
  
  return (
    <div className="background-grass">
      <Header image={PokeGrass} />
      <Container fluid="lg" > 
        <CartProvider
                onItemAdd={item => console.log(`Item ${item.id} adicionado!`)}
                onItemUpdate={item => console.log(`Item ${item.id} atualizado!`)}
                onItemRemove={() => console.log(`Item removido!`)}
        >
          <Row>
            <Pokemons url="https://pokeapi.co/api/v2/type/grass" /> 
            <Cart />          
          </Row>
        </CartProvider>
          
      </Container>

      <Modal />    
    </div>
  );
}

export default Grass;