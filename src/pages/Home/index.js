import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { Button } from 'reactstrap';
import PokeSteel from '../../assets/pokestore-steel.svg';
import PokeGrass from '../../assets/pokestore-grass.svg';


function Home() {
      
  return (
    <>      
      <Col>
          <Link to="/steel">
              <Button id="steel-button"><img src={PokeSteel} alt=""/></Button>
          </Link>
          <Link to="/grass">
              <Button color="success" id="grass-button"><img src={PokeGrass} alt=""/></Button>
          </Link>
      </Col>      
    </>
  );
}

export default Home;