import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav , Navbar , NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
    <img src={logo} width="40px" height="40px" />
    MyLogo
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav>
    <Nav.Link href="about-us">About us</Nav.Link>
    <NavDropdown title="categories">
    <NavDropdown.Item href="categories/men">Men</NavDropdown.Item>
    <NavDropdown.Item href="categories/women">Women</NavDropdown.Item>
    <NavDropdown.Item href="categories/children">Children</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default App;