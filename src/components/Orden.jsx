import React from 'react';
import '@styles/Orden.scss';


const Orden = () => {


  return (
 
    <div className="ord">
    <div className='tit-orden'>
    <p> Mi orden</p>
  </div>
      <div className='encabezado'>
        <div> 
          <h3>20.01.2023</h3>
          <p>6 articulos</p> 
        </div>
        <div>
          <h3>$200.00</h3>
        </div>
      </div>
      </div>
  );
};

export default Orden;
