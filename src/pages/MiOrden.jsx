import React from 'react';
import Orden from '@components/Orden';
import OrdenItem from '@components/OrdenItem';
import '@styles/MiOrden.scss'


const MiOrden = () => {
    return (

<div className="orden-miorden">
  <div className="form-container-orden"> 
    <Orden/>

    <OrdenItem/> 
    <OrdenItem/> 
    <OrdenItem/> 
    <OrdenItem/>   
 

  </div>
</div>


    );
}

export default MiOrden;