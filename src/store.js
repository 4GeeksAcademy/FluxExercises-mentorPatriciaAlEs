export const initialStore=()=>{
  return{
    user: null, // cuando vaya a guardar solo una cosa (un usuario, un objeto, pero solo uno, tambien podria ser un objeto vacío { })
    posts: [] // cuando reciba varios elementos, crearé un array vacio listo para guardar info (get o post)
  }
}

// Vamos a ir agregando propiedades a initialStore cuando en el proyecto necesitemos guardar algo nuevo en el estado global. Si queremos mostrar una lista de posts, empezamos con posts: [].
// Más adelante, si queremos guardar qué post está seleccionado, agregamos postSeleccionado: null. Lo vamos viendo a medida que el proyecto crece

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'setPosts':
      return {
        ...store,
        posts: action.payload
      };
    
    default:
      throw new Error('Tipo de acción no reconocido');
  }    
}


// En funciones async como getPosts() usaremos dispatch para actualizar el estado global.
// El dispatch tiene un type (ej: "setPosts") que debe coincidir con un case del switch en la función storeReducer.
// El reducer recibe esa acción y, usando el spread ...store, actualiza solo la parte necesaria del estado (ej: user).
// Así, traemos datos con el fetch y los almacenamos en el estado global de forma organizada.

