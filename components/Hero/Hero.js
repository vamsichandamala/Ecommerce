import React from "react";
import './Hero.css'

import arrowicon from '../Assets/arrow.png'
import heroimg from '../Assets/heroleftpic.jpg'
const Hero=()=>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                {/* <div>
                 <div className="hero-hand-icon"></div> 
                <p>new</p>
                <img src={Handicon} alt="" />
                </div> */}
                <p>Grab the new <span className="collection">collections</span> </p>
            <p>check out now</p>
            <div className="hero-latest-btn"> 
            <div>latest Collection</div>
            <img src={arrowicon} alt=""/>
            </div>
            </div>
            
            <img className="bgpic" src={heroimg} alt="pic"/>
           
        </div>
    )
}
export default Hero