import logo from './logo.svg';
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'

function App() {
  return (
  <React.Fragment className="App">
  <Navigation cat1="Men" cat2="Women" cat3="Children"/>
  <ItemListContainer/>
  </React.Fragment>
  );
}

export default App;
