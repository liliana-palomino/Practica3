//1.- Importar useContext
import React, {useContext} from 'react';
import '@styles/Favoritos.scss'
//2.-Importar AppContext
import AppContext from '../context/AppContext';
import {useNavigate} from 'react-router-dom';
import FavoritosItem from '../components/FavoritosItem';


const Favoritos = () => {
  //3.- Traer el estado
  const { state } = useContext(AppContext);
  
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate('/Home');
    };
  return (

<div className="orden-favoritos">
    <div className="titulo-favoritos">
    <h1> Mis favoritos</h1>
    </div>

  <div className="form-container-favoritos"> 
  {/* 4.- Iterar OrdenItem */}
  {/* 1.1 Paso 1 Modificar al llamado a OrdenItem */}
  {state.favoritos.map((product, index) =>(
    
    <FavoritosItem indexValue={index}
    key={index}
    product={product} /> 
  ))}
  
  </div>

{/* <button type="submit" className="boton-principal-favoritos" defaultValue="Finalizar compra"  > Ver mas productos  </button> */}


</div>


    );
}

export default Favoritos;