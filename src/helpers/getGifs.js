
// Forma de consultar una API

export const getGifs = async (category) => {
	
	const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=AN8B3amjgB7TzxcN5bJvMFTnkKSAwR4G`;

	const respuesta = await fetch(url);
	const {data} = await respuesta.json();
	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url
		}
	})
	
	// gifs: Es un arreglo de objetos
	return gifs;
}
