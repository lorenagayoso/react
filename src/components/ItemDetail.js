import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import img1 from './img1.jpg'
import data from './data.js'




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
<h1 className = "text-center mt-3"> Product Detail</h1>
<section className="py-4 container">
<div className="row">
 <div className="card mb-3">
  <div className="row g-0 align-items-center">
    <div className="col-md-6">
    <img src={img1}/>
    </div>
      <div className="col-md-5">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">SANGTREE - Camisas informales para hombre y niño, diseño de franela a cuadros y manga larga, tallas 3 meses a 9XL</p>
        <h5 className="card-title">850 usd</h5>
        <p className="card-text"><small className="text-muted">Disponible: {stock}</small></p>
        <div className="col-lg-3">
        <div className="input-group">
        <button onClick={onRemove} type="button" className="btn btn-danger">-</button>
        <input type="text" id="quantity" name="quantity" className="form-control input-number" value={cartValue}/>
        <button onClick={onAdd} type="button" className="btn btn-success">+</button>
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
