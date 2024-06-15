import React from 'react'
import './Relatedproducts.css'
import new_collections from '../Assets/new_collections'
import Item from '../Items/Item'
const Relatedproducts = () => {
  return (
    <div className='relatedmain'>
      <h2 >Related Products</h2>
      <  hr/>
      <div className='related'>
      {new_collections.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
        </div>
    </div>
  )
}

export default Relatedproducts
