import logo from '../logo.svg'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {CartProvider} from 'react-use-cart'



function ItemCard(props) {

let [cartValue,action] = useState(0);
const onAdd = ()=>{
    action(++cartValue) 
    },
  onRemove = ()=>{
    action(cartValue - 1) 
    }
  return (
  <div  class="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div class="card p-0 overflow-hidden h-100 shadow">
    <img class="card-img-top img-fluid" src="https://www.texor.co/wp-content/uploads/2019/11/T-SHIRT-BLANCA-600x600.jpg" alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Camisa Blanca</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <div class="col-lg-6">
        <div class="input-group">
        <button onClick={onRemove} type="button" class="btn btn-danger">-</button>
        <input type="text" id="quantity" name="quantity" class="form-control input-number" value={cartValue}  min="1" max="6"/>
        <button onClick={onAdd} type="button" class="btn btn-success">+</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ItemCard;