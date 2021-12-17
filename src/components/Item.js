import logo from '../logo.svg'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {CartProvider} from 'react-use-cart'



function Item(props) {

let [cartValue,setCartValue] = useState(0);
const max = props.stock
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
    <img class="card-img-top img-fluid" src={props.img} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <h5 class="card-title">{props.price}</h5>
        <p class="card-text">{props.desc}</p>
        <div class="col-lg-6">
        <div class="input-group">
        <button onClick={onRemove} type="button" class="btn btn-danger">-</button>
        <input type="text" id="quantity" name="quantity" class="form-control input-number" value={cartValue}/>
        <button onClick={onAdd} type="button" class="btn btn-success">+</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Item;