import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import PokeSteel from '../../assets/pokestore-steel.svg';
import PokeGrass from '../../assets/pokestore-grass.svg';


function Home() {
      
  return (
    <>
      <Container fluid="lg" >
        <Col>
            <Link to="/steel">
                <Button><img src={PokeSteel} alt=""/></Button>
            </Link>
            <Link to="/grass">
                <Button><img src={PokeGrass} alt=""/></Button>
            </Link>
        </Col>
      </Container>
    </>
  );
}

export default Home;