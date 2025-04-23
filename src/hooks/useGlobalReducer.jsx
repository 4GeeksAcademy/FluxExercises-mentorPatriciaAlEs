// este archivo es el centro de conexion entre el estado global (store) y los componentes que usarán ese estado global

// Este archivo parece largo, pero en realidad está haciendo solo 3 cosas:
// --> Crear el estado global y su dispatch (el como actualizarlo)
// --> Compartirlo con toda la app
// --> Darme un acceso fácil desde cualquier componente con un hook personalizado

import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store" 
// createContext → Crea un espacio compartido para pasar datos entre componentes sin props.
// useReducer → Como useState, pero más organizado cuando hay muchos datos.
// useContext → Nos permite leer lo que hay en ese contexto desde cualquier componente

// initialStore → Es el estado global inicial (como contactos: [])
// storeReducer → Es la función que dice cómo cambia ese estado según la acción --> dispatch({type: , payload: }) <-- type nos dice qué queremos hacer, y payload es la información nueva que queremos guardar.


const StoreContext = createContext()
// Crea un “canal” global por el que compartimos el store y dispatch con cualquier componente, sin pasar props


export function StoreProvider({ children }) {
   
    const [store, dispatch] = useReducer(storeReducer, initialStore())

    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

// "StoreProvider" no es un hook, es un **componente proveedor**. Pero gracias a él, podemos crear nuestro propio hook (useGlobalReducer) para usar el estado global fácilmente en cualquier parte de la app."

// Ponemos todo dentro de un <StoreContext.Provider> para compartirlo con toda la aplicación
// children es todo lo que envolveremos en main.jsx
// Esto permite que cualquier componente dentro de <StoreProvider> pueda acceder al estado global con useGlobalReducer()


export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}

// Este hook hace que desde cualquier componente puedas acceder fácil a:
// const { store, dispatch } = useGlobalReducer();

// --->> De aquí importaremos esto const { store, dispatch } = useGlobalReducer() en los componentes donde tengamos que acceder al estado global (store) y su actualizador (dispatch)
// Imaginemos que useReducer es como tener un useState más organizado, que en lugar de usar setState, usa dispatch, y que lo puedes compartir en toda tu app gracias a Context, no solo en el componente donde lo utilizas y sin tener que compartir la info por props.