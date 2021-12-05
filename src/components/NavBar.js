import logo from '../logo.svg'
import '../App.css';
import cart from './cart_icon.png'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav , Navbar , NavDropdown } from 'react-bootstrap'

function Navigation(props) {
  const {cat1:category_1, cat2:category_2 , cat3: category_3} = props
  return (
    <div className="navClass">

    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
    <img src={logo} width="40px" height="40px" />
    Ecommerce
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav>
    <Nav.Link href="about-us">About us</Nav.Link>
    <NavDropdown title="categories">
    <NavDropdown.Item href="categories/men">{category_1}</NavDropdown.Item>
    <NavDropdown.Item href="categories/women">{category_2}</NavDropdown.Item>
    <NavDropdown.Item href="categories/children">{category_3}</NavDropdown.Item>
    </NavDropdown>
    <button class="btn btn-outline-info my-2 my-sm-0">Promos</button>
    <Nav.Link href="contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <div id="cart">
    <img src={cart} width="40px" height="40px"/>
    </div>
    </Navbar>
    </div>
  );
}

export default Navigation;