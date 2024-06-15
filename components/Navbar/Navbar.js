import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import  {Link}  from "react-router-dom";
const Navbar = () => {
    const [menu,setmenu]=useState("shop");
    return (
        <div className="navbar" >
            <div className="nav-logo" >
                <img  src={logo} alt="logo"  />
                <p>SHOPPY</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:"none",color:"black"}} to='/'> Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
                <li  onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:"none",color:"black"}} to='/mens'> Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li  onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:"none",color:"black"}} to='/womens'> Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li  onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:"none",color:"black"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>

            </ul>
            <div className="nav-login-cart">
                <button className="login-tbn">Login</button>
                <img src={cart_icon} alt="cart"/>
                <div className="nav-cart-count">
                    10
                </div>


            </div>
        </div>
    )
}
export default Navbar