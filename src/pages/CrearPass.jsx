import React, { useRef } from 'react';
import '@styles/CrearPass.scss'
import logo from '@assets/logo1.png'
import {useNavigate} from 'react-router-dom';

const CrearPass = () => {

  const formularioCrearPass = useRef(null);
  //Crear la funcion para el evento submit
  const handleCrearPass = () =>{
    //Crear la constante formData
    const formDataCrearPass = new FormData(formularioCrearPass.current)
    //Crear la constante data con los valores
    const data = {
      pass1:formDataCrearPass.get('pass1'),
      pass2:formDataCrearPass.get('pass2')
    }
    console.log(data)
  }
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };
    return (
      <div className="crearPass">
          <div className="form-container-crear">
          <img src={logo} className="logo-crear" alt="logo" />
          <form action="../Login/Login.html" className="formulario-login" ref={formularioCrearPass}>
            <p>Crear nueva contraseña</p>
            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password" className="input-crear" name="pass1" placeholder="********" />
            <label htmlFor="password" className="label">Confirmar contraseña</label>
            <input type="password" className="input-crear" name="pass2" placeholder="********" />
            <input type="button" className="boton-principal-crear" defaultValue="Confirmar" 
            //onClick={handleCrearPass} 
            onClick={navigateToHome}
            />
    </form>
  </div>
</div>

    );
}

export default CrearPass;