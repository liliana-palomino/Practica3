import React from 'react';
import '@styles/Categorias.scss';
import {useNavigate} from 'react-router-dom';


const Menu = () => { 
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };


  const navigateToMiCuenta = () => {
    navigate('/MiCuenta');
  };

  
    return (
        <div className='menu-cat'>
        <ul>
          <li>
            <a >CATEGORIAS</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Todos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Analgésicos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antipiréticos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antialérgicos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antidiarreicos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antimicóticos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Otros</a>
          </li>


          <li>
            <a onClick={navigateToMiCuenta}>Mi cuenta</a>
          </li>
        </ul>
      </div>


    ); 
}

export default Menu;