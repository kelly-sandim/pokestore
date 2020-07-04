import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import { Container, Row } from 'reactstrap';
import {
    Card, CardImg, CardText, CardTitle
  } from 'reactstrap';

import axios from 'axios';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,    
  Input,
  Button 
} from 'reactstrap';
import PokeSteel from '../../assets/pokestore-steel.svg';
import { CartProvider, useCart } from "react-use-cart";


function Page() {
  const { addItem, inCart } = useCart();
  const [ pokemon, setPokemon ] = useState([]);  

  let pokeArray = []

  async function getPokemon() {
      const pokemons = await axios.get("https://pokeapi.co/api/v2/type/steel");      
      
      const promises = pokemons.data.pokemon.map(async (pokeUrl) => {
          const result = await axios.get(pokeUrl.pokemon.url).then((rp) => rp.data);
          return result;
      });

      const pokeData = await Promise.all(promises);

      pokeData.map(pokemon => { 
        let backgroundValue;     
        let secondBackground;      
        if(pokemon.types[0].type.name === 'steel' && typeof(pokemon.types[1]) === 'undefined'){
          backgroundValue = '#cccccc';
        } 
        else {
          if(pokemon.types[0].type.name === 'steel'){
            switch (pokemon.types[1].type.name) {
              case 'normal':
                secondBackground = 'rgba(163, 163, 163, 1)';
                break;
              case 'fire':
                secondBackground = 'rgba(245, 117, 12, 1)';
                break;
              case 'water':
                 secondBackground = 'rgba(72, 75, 184, 1)';
                break;
              case 'fighting':
                secondBackground = 'rgba(176, 11, 22, 1)';
                break;
              case 'flying':
                secondBackground = 'rgba(168, 218, 224, 1)';
                break;
              case 'poison':
                secondBackground = 'rgba(124, 5, 179, 1)';
                break;
              case 'electric':
                secondBackground = 'rgba(245, 237, 0, 1)';
                break;
              case 'ground':
                secondBackground = 'rgba(199, 186, 0, 1)';
                break;
              case 'psychic':
                secondBackground = 'rgba(247, 89, 152, 1)';
                break;
              case 'rock':
                secondBackground = 'rgba(191, 135, 23, 1)';
                break;
              case 'ice':
                secondBackground = 'rgba(54, 255, 198, 1)';
                break;
              case 'bug':
                secondBackground = 'rgba(150, 255, 51, 1)';
                break;
              case 'dragon':
                secondBackground = 'rgba(4, 0, 120, 1)';
                break;
              case 'ghost':
                secondBackground = 'rgba(112, 78, 145, 1)';
                break;
              case 'dark':
                secondBackground = 'rgba(28, 28, 28, 1)';
                break;
              case 'grass':
                secondBackground = 'rgba(88, 237, 90, 1)';
                break;
              case 'fairy':
                secondBackground = 'rgba(235, 167, 204, 1)';
                break;
              default:
                secondBackground = 'rgba(124, 5, 179, 1)';
                break;
            }
  
            backgroundValue = `linear-gradient(145deg, rgba(204, 204, 204,1) 25%, ${secondBackground}  75%)`;
          }
          else {
            switch (pokemon.types[0].type.name) {
              case 'normal':
                secondBackground = 'rgba(163, 163, 163, 1)';
                break;
              case 'fire':
                secondBackground = 'rgba(245, 117, 12, 1)';
                break;
              case 'water':
                 secondBackground = 'rgba(72, 75, 184, 1)';
                break;
              case 'fighting':
                secondBackground = 'rgba(176, 11, 22, 1)';
                break;
              case 'flying':
                secondBackground = 'rgba(168, 218, 224, 1)';
                break;
              case 'poison':
                secondBackground = 'rgba(124, 5, 179, 1)';
                break;
              case 'electric':
                secondBackground = 'rgba(245, 237, 0, 1)';
                break;
              case 'ground':
                secondBackground = 'rgba(199, 186, 0, 1)';
                break;
              case 'psychic':
                secondBackground = 'rgba(247, 89, 152, 1)';
                break;
              case 'rock':
                secondBackground = 'rgba(191, 135, 23, 1)';
                break;
              case 'ice':
                secondBackground = 'rgba(54, 255, 198, 1)';
                break;
              case 'bug':
                secondBackground = 'rgba(150, 255, 51, 1)';
                break;
              case 'dragon':
                secondBackground = 'rgba(4, 0, 120, 1)';
                break;
              case 'ghost':
                secondBackground = 'rgba(112, 78, 145, 1)';
                break;
              case 'dark':
                secondBackground = 'rgba(28, 28, 28, 1)';
                break;
              case 'grass':
                secondBackground = 'rgba(88, 237, 90, 1)';
                break;
              case 'fairy':
                secondBackground = 'rgba(235, 167, 204, 1)';
                break;
              default:
                secondBackground = 'rgba(124, 5, 179, 1)';
                break;
            }
            
            backgroundValue = `linear-gradient(145deg, ${secondBackground} 25%, rgba(204, 204, 204,1) 75%)`;
          }
        }
        pokeArray.push({ id: pokemon.id, name: pokemon.name, price: Math.floor(Math.random() * (1500 - 200 + 1)) + 200, image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`, background: backgroundValue });            
      });        
  
  
      setPokemon(pokeArray);      
  }
  
  
  useEffect(() => {
      getPokemon();
  }, []);
  
  function addDefaultSrc(ev) {
    ev.target.src = 'https://vignette.wikia.nocookie.net/pokemonet/images/1/19/Missingno..png/revision/latest?cb=20130505210537&path-prefix=pt-br';
    ev.target.classList.add('missigno');
  }

  return (    
    <Row md="12">          
        {
            pokemon.map(data =>  {   
                const alreadyAdded = inCart(data.id);
                return(                                                                                  
                    <Card key={data.id} body inverse style={{ background: data.background }} className="col-md-4 col-sm-12 poke-card">                                                                  
                        <CardImg className="pokemon-photo" variant="top" onError={e => addDefaultSrc(e)} src={data.image} />
                        <CardTitle style={{ color: '#242424' }}>#{data.id} - {data.name}</CardTitle>
                        <CardText style={{ color: '#242424' }}><img src="https://cdn.bulbagarden.net/upload/8/8b/Pok%C3%A9monDollar_VIII_ZH.png" width="5%" alt=""/> {data.price} </CardText>                                                   
                        <Button onClick={() => addItem(data)}>
                          {alreadyAdded ? "Add again" : "Add to Cart"}
                        </Button>
                    </Card>
                );
            })
        }          
    </Row>          
  );
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

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>
        Cart ({totalUniqueItems} - {cartTotal})
      </h1>

      {!isEmpty && <Button onClick={emptyCart}>Empty cart</Button>}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.quantity} x {item.name}
            <Button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </Button>
            <Button onClick={() => removeItem(item.id)}>Remove &times;</Button>
          </li>
        ))}
      </ul>
    </>
  );
}




function Steel() {
  const [isOpen, setIsOpen] = useState(false);  

  const toggle = () => setIsOpen(!isOpen);  
  
  return (
    <>
      <Container fluid="lg" >     
        <Navbar className="header-store" color="light" light expand="md">
          <NavbarBrand href="/"><img className="img-logo" src={PokeSteel} alt=""/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Input placeholder="Pesquisar Pokémon" />
              </NavItem>              
            </Nav>            
          </Collapse>
        </Navbar>    
        
        <CartProvider
                onItemAdd={item => console.log(`Item ${item.id} adicionado!`)}
                onItemUpdate={item => console.log(`Item ${item.id} atualizado!`)}
                onItemRemove={() => console.log(`Item removido!`)}
        >
          <Cart />          
          <Page /> 
        </CartProvider>        
          
      </Container>
    </>
  );
}

export default Steel;