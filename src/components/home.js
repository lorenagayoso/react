import React from 'react'
import ItemCard from '../ItemCard.js'


function home() {
  return (
    <>
    <h1 className = "text-center mt-3"> All items</h1>
    <section className="py-4 container">
    <div className="row justify-content-center">
    <ItemCard/>
    </div>
    </section>
    </>
  );
}

export default home;