import React,{useState, useEffect, useContext} from 'react'
import {useParams,NavLink} from 'react-router-dom'
import ItemList from './ItemList.js'
import data from './data.js'
import Container from 'react-bootstrap/Container'


function ItemListContainer({props}) {
return (
    <>
    <h1 className = "text-center mt-3"> My Ecommerce</h1>
    <section className="py-4 container">
    <div className="row justify-content-center">
    <ItemList  productos={data}/>
    </div>
    </section>
    </>
  );
}

export default ItemListContainer;