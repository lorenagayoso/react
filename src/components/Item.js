import logo from '../logo.svg'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {CartProvider, useCart} from 'react-use-cart'
import {Link} from "react-router-dom"
import Cart from './Cart.js'


function Item(props) {

const itemId = "item/" + props.id

const {totalItems,items,addItem,updateItemQuantity,removeItem} = useCart()

return (  

    <div  class="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div class="card p-0 overflow-hidden h-100 shadow">
    <Link to={itemId}>
    <img class="card-img-top img-fluid" src={props.img} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>  
        <h5 class="card-title">$ {props.price}</h5>
        <p class="card-text">{props.desc}</p>
        <div class="col-lg-6">
        <div className="input-group">
        <button type="button" className="btn btn-success"
        onClick={()=>addItem(props.item)} 
        >Sumar a carrito</button>
        </div>
        </div>
        <br/>
        <Link to="Cart">
        <div>
        <button type="button" className="btn btn-info my-2 my-sm-0">Finalizar compra</button>
        </div>
        </Link>

      </div>
    </div>
  </div>
 
  );
}

export default Item;