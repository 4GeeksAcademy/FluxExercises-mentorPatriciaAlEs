import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getPosts } from "../funcionesGlobales/funciones.js";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	// ya con esto está disponible el estado global (store) para actualizarse (con dispatch) y su estado inicial es el del useGlobalReducer

	useEffect(() => {
		getPosts(dispatch) // le pasamos como parametro el disptach a la funcion para que se actualice
	},
		[])

	return (
		<div className="container">
			<h1>Posts desde JSONPlaceholder</h1>
			<div className="row" >
				{store.posts?.map((post, i) => { // ponemos posts? por si no está disponible store a la hora de mapear, como está declarado en initialStore no dará error pero en caso de no delcararlo (mejor que si) esto maneja el error al acceder a store si aun no está creado.
					return (

						<div className="col-12 col-md-6" key={post.id}>
							<div className="card mb-3 p-3">
								<h5 className="card-title"><strong>Titulo del post:</strong>  {post.title}</h5>
								<p className="card-text"> <strong>Texto del post:</strong> {post.body} </p>
							</div>


						</div>)


				})}
			</div>
		</div>
	);
}; 