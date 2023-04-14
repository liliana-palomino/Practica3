import React from 'react';
import logo from '@assets/logo1.png'
import '@styles/MiCuenta.scss';
import {useNavigate} from 'react-router-dom';   

const MiCuenta = () => {
  const navigate = useNavigate();

  const navigateToCrearCuenta = () => {
    navigate('/CrearCuenta');
  };
    return (
        <div className="micuenta">
  <div className="form-container-micuenta">
    <form action="" className="form-login-micuenta">
      <img src={logo} className="logo-micuenta" />
      <p>Mi cuenta</p>
      <label htmlFor="email" className="label-cuenta">Correo Electronico</label>
      <label htmlFor="text" className="label-text">correo@hotmail.com</label>

      <label htmlFor="text" className="label-cuenta">Nombre</label>
      <label htmlFor="text" className="label-text">Usuario</label>

      <label htmlFor="email" className="label-cuenta">Contraseña</label>
      <label htmlFor="text" className="label-text">*********</label>

      <button type="submit" className="boton-principal-micuenta" onClick={navigateToCrearCuenta}>Editar</button>
    </form>
  </div>
</div>

    );
}

export default MiCuenta;