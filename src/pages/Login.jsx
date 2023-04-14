//1.- IMPORTAR EL HOOK useRef
import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/Login.scss'
import logo from '@assets/logo1.png'

const Login = () => {
  //2.- Crear una constante asignando el valor useRef
  const formulario = useRef(null);
  //5.- Crear la funcion para el evento submit
  const handleSubmit = () => {
    //Crear la constante  formData
    const formData = new FormData(formulario.current)
    const data={
      username:formData.get('email'),
      pass:formData.get('pass')
    }
    console.log(data)
  }
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };

  const navigateToCrearCuenta = () => {
    navigate('/CrearCuenta');
  };
    return (
<div className="login-login">
  <div className="form-container-login">
  <img src={logo} className="logo-login" />
  {/* AGREGAR REF Y pasar a constante al formulario */}

    <form action="../Home/Home.html" className="formulario-login-login" ref={formulario}>
      {/* 6.- Verificar htmlfor */}
      <label htmlFor="email" className="label">Correo Electronico</label>
      {/* 4.- Cambiar los id por name  */}
      <input type="email" className="input" name="email" placeholder="Tucorreo@tudominio.com" />
      <label htmlFor="pass" className="label">Contraseña</label>
      <input type="password" className="input"  name="pass"  placeholder="********" />
      {/* 7.- Evento onClick */}
      <input type="button" className="boton-principal" defaultValue="Iniciar Sesion" 
      
      //onClick={handleSubmit} 
      onClick={navigateToHome}
      
      />

      
    </form>

    <button className="boton-secundario-login" onClick={navigateToCrearCuenta} >
      Suscribirse
    </button>
     
  </div>
</div>

    );
}

export default Login;