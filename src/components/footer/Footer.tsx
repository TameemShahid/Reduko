import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mt-3">
      <Container>
        <Navbar.Text data-testid="footer_text">
          REduko{' '}
          <a href="https://github.com/TameemShahid/reduko" target="_blank">
            Docs
          </a>
        </Navbar.Text>
        <Navbar.Text data-testid="author">© Tameem Shahid</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
