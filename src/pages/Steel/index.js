import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import { Container, Row } from 'reactstrap';
import {
    Card, CardImg, CardText, CardTitle
  } from 'reactstrap';


import axios from 'axios';
import { Button } from 'reactstrap';


function Steel() {
  const [ pokemon, setPokemon ] = useState([]);

  async function getPokemon() {
      const pokemons = await axios.get("https://pokeapi.co/api/v2/type/steel");      
      
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
  
  function addDefaultSrc(ev) {
    ev.target.src = 'https://vignette.wikia.nocookie.net/pokemonet/images/1/19/Missingno..png/revision/latest?cb=20130505210537&path-prefix=pt-br';
    ev.target.classList.add('missigno');
  }
  
  return (
    <>
      <Container fluid="lg" >        
        <h1>PokeStore - Aço</h1>
        <Row md="12">
            
            {
                pokemon.map(data =>  {   
                    return(                                                                                  
                        <Card body inverse style={{ backgroundColor: (data.types[0].type.name === 'steel' && typeof(data.types[1]) !== 'undefined') ? '#cccccc' : '', borderColor: (data.types[0].type.name === 'steel' && typeof(data.types[1]) !== 'undefined') ? '#cccccc' : '' }} className="col-md-4 col-sm-12">                                                                  
                            <CardImg className="pokemon-photo" variant="top" onError={e => addDefaultSrc(e)} src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} />
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

export default Steel;