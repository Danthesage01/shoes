import React, { useEffect, useState } from 'react'
import Shoes from './components/Shoes'
import Loading from './components/Loading'



const url = `https://fake-shoevendor.herokuapp.com/sneakers/`


function App() {
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)
const [shoes, setShoes] = useState([])

const removeShoe = (id)=>{
const filteredShoes = shoes.filter(shoe=>shoe.id !== id)
setShoes(filteredShoes)
}
const fetchShoes = async () =>{
  setIsLoading(true)
  try {
    const resp = await fetch(url)
    if(resp.ok=== true && resp.status === 200){
      const shoes = await resp.json()
      setIsLoading(false)
      setIsError(false)
      setShoes(shoes)
    }
    else{
      setIsLoading(false)
      setIsError(true)
      throw new Error(`${resp.statusText}`)
    }
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  fetchShoes()
}, [])

  if(isLoading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if(isError){
    return(
      <main>
        <h2>There is a big fat error</h2>
      </main>
    )
  }
  return (
    <main>
      <Shoes shoes={shoes} removeShoe={removeShoe}/>
      {shoes.length === 0 ? null : <button className='btn' onClick={()=>setShoes([])}> Remove All</button>}
      {shoes.length === 0 && <button className='btn-refresh' onClick={()=>fetchShoes()}> Refresh</button>}
    </main>
  )
}

export default App