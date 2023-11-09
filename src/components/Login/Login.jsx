import "./login.css"
import React from 'react'

function Login() {
  return (
    <div className='login'>
      <div className='loginContainer'>
        <div className="left">
            <h1>Sign In</h1>
            <input className="email" placeholder="  Email"></input>
            <input className="password" placeholder="  Password"></input>
            <p className="forgot">forgot your password ?</p>
            <button className="btnSignIn">Sign In</button>
        </div>
        <div className="right">
            <h1>Hello Friend!</h1>
            <p>Enter Your personal details and start journey with us</p>
            <button className="btnSignUp">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Login
