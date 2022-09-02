import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
        </LinkContainer>
        <Nav className="ms-auto mb-2 mb-lg-0">
          <LinkContainer to="/">
            <Nav.Link>
              <i className="fa fa-home"></i> Home
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/transactions">
            <Nav.Link>
              <i className="fa fa-money"></i> Transactions
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/add/transaction">
            <Nav.Link>New Transaction</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
