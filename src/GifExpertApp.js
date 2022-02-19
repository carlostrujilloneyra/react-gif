import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

	const [categories, setCategories] = useState(['Peacemaker']);
	
	// const AgregarCategoria = () => {

	// 	// cats ==> valor del estado anterior
	// 	setCategories(cats => [...cats, 'PMD']);

	// 	// Otra forma:
	// 	// setCategories([...categories, 'PMD]);
	// }
	
	return (
  		<>
		  <h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr/>

			<ol>
				{
					categories.map(category => {
						return < GifGrid 
						key= {category}
						category={category} 
						/>;
				})
			}
			
			</ol>
		</>
  )

}

export default GifExpertApp;
