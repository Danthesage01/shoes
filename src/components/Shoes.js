import React from 'react'
import Shoe from './Shoe'
const Shoes = ({ shoes, removeShoe }) => {
  return (
    <>
      <section>
        <div className='title'>
          <h1>Our Sneakers</h1>
          <div className='underline'></div>
        </div>
        <div className='container'>
          {shoes.map(shoe => {
            return <Shoe key={shoe.id} {...shoe} removeShoe={removeShoe} />
          })}
        </div>
      </section>
    </>
  )
}

export default Shoes