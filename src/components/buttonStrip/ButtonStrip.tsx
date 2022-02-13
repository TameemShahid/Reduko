import React from 'react';
import { Container, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getConfiguration, reset } from '../../data/boardSlice';

const ButtonStrip = () => {
  const dispatch = useDispatch();

  const handleClick = (difficulty: string) => {
    dispatch(getConfiguration(difficulty));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleValidate = () => {
    console.log('validating');
  };
  return (
    <Container className="mt-2 text-center">
      <ButtonGroup size="lg" aria-label="Basic example">
        <Button variant="outline-secondary" onClick={() => handleClick('easy')}>
          Easy
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => handleClick('medium')}
        >
          Medium
        </Button>
        <Button variant="outline-secondary" onClick={() => handleClick('hard')}>
          Hard
        </Button>
        <Button variant="outline-secondary" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outline-secondary" onClick={handleValidate}>
          Validate
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ButtonStrip;
