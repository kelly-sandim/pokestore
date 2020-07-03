import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import { Button } from 'reactstrap';


function Home() {
      
  return (
    <>
      <Container fluid="lg" >
        <Col>
            <Link to="/steel">
                <Button>PokeStore - Aço</Button>
            </Link>
            <Link to="/grass">
                <Button>PokeStore - Grama</Button>
            </Link>
        </Col>
      </Container>
    </>
  );
}

export default Home;