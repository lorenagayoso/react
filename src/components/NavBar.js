import logo from '../logo.svg'
import '../App.css';
import cart from './cart_icon.png'
import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav , Navbar , NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import data from './data.js'
import {useCart} from 'react-use-cart'


function Navigation(props) {
  const {totalItems} = useCart();
  const {cat1:category_1, cat2:category_2 , cat3: category_3} = props
  return (
    <div className="navClass">
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
    <Link to="/">
    <Navbar.Brand>
    <img src={logo} width="40px" height="40px"/>
    Ecommerce
    </Navbar.Brand>
    </Link>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav>
    <Link to="/about-us">
    <Nav.Link href="about-us">About us</Nav.Link>
    </Link>
    <NavDropdown title="categories">
    <NavDropdown.Item>{category_1}</NavDropdown.Item>
    <NavDropdown.Item href="categories/women">{category_2}</NavDropdown.Item>
    <NavDropdown.Item href="categories/children">{category_3}</NavDropdown.Item>
    </NavDropdown>
    <button class="btn btn-outline-info my-2 my-sm-0">Promos</button>
    <Link to="/contact">
    <Nav.Link href="contact">Contact</Nav.Link>
    </Link>
    </Nav>
    </Navbar.Collapse>
    <div id="cart">
    <div id="cartIcon">
    <img src={cart} width="40px" height="40px"/>
    </div>
    <span id="cartCounter" class="border border-white rounded-circle rounded-sm">
    <p>{totalItems}</p>
    </span>
    </div>
    </Navbar>
    </div>
  );
}

export default Navigation;