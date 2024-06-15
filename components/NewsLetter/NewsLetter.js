import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive Offers on  Your Email </h1>
    <p>Subscribe to our newsletter and stay updated</p>
    <div className='email-enter-area'>
        <input type='email' placeholder='Your email ID'/>
        <button>Subscribe</ button>
    </div>
   </div>
  )
}

export default NewsLetter
