import logo from './logo.svg';
import React, {Component, useState} from 'react'
import {render} from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom"
import ListContext from './context/ListContext'


function App() {
  const [state, setState] = useState([1,2,3,4])
  
  window.addEventListener('clickDetalle',(e)=>{
    console.log(e.detail)
  })
  return (
  <ListContext.Provider value ={state}>
  <Router>
  <Navigation cat1="Men" cat2="Women" cat3="Children"/>
  <Routes>
  <Route exact path="/" element={<ItemListContainer/>}></Route>
  <Route path="/category/:id" element={<ItemListContainer/>}></Route>
  <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
  </Routes>
  </Router>
  </ListContext.Provider>
  );
}

export default App;
