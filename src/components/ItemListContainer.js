import React,{useState, useEffect, useContext} from 'react'
import {useParams,NavLink} from 'react-router-dom'
import ItemList from './ItemList.js'
import data from './data.js'
import Container from 'react-bootstrap/Container'
import {collection,getDocs, doc , getFirestore, getDoc, where, query} from 'firebase/firestore'

function ItemListContainer({props}) {
useEffect(()=>{
const db = getFirestore();

const itemsCollection = collection(db,"items");
getDocs(itemsCollection).then((snapshot)=>{
    console.log(snapshot.docs.map((doc) => ({data:doc.data() })));
  });
});

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