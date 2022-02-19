import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {

	const [inputValue, setInputValue] = useState('');

	const valorInputChange = (e) => {
		// A la hora de escribir algo en el input
		const valor = e.target.value;
		setInputValue(valor);
	}

	const eventSubmit = (e) => {
		e.preventDefault();

		// Validación del input
		if(inputValue.trim().length > 2){
			setCategories(cats => [inputValue, ...cats]);
			setInputValue('');
		}
	}

  return (
  
  	<form onSubmit={eventSubmit}>
		<input 
			type="text"
			value={inputValue}
			onChange={valorInputChange}
		/>
	</form>
	
  );
}

/* Restricción para que otros developers sepan que el prop: "setCategories",
	es obligatorio pasarlo al componente AddCategory */

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}

export default AddCategory;