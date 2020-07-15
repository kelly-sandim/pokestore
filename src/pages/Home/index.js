import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PokeSteel from '../../assets/pokestore-steel.svg';
import PokeGrass from '../../assets/pokestore-grass.svg';


function Home() {
      
  return (
    <>      
      <Col>
          <Link to="/steel">
              <Button className="col-12" variant="secondary" id="steel-button"><img className="col-9" src={PokeSteel} alt="Loja Pokés Aço"/></Button>
          </Link>
          <Link to="/grass">
              <Button className="col-12" variant="success" id="grass-button"><img className="col-9" src={PokeGrass} alt="Loja Pokés Grama"/></Button>
          </Link>
      </Col>      
    </>
  );
}

export default Home;