import BoardRow from './boardRow/BoardRow';
import { Container, Card, Table } from 'react-bootstrap';

const Board = () => {
  const generateRows = () => {
    const temp = [];
    for (let index = 65; index < 74; index++) {
      temp.push(
        <BoardRow
          rowNo={`${String.fromCharCode(index)}`}
          key={`${String.fromCharCode(index)}`}
        />,
      );
    }
    return temp;
  };

  return (
    <div>
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
