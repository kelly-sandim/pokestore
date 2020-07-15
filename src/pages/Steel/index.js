import React from 'react';
import '../../styles/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokeSteel from '../../assets/pokestore-steel.svg';
import { CartProvider } from "react-use-cart";
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Pokemons from '../../components/Pokemons';

function Steel() {
  
  return (
    <div className="background-steel">
      <CartProvider
              onItemAdd={item => console.log(`Item ${item.id} adicionado!`)}
              onItemUpdate={item => console.log(`Item ${item.id} atualizado!`)}
              onItemRemove={() => console.log(`Item removido!`)}                
      >
        <Header image={PokeSteel} />
        <Container fluid="lg" >     
          
            <Row>
              <Pokemons url="https://pokeapi.co/api/v2/type/steel" /> 
            </Row>

        </Container>
      </CartProvider>        
      
      <Modal />    
    </div>
  );
}

export default Steel;