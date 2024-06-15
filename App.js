import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCatagory from './pages/ShopCatagory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from "./pages/login";
import Footer from "./components/Footer/Footer";
import mens_banner from './components/Assets/banner_mens.png'
import kids_banner from './components/Assets/banner_kids.png'
import women_banner from './components/Assets/banner_women.png'
function App(){
   return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCatagory banner={mens_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCatagory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCatagory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
     
    </div>
   )
}
export default App;










// import { useState } from "react";



// function App() {
// let [email,setemail]=useState("")
// let [password,setpassword]=useState("")
// let [errormsg,seterrormsg]=useState("")
// // function handleremail(e){
// //   setemail(e.target.value)
  
 
// // }



// function handlerpassword(e){
  
  
//   setpassword(e.target.value)
// }
// function handlesubmit(){
//   if(password.length < 8){
//     seterrormsg("Min 8 digits")
//   }
//   else{
//     seterrormsg("pass word strong")
//   }
// }

//   return (

// <div>
//   <input type="text" className="form-control" placeholder="email" onChange={e=>setemail(e.target.value)}></input><br/>

//   <input type="password" className="form-control" placeholder="password" onChange={e=>handlerpassword(e)}></input><br/>
//   <p className="text-danger">{errormsg}</p>
//   <button onClick={e=>handlesubmit()} >Submit</button>
//   <h1>email : {email} <br/> password : {password}</h1>
// </div>
   
//   );
// }

// export default App;
