import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import img1 from './img1.jpg'
import data from './data.js'
import Navigation from './NavBar.js'




function ItemDetail({props}) {
const title = data.productData[0].title;
const img = data.productData[0].img;
const desc = data.productData[0].desc;
const price = data.productData[0].price;
const stock = data.productData[0].stock;

let [cartValue,setCartValue] = useState(0);
const onAdd = ()=>{
    if(cartValue < stock){
    setCartValue(++cartValue)
    } 
    },
  onRemove = ()=>{
    if(cartValue > 0){
    setCartValue(cartValue - 1)
    } 
    }
  return (
<>
<Navigation cat1="Men" cat2="Women" cat3="Children"/>
<h1 className = "text-center mt-3"> Product Detail</h1>
<section className="py-4 container">
<div className="row">
 <div class="card mb-3">
  <div class="row g-0 align-items-center">
    <div class="col-md-6">
    <img src={img1}/>
    </div>
      <div class="col-md-5">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">SANGTREE - Camisas informales para hombre y niño, diseño de franela a cuadros y manga larga, tallas 3 meses a 9XL</p>
        <h5 class="card-title">850 usd</h5>
        <p class="card-text"><small class="text-muted">Disponible: {stock}</small></p>
        <div class="col-lg-3">
        <div class="input-group">
        <button onClick={onRemove} type="button" class="btn btn-danger">-</button>
        <input type="text" id="quantity" name="quantity" class="form-control input-number" value={cartValue}/>
        <button onClick={onAdd} type="button" class="btn btn-success">+</button>
        </div>
        </div>


      </div>
    </div>
  </div>
</div>
</div>
</section>

</>
);
}

export default ItemDetail;
