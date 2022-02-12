import { useState, useEffect } from 'react';
import BoardRow from './boardRow/BoardRow';
import { Container, Card, Table } from 'react-bootstrap';
import ButtonStrip from '../buttonStrip/ButtonStrip';

const Board = () => {
  const [values, setValues] = useState({});

  useEffect(() => {
    console.log(values);
  }, [values]);

  const setBoxValue = (value: string, id: string) => {
    const temp: { [key: string]: number } = values;
    temp[id] = Number(value);
    setValues({
      ...temp,
    });
  };

  const generateRows = () => {
    const temp = [];
    for (let index = 65; index < 74; index++) {
      temp.push(
        <BoardRow
          rowNo={`${String.fromCharCode(index)}`}
          setValue={setBoxValue}
          key={`${String.fromCharCode(index)}`}
        />,
      );
    }
    return temp;
  };

  return (
    <div>
      <ButtonStrip />
      <Container className="d-flex justify-content-center mt-2">
        <Card style={{ width: '500px', height: '500px' }}>
          <Card.Body>
            <Table bordered>
              <tbody className="border-5">{generateRows()}</tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Board;
