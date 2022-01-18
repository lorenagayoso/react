import React from 'react'
import {useCart} from 'react-use-cart'

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  console.log({items})

  return (

    <section className="py-4 container">
    <div className="row justify-content-center">
    <div className="col-12">
    <h5>Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
    <table className="table table-light table-hover m-0">
    <tbody>
  {items.map((item,index)=>{
    return(
  <tr key={index}>
  <td>
  <img src={item.img} style={{height: '6rem'}}/>
  </td>
  <td>{item.title}}</td>
  <td>$ {item.price}</td>
  <td>Quantity ({item.quantity})</td>
  <td>
  <button
  className = "btn btn-danger ms-2"
  onClick={() => updateItemQuantity(item.id,item.quantity -1)}
  >-</button>
  <button
  className = "btn btn-success ms-2"
  onClick={() => updateItemQuantity(item.id,item.quantity + 1)}
  >+</button>
  <button
  className = "btn btn-danger ms-2"
  onClick={() => removeItem(item.id)}
  >Eliminar item</button>
  </td>
  </tr>
  )
  })}
    </tbody>
    </table>
    </div>
    <div className="col-auto ms-auto">
    <h2> Total Price: $ {cartTotal} </h2>
    </div>
    </div>
    </section>
  );
}

export default Cart;