import React, {useState, useEffect} from 'react';

import axios from 'axios';

const useGetProduct = (API)=>{
        //Variable almacena el valor inicial, funcion moodificadora
        const [product, setProduct] = useState([])

        useEffect(async() => {
            const response = await axios(API)
            setProduct(response.data)
        }, [])
      
       return product;
}

export default useGetProduct;