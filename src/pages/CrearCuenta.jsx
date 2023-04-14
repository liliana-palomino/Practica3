import React, {useRef} from 'react'
import logo from '@assets/logo1.png'
import {useNavigate} from 'react-router-dom';
import '@styles/CrearCuenta.scss';
 

const CrearCuenta = () => {
  
  const formularioCuenta = useRef(null);
  //Crear la funcion para el evento submit
  const cuentaSubmit = () => {
    //Crear la constante formData
    const formDataCuenta = new FormData(formularioCuenta.current)
    const data={
      email:formDataCuenta.get('email'),
      name:formDataCuenta.get('name'),
      pass1:formDataCuenta.get('pass1'),
      pass2:formDataCuenta.get('pass2'),
    }
    console.log(data)
  }

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };

    return (
<div className="suscribirse">
  <div className="form-container-cuenta">
    <form action="" className="form-login-crear" ref={formularioCuenta}> 
      <img src={logo} className="logo-cuenta" />
      <p>Crear cuenta</p>
      <label htmlFor="email" className="label"  >Correo Electronico</label>
      <input type="email" className="input-cuenta" name="email" placeholder="tucorreo@tudominio.com" />
      <label htmlFor="text" className="label">Nombre</label>
      <input type="text" className="input-cuenta" name="name" placeholder="Nombre completo" />
      <label htmlFor="email" className="label">Contraseña</label>
      <input type="password" className="input-cuenta"  name="pass1" placeholder="********" />
      <label htmlFor="email" className="label">Confirmar contraseña</label>
      <input type="password" className="input-cuenta" name="pass2"  placeholder="********" />
      {/* 7.- Evento onClick */}
      <input type="button" className="boton-principal-cuenta" defaultValue="Iniciar Sesion" 
      //onClick={cuentaSubmit} 
      onClick={navigateToHome}
      
      />
    </form>
  </div>
</div>

    );
}

export default CrearCuenta;