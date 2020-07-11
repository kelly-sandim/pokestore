import React from 'react';
import '../../styles/style.css';
import { Container, Row } from 'reactstrap';

import PokeGrass from '../../assets/pokestore-grass.svg';
import { CartProvider } from "react-use-cart";
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Pokemons from '../../components/Pokemons';


function Grass() {    
  
  return (
    <div className="background-grass">
      <CartProvider
              onItemAdd={item => console.log(`Item ${item.id} adicionado!`)}
              onItemUpdate={item => console.log(`Item ${item.id} atualizado!`)}
              onItemRemove={() => console.log(`Item removido!`)}
      >
        <Header image={PokeGrass} />
        <Container fluid="lg" > 
            <Row>
              <Pokemons url="https://pokeapi.co/api/v2/type/grass" /> 
            </Row>
          
        </Container>
      </CartProvider>

      <Modal />    
    </div>
  );
}

export default Grass;