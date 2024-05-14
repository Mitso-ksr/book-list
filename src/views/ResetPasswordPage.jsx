import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from "../firebase/config.js";
import {
    sendPasswordResetEmail
  } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ResetPasswordPage() {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    function handleInputChange(e){
        setEmail(e.target.value)
        console.log(email)
    }

    function handlePasswordReset(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(res => console.log(res))
            .catch(error => setError(error.message))
      }
    

  return (
<div className="container login-page">
        <section>
          <h1>Welcome to the Book App</h1>
          <p>Reset Password </p>
          <div className="login-type">
          </div>
          <form className="add-form login">
            <div className="form-control">
              <label>Enter Your Email *</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={e => handleInputChange(e)}
              />
            </div>
            <button
                onClick={e => handlePasswordReset(e)}
                className="active btn btn-block"
              >
                Reset Password
              </button>
            {error && <div className="error">{error}</div>}

            <Link to={"/"} style={{"all": "unset"}}>
            <p className="forgot-password">Login/SignUP</p>
            </Link>
          </form>
        </section>
      </div>
  )
}

export default ResetPasswordPage