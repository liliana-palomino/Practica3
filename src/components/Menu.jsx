import React from 'react';
import '@styles/Menu.scss';
import {useNavigate} from 'react-router-dom';

const Menu = () => { 
  const navigate = useNavigate();

  
  const navigateToMiCuenta = () => {
    navigate('/MiCuenta');
  };
  const navigateToLogin = () => {
    navigate('/Login');
  };
    return (
        <div className='menu-header'>
        <ul>

          <li>
            <a onClick={navigateToMiCuenta}> Mi cuenta </a>
          </li>
          <li>
            <a onClick={navigateToLogin}> Cerrar sesion </a>
          </li>
        </ul>
      </div>


    ); 
}

export default Menu;