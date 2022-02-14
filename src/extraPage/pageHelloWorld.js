import React from "react"
import { useEffect } from 'react'
import '../assets/scss/extraIndex.scss';
import Plant from '../assets/imgs/plant.svg';
import Astom from '../assets/imgs/astom.svg';
import Spacebg from '../assets/imgs/spacebg.png';


const PageHelloWorld = () => {
	
	let styles = {
		background: '#0054A7',
		position: 'relative',
	 }
	 useEffect(() => {
		 let meteor = document.querySelector('.meteor');
		 setTimeout(() => {
			 meteor.classList.remove("none");
			 console.log('pass');
		 }, 1000)
	 }, [])
	
	
    return (
		<>
			<main style= {styles} >
				<div className="meteor none">
					<div className="meteor-1"></div>
					<div className="meteor-2"></div>
					<div className="meteor-3"></div>
					<div className="meteor-4"></div>
					<div className="meteor-5"></div>
					<div className="meteor-6"></div>
					<div className="meteor-7"></div>
					<div className="meteor-8"></div>
					<div className="meteor-9"></div>
					<div className="meteor-10"></div>
					<div className="meteor-11"></div>
					<div className="meteor-12"></div>
					<div className="meteor-13"></div>
					<div className="meteor-14"></div>
					<div className="meteor-15"></div>
				</div>
				<div className="linesA"></div>
				<div className="linesB"></div>
				<section>
					
					<div className="atom">
						<img src={Plant}  className="plants" alt="Plant"/>
						<img src={Astom} width="80" className="astronaut" alt="Astom"/>
						<img src={Spacebg} className="space" alt="Spacebg" />
					</div>
					<div className="txtarea">
						<svg xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 315.6 200.2">
							<defs>
								<style>
									.st12 {`opacity: 0.45 ; fill: #a3b5c3 ; enable-background: new; ` }
					
									.st13 {`
										fill: none;
										stroke: #1b284f;
										stroke-width: 2;
										stroke-linecap: round;
										stroke-linejoin: round;
										stroke-miterlimit: 10;
										`
									}
					
									.st16 {
										`
										opacity: .33;
										fill: #e6e6e8;
										enable-background: new ;
										`
									}
								</style>
							</defs>
							
							<linearGradient id="SVGID_1_" x1="28.534" x2="28.534" y1="1116.5" y2="1154.828" gradientTransform="scale(-1 1) rotate(45 1126.702 234.54)" gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#fff" />
								<stop offset=".875" stop-color="#fff" stop-opacity="0" />
							</linearGradient>
							<circle cx="287" cy="95.2" r="19.2" fill="url(#SVGID_1_)" opacity=".26" />
							<linearGradient id="SVGID_00000062890933189369375670000002005450168627912075_" x1="164.158" x2="164.158" y1="884.382" y2="975.383" gradientTransform="scale(-1 1) rotate(45 1126.702 234.54)" gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#fff" />
								<stop offset=".875" stop-color="#fff" stop-opacity="0" />
							</linearGradient>
							
							<circle cx="45.6" cy="45.6" r="45.5" fill="url(#SVGID_00000062890933189369375670000002005450168627912075_)" opacity=".26" />
							
							<path  d="M216.7 81.4c-1.4-4.7-4.5-7.7-9.1-9.1-1.4-.4-1.4-.8 0-1.2 4.7-1.4 7.7-4.5 9.1-9.1.4-1.4.8-1.4 1.2 0 1.4 4.7 4.5 7.7 9.1 9.1 1.4.4 1.4.8 0 1.2-4.7 1.4-7.7 4.5-9.1 9.1-.5 1.4-.8 1.4-1.2 0z" className="starsIndex"/>
								
								
							<path d="M53.2 67.8h22.2V45.6h7.7v52.5h-7.7V75.3H53.2v22.8h-7.6V45.6h7.6v22.2zM95.3 90.5h24.4v7.6h-32V45.6h32v7.6H95.3V68h23.8v7.7H95.3v14.8zM131.1 90.5h24.7v7.6h-32.3V45.6h7.6v44.9zM167 90.5h24.7v7.6h-32.3V45.6h7.6v44.9zM198.3 52.8c4.8-4.9 11.6-8 18.9-8 7.4 0 14.1 3.1 19 8 4.7 4.9 7.8 11.6 7.8 19s-3.1 14.1-7.8 19c-4.9 5-11.6 8-19 8s-14.1-3-18.9-8c-4.7-4.9-7.8-11.6-7.8-19s3.1-14.1 7.8-19zm32.5 5.4c-3.5-3.5-8.4-5.7-13.6-5.7-5.2 0-10 2.2-13.5 5.7s-5.6 8.3-5.6 13.6 2.2 10.1 5.6 13.6c3.5 3.5 8.3 5.7 13.5 5.7s10.1-2.2 13.6-5.7c3.4-3.5 5.6-8.2 5.6-13.6s-2.2-10.1-5.6-13.6zM74.3 136c-3 8.6-6.2 17.5-8.9 25.5h-5.6l-17.5-53h7.9l12.5 37.9 8.6-24.6h6.1l8.6 24.5c4.1-12.5 8.7-25.9 12.6-37.9h8l-17.5 53h-5.6L74.3 136zM113.8 115.7c4.8-4.9 11.6-8 18.9-8 7.4 0 14.1 3.1 19 8 4.7 4.9 7.8 11.6 7.8 19s-3.1 14.1-7.8 19c-4.9 5-11.6 8-19 8s-14.1-3-18.9-8c-4.7-4.9-7.8-11.6-7.8-19-.1-7.4 3-14.1 7.8-19zm32.5 5.4c-3.5-3.5-8.4-5.7-13.6-5.7s-10 2.2-13.5 5.7-5.6 8.3-5.6 13.6 2.2 10.1 5.6 13.6c3.5 3.5 8.3 5.7 13.5 5.7s10.1-2.2 13.6-5.7c3.4-3.5 5.6-8.2 5.6-13.6s-2.2-10.1-5.6-13.6zM174.6 134.3h8.9c6.4 0 9.5-4.6 9.5-9.2 0-4.5-3.2-9.1-9.5-9.1h-11.6v45h-7.5v-52.6h19.2c11.4 0 17.1 8.4 17.1 16.8 0 7.4-4.6 14.5-13.6 16.1l16.6 19.8h-9.8L174.6 138v-3.7zM213.7 153.4h24.7v7.6h-32.3v-52.5h7.6v44.9zM260.6 108.5c17.2 0 25.8 13.2 25.8 26.3s-8.6 26.2-25.8 26.2h-18.9v-52.5h18.9zm0 44.9c12.2 0 18.3-9.3 18.3-18.6s-6.2-18.7-18.3-18.7h-11.3v37.3h11.3z" fill=" #fff" />
	
							<g>
								<path d="m301.6 156.7.6 1.5c.1.3.5.6.8.6h3.7c.4 0 .7-.2.8-.6l.6-1.5h-6.5z" fill=" #141e3e" />
								<linearGradient id="SVGID_00000175303609597604404990000011637611548225000108_" x1="-408.408" x2="-407.211" y1="182.15" y2="182.15" gradientTransform="matrix(0 -1 -1 0 487.05 -250.465)" gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#1b284f" />
									<stop offset="1" stop-color="#1b284f" stop-opacity="0" />
								</linearGradient>
								<path fill="url(#SVGID_00000175303609597604404990000011637611548225000108_)" d="m307.7 157.9.5-1.2h-6.6l.5 1.2z" opacity=".4" />
								<path d="M308.9 156.1h6c.2 0 .4-.3.4-.5l-.4-1.6c-.2-.7-.6-1.3-1.2-1.7-2-1.1-3.6-3.1-4.3-5.5l-.5-2.1v11.4z" fill=" #141e3e" />
								<linearGradient id="SVGID_00000021820122158817926410000016127486809294370228_" x1="-406.563" x2="-395.234" y1="175.65" y2="175.65" gradientTransform="matrix(0 -1 -1 0 487.05 -250.465)" gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#1b284f" />
									<stop offset="1" stop-color="#1b284f" stop-opacity="0" />
								</linearGradient>
								<path fill="url(#SVGID_00000021820122158817926410000016127486809294370228_)" d="M310.3 154.6c.2-1.5.5-3 .8-4.5-.8-.9-1.3-2.1-1.7-3.3l-.5-2.1V156h5c-1.3-.4-2.5-.9-3.6-1.4z" opacity=".4" />
								<path d="M301 156.1h-6c-.2 0-.4-.3-.4-.5l.4-1.6c.2-.7.6-1.3 1.2-1.7 2-1.1 3.6-3.1 4.3-5.5l.5-2.1v11.4z" fill=" #141e3e" />
								<linearGradient id="SVGID_00000120542735285460188750000017607850139984931970_" x1="-406.563" x2="-395.234" y1="188.55" y2="188.55" gradientTransform="matrix(0 -1 -1 0 487.05 -250.465)" gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#1b284f" />
									<stop offset="1" stop-color="#1b284f" stop-opacity="0" />
								</linearGradient>
								<path fill="url(#SVGID_00000120542735285460188750000017607850139984931970_)" d="M299.6 154.6c-.2-1.5-.5-3-.8-4.5.8-.9 1.3-2.1 1.7-3.3l.5-2.1V156h-5c1.2-.4 2.4-.9 3.6-1.4z" opacity=".4" />
								<path fill="#bcc9e7" d="M308.3 156.7h-6.8c-.3 0-.6-.2-.6-.4-.7-3.7-1-7.3-.9-11 0-3.2 2.1-6.3 4.4-9.1.2-.3.8-.3 1 0 2.4 2.7 4.4 5.8 4.4 9.1.1 3.7-.2 7.4-.9 11 0 .3-.3.4-.6.4z" />
								<linearGradient id="SVGID_00000025416985327371531450000004081862639811368633_" x1="-405.394" x2="-406.1" y1="190.331" y2="177.19" gradientTransform="matrix(0 -1 -1 0 487.05 -250.465)" gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#1b284f" />
									<stop offset="1" stop-color="#1b284f" stop-opacity="0" />
								</linearGradient>
								<path fill="url(#SVGID_00000025416985327371531450000004081862639811368633_)" d="M300.6 154.1c.1.7.2 1.5.4 2.2 0 .2.3.4.6.4h6.8c.3 0 .6-.2.6-.4.1-.7.3-1.5.4-2.2h-8.8z" opacity=".6" />
								<path d="M306.1 156.8c.2 0 .4-.1.4-.3 1.3-5.5 2.1-13.6 2.1-22.7 0-12.3-1.5-22.9-3.6-27.6-2.1 4.7-3.6 15.3-3.6 27.6 0 9 .8 17.1 2.1 22.7 0 .2.2.3.4.3h2.2z" fill=" #fff" />
								<linearGradient id="SVGID_00000047056394545452659350000012123152347470895761_" x1="-195.468" x2="-188.261" y1="-277.3" y2="-277.3" gradientTransform="matrix(1 0 0 -1 496.786 -137.6)" gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#1b284f" />
									<stop offset="1" stop-color="#1b284f" stop-opacity="0" />
								</linearGradient>
								<path fill="url(#SVGID_00000047056394545452659350000012123152347470895761_)" d="M301.4 138.1c0 1.1.1 2.2.1 3.2h6.8c.1-1 .1-2.1.1-3.2h-7z" opacity=".45" />
								<path d="M302.8 153.6c.2 1 .4 2 .6 2.9 0 .2.2.3.4.3h2.3c.2 0 .4-.1.4-.3.2-.9.4-1.9.6-2.9h-4.3zM307.3 152.2c.1-.4.1-.7.2-1.1h-5c.1.4.1.8.2 1.1h4.6zM302.1 148.5c0 .4.1.7.1 1.1h5.4c0-.4.1-.7.1-1.1h-5.6z" className="st12" />
								<path d="M306.8 112.9c-.5-2.8-1.2-5-1.9-6.6-.7 1.6-1.4 3.9-1.9 6.6 1.2-.8 2.7-.8 3.8 0z" fill=" #141e3e" />
								<g>
									<path d="M302.7 142.5v.8M304.9 142.5v.8M307.2 142.5v.8" className="st13" />
								</g>
								<linearGradient id="SVGID_00000087405246657170272290000014618684298616914878_" x1="-374.35" x2="-367.125" y1="182.089" y2="181.966" gradientTransform="matrix(0 -1 -1 0 487.05 -250.465)" gradientUnits="userSpaceOnUse">
									<stop offset="0" stop-color="#1b284f" />
									<stop offset="1" stop-color="#1b284f" stop-opacity="0" />
								</linearGradient>
								<circle cx="305" cy="121.6" r="2.3" fill="url(#SVGID_00000087405246657170272290000014618684298616914878_)" opacity=".45" />
								<circle cx="305" cy="121.6" r="1.8" fill=" #141e3e" />
								<g className="fire">
									<path fill="#ddd" d="M305.5 167.8c-.6 0-1.5-5.2-1.5-6.1v-.2c0-.8.7-1.5 1.5-1.5h.2c.8 0 1.5.7 1.5 1.5v.2c-.1.9-1.1 6.1-1.7 6.1z" />
									<path d="M305.5 181.2c-.5 0-4.2-14.5-4.2-16.7v-.4c0-2.2 1.8-4.1 4.1-4h.4c2.2 0 4.1 1.8 4 4.1v.4c0 2.1-3.7 16.6-4.3 16.6z" className="st16" />
									<path d="M305.6 175.9c-.3 0-3.1-10.6-3.1-12.3v-.3c0-1.6 1.4-3 3-3h.3c1.6 0 3 1.4 3 3v.3c0 1.7-2.8 12.3-3.2 12.3z" className="st16" />
								</g>
							</g>
						</svg>
					</div>
				
				</section>
			</main>
		</>
	)	
}


export default PageHelloWorld
