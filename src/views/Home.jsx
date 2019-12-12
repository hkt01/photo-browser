import React from 'react';
import {
  Link
} from "react-router-dom";

// bootstrap imports
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Home(props) {
  return (
    <Container className="text-center home">
      <div className="jumbotron">
        <h1>Welcome to Photo Browser!</h1>
        <p>Select how you would like to start browsing!</p>
        <ButtonGroup>
          <Link to="/albums">
            <Button className="btn btn-primary" size="lg">Albums</Button>
          </Link>
          <Link to="/images">
            <Button className="btn btn-primary" size="lg">All images</Button>
          </Link>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Home;
