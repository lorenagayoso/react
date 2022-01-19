import logo from './logo.svg';
import React, {Component, useState} from 'react'
import {render} from 'react-dom'
import {CartProvider} from 'react-use-cart'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom"
import Cart from './components/Cart'
import {Link} from 'react-router-dom'



function App() {
  return (
  <>
  <CartProvider>
    <Router>
      <Navigation cat1="Men" cat2="Women" cat3="Children"/>
        <Routes>
          <Route exact path="/react" element={<ItemListContainer/>}></Route>
          <Route path="/category/:id" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        </Routes>
      <Cart />
    <Link to="Cart">
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="d-flex flex-row-reverse">
            <div className="p-2">
              <button type="button" className="btn btn-info ms-2">Finalizar compra</button>
            </div>
          </div>
        </div>
      </section>
    </Link>
    </Router>
  </CartProvider>
  </>
  );
}

export default App;
