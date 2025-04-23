export const getPosts = async (dispatch) => {
try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Validamos antes de convertir a JSON o hacer dispatch
    if (!res.ok) {
        console.warn("Error al traer los posts, mostrando contenido predeterminado...");
  
        const defaultPosts = [
          {
            id: 999,
            title: "Post no disponible 😢",
            body: "No pudimos cargar los posts. Esto es un contenido temporal."
          }
        ];
  
        dispatch({
          type: "setPosts",
          payload: defaultPosts
        });
  
        return; // Cortamos aquí porque ya resolvimos si no está ok la peti
        }
    const data = await res.json()
    dispatch({
        type: "setPosts",
        payload: data
    })

} catch (error) {
    //aqui manejamos los errores
    console.error("Algo salió mal al traer los posts", error);
    
}
}