'use client'
import { use, useState } from "react";
import React from "react";
import "./login.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';


export default function LoginScreen(){
  const router = useRouter();
  function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    axios.post('https://alumni-backend-yqo6.onrender.com/login', { username, password })
    .then(res => {
        if(res.data.Status === "Success"){
          document.cookie = `token=${res.data.token}; path=/;`;
          router.push("/");
        } else{
          alert("Login First");
        }
    })
    .catch(error => {
        alert(error);
    });
}

  
return(
    <section>
      <nav>
      <div className="mainContainer">
         <div className="logo"> 
               <div>
                 <img src="/logonew1.png" alt="logo" className="logoImg"></img>
               </div>
               <div className="logo-text">
                 <h1>SATHYABAMA</h1>
                 <div className="subtitle">
                   <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                   <h3>(DEEMED TO BE UNIVERSITY)</h3>
                   <h3>CATEGORY-1 UNIVERSITY BY UGC</h3> 
                 </div>
               </div>
         </div>
         <div className="loginContianer">
          <div className="bg-img-container">
            <img src="/background-img.png" className="bg-img"></img>
          </div>
          <div className="login-form">
              <div className="slogo">
                <div className="sathyabama_logo">
                  <div>
                    <img src="/logonew1.png" alt="logo" className="slogoImg"></img>
                  </div>
                  <div className="s-logo-text">
                    <h1>SATHYABAMA</h1>
                    <div className="s-subtitle">
                      <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                      <h3>(DEEMED TO BE UNIVERSITY)</h3>
                      <h3>CATEGORY-1 UNIVERSITY BY UGC</h3> 
                    </div>
                  </div>
                </div>
                <form>
                <div className="inputComponent">
                    <div className="inputelement">
                      <text className="label">REGSITER NUMBER</text>
                      <input 
                      placeholder="Enter register no" 
                      
                      id="username" 
                      className="input"
                      required
                      ></input>
                    </div>
                    <div className="inputelement">
                      <text className="label">PASSWORD</text>
                      <input 
                      placeholder="Password" 
                      id="password" 
                      type="password"
                      className="input"
                      required
                      ></input>
                    </div>
                    <div className="button">
                      <button type="button" onClick={submitForm}>LOGIN</button>
                    </div>
                    <div className="subtext">
                      <p>Forgot Password! </p>
                      <a href="/routes/ForgotPassword">Click here</a>
                    </div>
                </div> 
              </form>
              </div>
          </div>
         </div>
     </div>
      </nav>
    </section>
  )
}