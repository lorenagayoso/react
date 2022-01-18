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


function App() {
  return (
  <>
  <CartProvider>
  <Router>
  <Navigation cat1="Men" cat2="Women" cat3="Children"/>
  <Routes>
  <Route exact path="/" element={<ItemListContainer/>}></Route>
  <Route path="/category/:id" element={<ItemListContainer/>}></Route>
  <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
  </Routes>
  </Router>
  <Cart />
  </CartProvider>
  </>
  );
}

export default App;
