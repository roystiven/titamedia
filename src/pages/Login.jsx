import React, { useState, useEffect } from "react";
import logo_google from "../assets/logo_google.png";
import { decodeToken } from "react-jwt";

const Login = () => {

const [ val, setVal] = useState()

  function handleCallbackResponse(response) {
    console.log(response.credential);
    let myDecodedToken = decodeToken(response.credential);
    if (response.credential.length > 0) {
      localStorage.setItem("Login", JSON.stringify(myDecodedToken));
      window.location = "/home";
    }
  }

  useEffect(() => {
    try {
      window.google.accounts.id.initialize({
        client_id:
          "635490349853-hc4cstvoqs0ahj4n1468mg66ouvshdfv.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    } catch (error) {
      window.location = "/";
    }
  }, []);


  

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
        <br />
        <div className="o-div-form-login">
          <input
            type="text"
            className="o-input"
            placeholder="Ingresa tu usuario"
          />
          <input
            type="password"
            className="o-input"
            placeholder="Ingresa tu Contraseña"
          />
          <br />
          <button className="o-button">Ingresar</button>
          <br />
          <p className="titulo-login text-align">o</p>
          <br />
            <div id="signInDiv" className="o-div-google"></div>
          
        </div>
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;
