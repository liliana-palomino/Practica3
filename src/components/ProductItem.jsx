//1.- Importar useContext
import React, {useState, useContext} from 'react';
import productoItem from '@assets/producto.jpg'
import car from '@assets/car.png'
import '@styles/ProductItem.scss'
//3.- Importar AppContext
import AppContext from '../context/AppContext';


//Para favoritos
import noFavorito from '@assets/noFavorito.png';
import favorito from '@assets/favorito.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart, faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const ProductItem = ({product, favoritos}) => {
  //2.- Llamado del estado del carrito
  const{agregarCarrito, agregarFavoritos} = useContext(AppContext)

  //4.- Crear handleClick
  const handleClick = item=>{
    agregarCarrito(item);
    console.log(product)
  }

  //Para favoritos
const [isFavorite, setIsFavorite] = useState(false);

const handleFavoriteClick = () => {
  setIsFavorite(!isFavorite);
};



  const handleClickFav = item=>{
    agregarFavoritos(item);

    //console.log("LOS FAVORITOS AGREGADOS EN EL ARREGLO: "+ favoritos );
    // setCart([...cart, item])
    // // console.log("Add")
    // // agregarCarrito(item)
    // console.log(agregarCarrito)
    console.log(product);
    handleFavoriteClick();
  }



  // const handleClick = item=>{
  //   setCart([...cart, item])
  //   //agregarCarrito({...product, item});
  //   // console.log("Add")
  //   //agregarCarrito(item)
  //   console.log(item)
  //}
  // console.log(cart)




  //  const handleFavoriteClick = () => {
  //    setIsFavorite(prev => !prev);
  //  }


    return (
        <div className="ProductItem">
        <img src={product.image_url} alt='producto' className="ProductItem-img"  />
        <div className="info-product-item">
          <div>
            <p>${product.price}</p>
            <p>{product.name}</p>
          </div>


    <figure  onClick={() => handleClickFav(product)} 
    // onClick={handleFavoriteClick}
    >
    <img  src={isFavorite ? favorito : noFavorito} alt="favoritos" className='guantes' />
    </figure> 

          <figure onClick={() => handleClick(product)}>
            <img src={car} alt="guantes" className='guantes' />
          </figure> 
     
        </div>
      </div>
    );
}

export default ProductItem;