import React, { useEffect, useState} from "react";
import "./Header.css"

const Header = () => {
  const [datosLogin ,setDatosLogin]=useState(null)

  useEffect(() => {
    const Login = JSON.parse(localStorage.getItem('Login'));
    console.log(Login)
    if(Login===null){
      window.location = '/';
    }else{
      setDatosLogin(Login)
    }
  }, []);


  return (
    <div className='o-div-header'>
      <img src="https://titamedia.com/wp-content/uploads/2021/01/liga-tita@2x.png" alt="Logo" className='o-img-logo-header' />
      {datosLogin!==null&&
      <div className="o-alinear-ver">
        <p className="o-p-user">{datosLogin.given_name}</p>
        <p className="o-p-user">{datosLogin.email}</p>
      </div>
      }
    </div>
  )
}

export default Header