import React , { useState } from "react"
//import './assets/scss/animation.scss';


const Slider = () => {
	
	const [inputValue ,setInputValue] = useState('defaul');
	
	let onChange = (event) =>{
		
		const newValue = event.target.value;
		setInputValue(newValue);
		
	}
	
    return (
		<>
			<div><input placeholder="typo text" onChange={onChange}/>{inputValue}</div>
		</>
	)	
}


export default Slider
