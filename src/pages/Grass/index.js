import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import {
    Card, CardImg, CardText, CardTitle
  } from 'reactstrap';


import axios from 'axios';
import { Button } from 'reactstrap';


function App() {
  const [ pokemon, setPokemon ] = useState([]);

  async function getPokemon() {
    const pokemons = await axios.get("https://pokeapi.co/api/v2/type/grass");
      
    const promises = pokemons.data.pokemon.map(async (pokeUrl) => {
        const result = await axios.get(pokeUrl.pokemon.url).then((rp) => rp.data);
        return result;
    });

    const pokeData = await Promise.all(promises);

    setPokemon(pokeData);
  }
  
  
  useEffect(() => {
      getPokemon();
  }, []);
  
  
  return (
    <>
      <Container fluid="lg" >        
        <h1>PokeStore - Grama</h1>
        <Row md="12">
            
            {
                pokemon.map(data =>  {   
                    return(                                                                                  
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="col-md-4 col-sm-12">                                                                  
                            <CardImg variant="top" src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} />
                            <CardTitle>#{data.id} - {data.name}</CardTitle>
                            <CardText></CardText>                                                    
                        </Card>
                    );
                })
            }
            
        </Row>  
      </Container>
    </>
  );
}

export default App;