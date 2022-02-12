import React from 'react';
import { Container, Button, ButtonGroup, InputGroup } from 'react-bootstrap';

const ButtonStrip = () => {
  return (
    <Container className="mt-2 text-center">
      <ButtonGroup size="lg" aria-label="Basic example">
        <InputGroup>
          <InputGroup.Text>Generate</InputGroup.Text>
        </InputGroup>
        <Button variant="outline-secondary">Easy</Button>
        <Button variant="outline-secondary">Medium</Button>
        <Button variant="outline-secondary">Hard</Button>
      </ButtonGroup>
    </Container>
  );
};

export default ButtonStrip;
