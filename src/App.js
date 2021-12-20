import logo from './logo.svg';
import React, {Component, useState} from 'react'
import {render} from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom"



function App() {
  return (
  <Router>
  <React.Fragment className="App">
  <Navigation cat1="Men" cat2="Women" cat3="Children"/>
  <Routes>
  <Route exact path="/" component={ItemListContainer}></Route>
  <Route exact path="/category/:id" component={ItemListContainer}></Route>
  <Route exact path="/item/:id" component={ItemDetailContainer}></Route>
  </Routes>
  <ItemListContainer/>
  <ItemDetailContainer/>
  </React.Fragment>
  </Router>
  );
}

export default App;
