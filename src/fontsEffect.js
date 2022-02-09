import React from "react"
import { useEffect } from 'react'
import './assets/scss/animation.scss';


const FontsEffect = () => {
	useEffect(() => {
		let el = document.querySelector('.effTxt');
		let ans = arrArange(el.childNodes.length);
		for(let i = 0 ; i < el.childNodes.length ; i++){
			setTimeout(() => {
				el.childNodes[ans[i]].classList.add('ani'+i);
			}, 100 * i)
		}
	}, [])
	
    return (
		<>

		<div className='effTxt'>
			<span>v</span>
			<span>o</span>
			<span>s</span>
			<span>k</span>
			<span>a</span>
			<span>u</span>
			<span>l</span>
		</div>
		</>
	)	
}


const randomNum = (min, max) => Math.floor( Math.random() * (max - min) + min);

// 取得arr位置
const arrArange = (nums) =>{
	let resoult = [];
	let arrClass = ['0','1','2','3','4','5','6'];
	for(let i=0 ; i < nums ; i++){
		let arrLength = arrClass.length;
		const num = randomNum( 0 ,arrLength);
		resoult.push(arrClass[num]);
		filtered(num,arrClass);
	}	
	return resoult;
}

const  filtered = (num , arr) => {  arr.splice(num, 1); }


export default FontsEffect
