import React, {useRef} from 'react';
import '@styles/RecuperarPass.scss'
import email from '@assets/email.png'
import logo from '@assets/logo1.png'
import {useNavigate} from 'react-router-dom';

const EmailEnviado = () => {
  //Crear constante para useRef
  const formularioRecuperar = useRef(null);
  //Crear funcion para el boton submit
  const handleRecuperar = () =>{
    //crear contsante para formData
    const formDataRecuperar = new FormData(formularioRecuperar.current)
    //Crear constante para data 
    const data = {
      email: formDataRecuperar.get('email')
    }
    console.log(data)
  }
  const navigate = useNavigate();

  const navigateToCrearPass = () => {
    navigate('/CrearPass');
  };


    return (
<div className="rec-pass">
  <div className="form-container-pass">
 
  <img src={logo} alt="logo" className="logo-pass" />
    <h4>Recuperar contraseña </h4>
    <p>
      Ingresa la dirección de correo electrónico asociada a tu cuenta
    </p>
    <form className="form-container-form" ref={formularioRecuperar}>
    <label htmlFor="email" className="label-rec">Email</label>
      <input type="email" className="input-rec" name="email"/>
      <input type="button" className="boton-principal-rec" defaultValue="Confirmar" 
      //onClick={handleRecuperar}
      onClick={navigateToCrearPass}
       />
      </form>
  </div>
</div>

    );
}

export default EmailEnviado;