import React,{useState, useEffect, useContext} from 'react'
import ItemDetail from './ItemDetail.js'
import {useParams} from 'react-router-dom'
import {collection,getDocs, doc , getFirestore, getDoc, where, query} from 'firebase/firestore'





function ItemDetailContainer() {
useEffect(()=>{
const db = getFirestore();

const data = doc(db,"items","AwfAtBfIiyYCsSwKwKK8");
getDoc(data).then((snapshot)=>{
console.log(snapshot.data())
  }
  )
});
  return (
    <>
    <ItemDetail/>
    </>
  );
}

export default ItemDetailContainer;