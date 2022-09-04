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
 
  useEffect(() => {
    window.google.accounts.id.initialize({
    client_id:"635490349853-hc4cstvoqs0ahj4n1468mg66ouvshdfv.apps.googleusercontent.com",
    callback:handleCallbackResponse
  })
  window.google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"outline", size:"large"}
  )
  }, [])
  

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
