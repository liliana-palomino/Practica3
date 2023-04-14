import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '@styles/ProductList.scss';
import ProductItem from '@components/ProductItem'
import useGetProduct from '../hooks/useGetProduct';

const ProductList = () => {
    const API = 'http://localhost:3001/products'
    
     //Variable almacena el valor inicial, funcion moodificadora

     const product = useGetProduct(API)
     //console.log(product)
    return (
        <section className='main-container-list'>
        <div className='cards-container-list'>
            {product.map(product=>{
                return <ProductItem product={product} key = {product.id}/>
            })}
        </div>
      </section>
    );
}

export default ProductList;