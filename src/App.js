import logo from './logo.svg';
import React, {Component, useState} from 'react'
import {render} from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/NavBar.js'
import ItemCard from './components/ItemCard.js'
import ItemListContainer from './components/ItemListContainer.js'

function App() {
  return (
  <React.Fragment className="App">
  <Navigation cat1="Men" cat2="Women" cat3="Children">
  </Navigation>
  <h1 className = "text-center mt-3"> All items</h1>
    <section className="py-4 container">
    <div className="row justify-content-center">
    <ItemCard/>
    </div>
    </section>
  </React.Fragment>
  );
}

export default App;
