//1.- Importar useState
import React, {useState} from 'react'

//2.- Crear una constante para el estado inicial
const estadoInicial = {
    carrito: [],
    //Lo agregue para favoritos
    favoritos: [],
}

//3.- Crear la funcion para el mannejo de estado
const useEstadoInicial = () =>{
    const [state,setState] = useState(estadoInicial)


    const agregarCarrito = (payload) =>{
        setState({
            //4.- Lo que esta en el estado traerlo
            ...state,
            //5.- A lo que tenemos en el estado agregar payload
            //El operador ... indica qe anada el resto de los valores en un arreglo
            carrito: [...state.carrito, payload]
        })
        console.log(state.carrito)   
    }

    //Agregar la funcion para eliminar elementos del carrito
    const eliminarCarrito = (indexValue) =>{
        setState({
            ...state,
           carrito:
           state.carrito.filter((product,index) => index !== indexValue),

        })
    }

    const agregarFavoritos = (payload) =>{
        setState({
            //4.- Lo que esta en el estado traerlo
            ...state,
            //5.- A lo que tenemos en el estado agregar payload
            //El operador ... indica qe anada el resto de los valores en un arreglo
            favoritos: [...state.favoritos, payload]
        })
        console.log(state.favoritos)   
    }

    //Agregar la funcion para eliminar elementos del carrito
    const eliminarFavoritos = (indexValue) =>{
        setState({
            ...state,
           favoritos:
           state.favoritos.filter((product,index) => index !== indexValue),

        })
    }


    return{
        //6.- Enviar estado y la funcion
        state, 
        agregarCarrito,
        eliminarCarrito,

        //Lo agregue para favoritos
        agregarFavoritos,
        eliminarFavoritos,
    }
}

export default useEstadoInicial;