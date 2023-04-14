import React from 'react';
import '@styles/NoEncontrado.scss';
import brownie from '@assets/brownie.jpg';


const NoEncontrado = () => {
    return (
        <div className="ContenedorPrincipalNE">
        <div className="form-containerNE">
           <center>
            <label className="label404NE">404</label>
           
            <img src={brownie} alt='No encontrado' className='brownie'></img>

            <label className="labeltextoNE">Página no encontrada</label>
            </center>
        </div>
    </div>
    );
}

export default NoEncontrado;