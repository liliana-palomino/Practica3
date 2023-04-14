//2.- Importar useContext
import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import menu from '@assets/menu.png';
import logo from '@assets/logo1.png';
import cartAgregar from '@assets/carritocompras.png';
import Menu from '@components/Menu';
import Categorias from '@components/Categorias';
import Carrito from '@containers/Carrito'
import {useNavigate} from 'react-router-dom';

//Para favoritos
import corazon from '@assets/corazon.png';

//1.- Importar AppContext
import AppContext from '../context/AppContext';
import Favoritos from '../containers/Favoritos';

const Header = () => {
  //Se crean las variables
  const  [toggle, setToggle] = useState(false)
  //3.- cREAR LA CONSTANTE PARA EL ESTADO DE CONTEXT
  const {state} = useContext(AppContext)
  //Crear funcion que actualiza el estado
  const handleToggle = () =>{
    setToggle(!toggle)

  }

  //Se crean las variables
  const  [categorias, setCategorias] = useState(false)
  //Crear funcion que actualiza el estado
  const handleCategorias = () =>{
    setCategorias(!categorias)
  }

    //Se crean las variables
    const  [carrito, setCarrito] = useState(false)
    //Crear funcion que actualiza el estado
    const handleCarrito = () =>{
      console.log("Hola")
      setCarrito(!carrito)
    }


    //PARA FAVORITOS
    const  [favoritos, setFavoritos] = useState(false)
     //Crear funcion que actualiza el estado
     const handleFavorito = () =>{
      console.log("Los favoritos")
      setFavoritos(!favoritos)
    }

    
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };

  return (
    <div>
    <nav>
      <img src={menu} alt='menu' className='menu' onClick={handleCategorias} />
      <img src={logo} alt className='logo-header' />
      <div className='navbar-izquierda'>

        <ul>
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
        </ul>
      </div>
      <div className='navbar-derecha'>
        <ul>
          <li className='navbar-email' onClick={handleToggle}>
            <a >correo@correo.com</a>
          </li>

          {/* Para favoritos */}
          <li className='navbar-favoritos' >
            <img src={corazon} alt='favoritos' className='favoritos' onClick={handleFavorito}  />
            {/* 4.- Hacer la validacion si favoritos tiene elementos */}
            {state.favoritos.length > 0 ? <div> {state.favoritos.length}</div> : null}
          </li>





          <li className='navbar-carrito' >
            <img src={cartAgregar} alt='carrito-compras' className='carrito' onClick={handleCarrito}  />
            {/* 4.- Hacer la validacion si carrito tiene elementos */}
            {state.carrito.length > 0 ? <div> {state.carrito.length}</div> : null}
          </li>
        </ul>
      </div>
    </nav>
    {toggle && <Menu/>}
    {categorias && <Categorias/>}
    {carrito && <Carrito/>}
    {favoritos && <Favoritos/>}

    </div>
  );
};

export default Header;
