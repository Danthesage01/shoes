import React, { useState } from 'react'

const Shoe = (props) => {
  const [readMore, setReadMore] = useState(false)
  const { image, id, price, description, name, removeShoe } = props
  return (
    <article className='single-shoe'>
      <img src={image} alt={name} />
      <footer>
        <div className='shoe-info'>
          <h4>{name}</h4>
          <h4 className='shoe-price'>${price / 100}</h4>
        </div>
        <p>
          {readMore ? description : `${description.substring(0, 100)}...`}
          <button onClick={()=>setReadMore(!readMore)}>{readMore ? "see less" : "read more"}</button>
        </p>
        <button className='delete-btn' onClick={()=>removeShoe(id)}>i don't want</button>
      </footer>

    </article>
  )
}

export default Shoe