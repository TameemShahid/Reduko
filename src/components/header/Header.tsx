import logo from '../../assets/imgs/sudoku.png';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            data-testid="header_logo"
            alt="Sudoku logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span style={{ marginLeft: '5px' }}>REduko</span>
        </Navbar.Brand>
        <Navbar.Text data-testid="header_text">Sudoku on React</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;
