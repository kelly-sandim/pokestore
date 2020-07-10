import React, { useState, useEffect } from "react";
import { Row, Card, CardImg, CardText, CardTitle, Button } from 'reactstrap';
import axios from 'axios';
import Missingno from '../assets/Missingno.svg';
import { useCart } from "react-use-cart";

function Pokemons(props) {
    const { addItem, inCart } = useCart();
    const [ pokemon, setPokemon ] = useState([]);  
  
    let pokeArray = []
  
    async function getPokemon() {
        const pokemons = await axios.get(props.url);      
        
        const promises = pokemons.data.pokemon.map(async (pokeUrl) => {
            const result = await axios.get(pokeUrl.pokemon.url).then((rp) => rp.data);
            return result;
        });
  
        const pokeData = await Promise.all(promises);
  
        pokeData.map(pokemon => { 
          let backgroundValue;     
          let secondBackground;
          
          if(props.url === "https://pokeapi.co/api/v2/type/grass") {
                if(pokemon.types[0].type.name === 'grass' && typeof(pokemon.types[1]) === 'undefined'){
                    backgroundValue = '#58ed5a';
                } 
                else {
                    if(pokemon.types[0].type.name === 'grass'){
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
                        case 'steel':
                        secondBackground = 'rgba(204, 204, 204, 1)';
                        break;
                        case 'fairy':
                        secondBackground = 'rgba(235, 167, 204, 1)';
                        break;
                        default:
                        secondBackground = 'rgba(124, 5, 179, 1)';
                        break;
                    }
            
                    backgroundValue = `linear-gradient(145deg, rgba(88,237,90,1) 25%, ${secondBackground}  75%)`;
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
                        case 'steel':
                        secondBackground = 'rgba(204, 204, 204, 1)';
                        break;
                        case 'fairy':
                        secondBackground = 'rgba(235, 167, 204, 1)';
                        break;
                        default:
                        secondBackground = 'rgba(124, 5, 179, 1)';
                        break;
                    }
                    
                    backgroundValue = `linear-gradient(145deg, ${secondBackground} 25%, rgba(88,237,90,1) 75%)`;
                    }
                }
        }



        else {
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
            }
          pokeArray.push({ id: pokemon.id, name: pokemon.name, price: Math.floor(Math.random() * (1500 - 200 + 1)) + 200, image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`, background: backgroundValue });            
        });        
    
    
        setPokemon(pokeArray);      
    }
    
    
    useEffect(() => {
        getPokemon();
    }, []);
    
    function addDefaultSrc(ev) {
      ev.target.src = Missingno;
      ev.target.classList.add('missigno');
    }
  
    return (    
      <Row className="col-md-8 col-sm-12 mt-2 mb-2">          
          {
            pokemon.map(data =>  {   
                const alreadyAdded = inCart(data.id);
                return( 
                  
                    <Card key={data.id} body inverse style={{ background: data.background, borderRadius: 0 }} className="col-md-4 col-sm-12 poke-card">                                                                  
                        <CardImg className="pokemon-photo" variant="top" onError={e => addDefaultSrc(e)} src={data.image} />
                        <CardTitle className="poke-name" style={{ color: '#242424' }}>{data.name}</CardTitle>
                        <CardText className="poke-price" style={{ color: '#242424' }}><img src="https://cdn.bulbagarden.net/upload/8/8b/Pok%C3%A9monDollar_VIII_ZH.png" width="8%" alt=""/> {data.price} </CardText>                                                   
                        <Button onClick={() => addItem(data)}>
                          {alreadyAdded ? "Adicionar novamente" : "Adicionar ao carrinho"}
                        </Button>
                    </Card>
                  
                );
            })
          }          
      </Row>          
    );
  }

  export default Pokemons;