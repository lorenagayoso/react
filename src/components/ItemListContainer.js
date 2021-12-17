import React from 'react'
import ItemList from './ItemList.js'
import ItemDetail from './ItemDetail.js'
import data from './data.js'



function ItemListContainer() {
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