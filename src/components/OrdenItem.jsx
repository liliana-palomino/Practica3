import React from 'react';
import '@styles/OrdenItem.scss';
import producto1 from '@assets/producto.jpg';
import cerrar from '@assets/cerrar.png'
//  Importa context
import AppContext from '../context/AppContext';



//1.- El componente recibe product
const OrdenItem = ({product, indexValue}) => {
  //Crea la constante eliminarCarrito
  const {eliminarCarrito} = React.useContext(AppContext)
  //Crea la funcion que llamara el hook que elimina los items seleccionados.
  const handleRemove = (index) => {
    eliminarCarrito(index)
  } 

  return (
    //2.- Remplazar los valores correspondientes
    <div className='lista'>
      <div>
        <img src={product.image_url} alt={product.name} className='producto'  />
      </div> 
      <div>
        <p>{product.name}  </p>
      </div>
      <div>
        <p>${product.price}</p>
      </div>
      <div >
        {/* En esta imagen (cerrar), llama la funcion por medio de OnClick */}
      <img src={cerrar} alt="cerrar" className='imagen-orden' onClick={()=> handleRemove(indexValue)}/>
      </div>
    </div>
  );
};

export default OrdenItem;
