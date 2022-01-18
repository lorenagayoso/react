import 'bootstrap/dist/css/bootstrap.css'
import {CartProvider, useCart} from 'react-use-cart'
import React, {useState} from 'react'
import ReactDom from 'react-dom'
import img1 from './img1.jpg'
import data from './data.js'
import {Link} from "react-router-dom"
import {useParams} from 'react-router-dom'
import Cart from './Cart.js'




function ItemDetail({props}) {
const title = data.productData[0].title;
const img = data.productData[0].img;
const desc = data.productData[0].desc;
const price = data.productData[0].price;
const stock = data.productData[0].stock;
let {id} = useParams()

const {totalItems,items,addItem,updateItemQuantity,removeItem} = useCart()

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
        <p className="card-text">{desc}</p>
        <h5 className="card-title">$ {price}</h5>
        <p className="card-text"><small className="text-muted">Disponible: {stock}</small></p>
        <p className="card-text"><small className="text-muted">SKU:{id}</small></p>
        <div className="col-lg-5">
        <div className="input-group">
        <button type="button" className="btn btn-success"
        onClick={()=>addItem(data.productData[0])} 
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
</div>
</div>
</section>

</>
);
}

export default ItemDetail;
