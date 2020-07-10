import React from 'react';
import '../../styles/style.css';
import { Container, Row } from 'reactstrap';
import PokeSteel from '../../assets/pokestore-steel.svg';
import { CartProvider } from "react-use-cart";
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Pokemons from '../../components/Pokemons';
import CartList from '../../components/CartList';

function Steel() {
  
  return (
    <div className="background-steel">
      <Header image={PokeSteel} />
      <Container fluid="lg" >     
        
        <CartProvider
                onItemAdd={item => console.log(`Item ${item.id} adicionado!`)}
                onItemUpdate={item => console.log(`Item ${item.id} atualizado!`)}
                onItemRemove={() => console.log(`Item removido!`)}                
        >
          <Row>
            <Pokemons url="https://pokeapi.co/api/v2/type/steel" /> 
            <CartList />          
          </Row>
        </CartProvider>        

      </Container>
      
      <Modal />    
    </div>
  );
}

export default Steel;