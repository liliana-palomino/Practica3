import React from 'react';
import '@styles/FavoritosItem.scss';
import producto1 from '@assets/producto.jpg';
import cerrar from '@assets/cerrar.png'
//  Importa context
import AppContext from '../context/AppContext';



//1.- El componente recibe product
const FavoritosItem = ({product, indexValue}) => {
  //Crea la constante eliminarCarrito
  const {eliminarFavoritos} = React.useContext(AppContext)
  //Crea la funcion que llamara el hook que elimina los items seleccionados.
  const handleRemoveFavoritos = (index) => {
    eliminarFavoritos(index)
  } 

  return (
    //2.- Remplazar los valores correspondientes
    <div className='lista-favoritos'>
      <div>
        <img src={product.image_url} alt={product.name} className='producto-favoritos'  />
      </div> 
      <div>
        <p>{product.name}  </p>
      </div>
      <div>
        <p>${product.price}</p>
      </div>
      <div >
        {/* En esta imagen (cerrar), llama la funcion por medio de OnClick */}
      <img src={cerrar} alt="cerrar" className='imagen-orden-favoritos' onClick={()=> handleRemoveFavoritos(indexValue)}/>
      </div>
    </div>
  );
};

export default FavoritosItem;
