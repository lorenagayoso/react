import logo from './logo.svg';
import React, {Component, useState} from 'react'
import {render} from 'react-dom'
import {CartProvider,useCart} from 'react-use-cart'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom"
import Cart from './components/Cart'
import {Link} from 'react-router-dom'
import {addDoc,collection,getDocs, doc ,setDoc, getFirestore, getDoc, where, query} from 'firebase/firestore'


function App() {
  const {totalItems,items} = useCart();
  function checkout(products, carttotal){
    const db = getFirestore();
     setDoc(doc(db,"items","order_test"),{
        buyer: {name:"julio", phone: "5555", email: "test@a.com"},
        items: [{products}],
        total: {carttotal}
      }); 
  }
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
      <Cart />

      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="d-flex flex-row-reverse">
            <div className="p-2">
              <button type="button" className="btn btn-info ms-2" onClick={()=>checkout({items},{totalItems})}>Checkout</button>
            </div>
          </div>
        </div>
      </section>
    
    </Router>
  </CartProvider>
  </>
  );
}

export default App;
