import React from  "react"
import  Logo from "../assets/img/foodVilla.png"
import { useState } from "react"
import { Link } from "react-router-dom"




const Header = () =>{

    const [LogIn,setLogIn] = useState("LogIn");

    function handleOnClick () {
       if(LogIn=="LogIn"){
               return setLogIn("Logout")
       }else{
                return setLogIn("LogIn")
       }
    }
// const [title,setTitle] = useState("foodVilla")
// console.log("render")

    return(
        <React.Fragment>
                <div className="flex px-2 py-2 bg-pink-100 shadow-xl ">
                <a herf="/"> <img className=" h-28  rounded-full pl-2" alt="logo" src={Logo}/></a>
                 {/* <a herf="/"> <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzRlKy2m6c49pqX1la2SoEyYx_4jI2qh2cLKcJIfv&s"/></a> */}
                  <div className=" header-bar  ">
                       <ul className="flex py-10 ">
                        <li className='px-2 font-bold '><Link to="/">Home</Link></li>
                        <li className='px-2 font-bold' > <Link to="/about"> About</Link></li> 
                        <li className='px-2 font-bold '><Link to="/contact">Contact</Link></li> 
                       </ul>
                       {/* <h1>{title}</h1> */}
                       {/* <button onClick={()=>setTitle("New food app")}>Change</button> */}
                  </div>
                  <div className="button py-10">
                    <button type="button" className="btn" onClick={handleOnClick}>{LogIn}</button>
                  </div>
                  
    </div>
        </React.Fragment>
    )
}


export default Header;