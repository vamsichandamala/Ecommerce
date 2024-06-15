import React from 'react'
import './Offer.css'
import exclusive_img from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        
        <div className='offers-left'>
        <h2> Exclusive </h2>
        <h2> <span className='offers-span'>Offers</span> for you</h2>
        <p> only on best seller products</p>
        <button>Check Now</button>
        </div>
        <img className='exclusive_img' src={exclusive_img} alt=''/>

    
      
    </div>
  )
}

export default Offers;
