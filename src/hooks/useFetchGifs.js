import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

	const [state, setState] = useState({
		// data son las imágenes
		data: [],
		loading: true
	});

	useEffect(() => {
		
		getGifs(category)
		.then(imgs => {
			// Imgs: es un arreglo con las imágenes, que se le asiganará a "data"
			setState({
				data: imgs,
				loading:false
			});
		})
	}, [category])

	return state;
}
