import logo from '../logo.svg'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {CartProvider} from 'react-use-cart'
import {Link} from "react-router-dom"
import Cart from './Cart.js'


function Item(props) {

let [cartValue,setCartValue] = useState(0);
const max = props.stock
const itemId = "item/" + props.id
const onAdd = ()=>{
    if(cartValue < max){
    setCartValue(++cartValue)
    } 
    },
  onRemove = ()=>{
    if(cartValue > 0){
    setCartValue(cartValue - 1)
    } 
    }
  return (
    
    <div  class="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div class="card p-0 overflow-hidden h-100 shadow">
    <Link to={itemId}>
    <img class="card-img-top img-fluid" src={props.img} alt="Card image cap"/>
    </Link>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>  
        <h5 class="card-title">{props.price}</h5>
        <p class="card-text">{props.desc}</p>
        <div class="col-lg-6">
        <div className="input-group">
        <button onClick={onRemove} type="button" className="btn btn-danger">-</button>
        <input type="text" id="quantity" name="quantity" className="form-control input-number" value={cartValue}/>
        <button onClick={onAdd} type="button" className="btn btn-success">+</button>
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