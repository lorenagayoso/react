import React,{useState, useEffect, useContext} from 'react'
import {useParams,NavLink} from 'react-router-dom'
import ItemList from './ItemList.js'
import data from './data.js'
import ListContext from '../context/ListContext.js'
import Container from 'react-bootstrap/Container'




function ItemListContainer({props}) {
  const valueContext = useContext(ListContext)

  const event = new CustomEvent('clickDetalle',{detail:{data:{data}}})

  const handleClick = ()=>{
    window.dispatchEvent(event)
  }
  const {title} = useParams()

  const [state,setState] = useState([{title:"title"}])

  return (
    <>
    <h1 className = "text-center mt-3"> My Ecommerce</h1>
    <section className="py-4 container">
    <div className="row justify-content-center">
    <ItemList  productos={data}/>
    </div>
    </section>
    <Container>
    {state.map((value)=>{
    return <div onClick={handleClick}><NavLink to={`/item/${value.title}`} onClick={handleClick}>{value.title}</NavLink></div>
    })}
    {valueContext.map((value)=><p>{value}</p>)}
    </Container>
    </>
  );
}

export default ItemListContainer;