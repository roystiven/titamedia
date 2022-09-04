import React, { useState, useEffect } from 'react';
import logo_google from "../assets/logo_google.png";
import {  decodeToken } from "react-jwt";

const Login = () => {

  function handleCallbackResponse(response){
    console.log(response.credential)
    let myDecodedToken = decodeToken(response.credential); 
    if(response.credential.length>0){
      localStorage.setItem('Login', JSON.stringify(myDecodedToken));
      window.location = '/home';
    }
  }
 


  return (
    <div className="o-container-login">
      <div className="o-div-login o-alinear-ver ">
        <img
          src="https://titamedia.com/wp-content/uploads/2021/01/liga-tita@2x.png"
          alt="Logo"
          className="o-ancho-100"
        />
        <br />
        <br />
         <p className='titulo-login'>Inicia sesión con tu cuenta de Google</p>
        <br />

        <div className="o-alinear-ver hor">
          <div id="signInDiv"></div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;
