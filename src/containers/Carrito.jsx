//1.- Importar useContext
import React, {useContext} from 'react';
import OrdenItem from '@components/OrdenItem';
import '@styles/Carrito.scss'
//2.-Importar AppContext
import AppContext from '../context/AppContext';
import {useNavigate} from 'react-router-dom';


const Carrito = () => {
  //3.- Traer el estado
  const { state } = useContext(AppContext);
    //1.1- Crear una funcion sumTotal
    const sumTotal = () => {
      //1.2 Crear una funcion que llama al metodo reducer
      const reducer = (acumulador, valorActual) => acumulador + valorActual.price
      const sum = state.carrito.reduce(reducer, 0)
      return sum
    }
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate('/Home');
    };
  return (

<div className="orden-carrito">
    <div className="titulo-carrito">
    <h1> Mi orden</h1>
    </div>

  <div className="form-container-carrito"> 
  {/* 4.- Iterar OrdenItem */}
  {/* 1.1 Paso 1 Modificar al llamado a OrdenItem */}
  {state.carrito.map((product, index) =>(
    <OrdenItem indexValue={index}
    key={index}
    product={product} /> 
  ))}
  
  </div>


  <div className="total-carrito">
      <p> Total</p> 
      {/* 1.3- Cambiar el total por el llamado de la funcion */}
      <p>   $ {sumTotal()}</p>
  </div>

<button type="submit" className="boton-principal-carrito" defaultValue="Finalizar compra"  > Finalizar compra </button>
</div>


    );
}

export default Carrito;