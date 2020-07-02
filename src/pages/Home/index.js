import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import { Button } from 'reactstrap';


function Home() {
      
  return (
    <>
      <Container fluid="lg" >
        <Col>
            <Link to="/legendary">
                <Button>PokeStore Lendária</Button>
            </Link>
            <Link to="/mythical">
                <Button>PokeStore Mítica</Button>
            </Link>
        </Col>
      </Container>
    </>
  );
}

export default Home;