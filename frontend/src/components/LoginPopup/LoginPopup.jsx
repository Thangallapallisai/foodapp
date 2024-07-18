import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const[curreState,setCurrstate]=useState("Login")
  return (
    <div className='login-popup'>
  <form className="login-popup-container">
    <div className="login-popup-title">
      <h2>{curreState}</h2>
      <img onClick={()=>setShowLogin(false)}   src= {assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-inputs">
    {curreState==="Login"?<></>:<input type="text" placeholder='your name' required />}
      
      <input type="email" placeholder='your email' required />
      <input type="password" placeholder='password' required />
    </div>
    <button>{curreState==="sign up"?"Create account":"Login"}</button>
    <div className="login-popup-condition">
      <input type="checkbox" required/>
      <p>by continuing,i agree to the terms of use & privacy policy.</p>
    </div>
    {curreState==="Login"
    ?<p> create a new account? <span onClick={()=>setCurrstate("sign up")} >click here</span></p>
    :<p> already have an account?<span onClick={()=>setCurrstate("Login")} >login here</span></p>
  }
  </form>
    </div>
  )
}

export default LoginPopup