import React from 'react'
import Item from './Item.js'
import data from './data.js'



function ItemList({props}) {
  return (
    <>
    <h1 className = "text-center mt-3"> All items</h1>
    <section className="py-4 container">
    <div className="row justify-content-center">
    {data.productData.map((item,index)=>{
      return(
      <Item img={item.img} title={item.title} desc={item.desc} price={item.price} key={index}/>
      )
    })}
    </div>
    </section>
    </>
  );
}

export default ItemList;