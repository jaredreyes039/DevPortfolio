'use client'
import { Player } from '@lottiefiles/react-lottie-player';
import Image from "next/image"
import BRAIN_SVG from "../../../public/brain.svg"
import TypeIt from "typeit-react";
import { useEffect, useRef, useState } from "react";

export default function LandingSection(props) {

	const [bouncePhraseArr, setBouncePhraseArr] = useState([]);
	const bouncePhrase = " Software Engineer"

	const handleHoverLeave = (e) => {
		let element = document.getElementById(e.currentTarget.id);
		setTimeout(() => { element.classList.remove("animation-fadeout") }, 500)
		element.style.opacity = 1;
	}

	const handleHoverEnter = (e) => {
		let element = document.getElementById(e.currentTarget.id);
		element.classList.add("animation-fadeout")
	}

	useEffect(() => {
		let letterArr = [];
		for (let i = 0; i < bouncePhrase.length; i++) {
			letterArr.push(bouncePhrase.charAt(i))
		}
		setBouncePhraseArr([...letterArr])
	}, [])

	function handleRemoveScrollElement(e) {
		e.preventDefault();
		let element = document.getElementById(e.currentTarget.id);
		element.classList.add("hidden");
	}

	return (
		<>
			<section className="ultrawide:mb-12 mobilesc:max-md:mb-24 px-12 py-4 flex flex-1 mobilesc:max-md:flex-col">
				<div className="md:top-[15%] absolute mobilesc:max-md:pt-24 md:left-1/4 flex flex-col justify-center z-20">
					<TypeIt className="mb-24 mobilesc:max-md:mb-12" options={{
						speed: 5,
						afterComplete: function(instance) { instance.destroy(); },
						cursor: false
					}}>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl 2xl:text-8xl lg:max-xl:text-7xl mobilesc:max-md:text-4xl text-white">Conquering</h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl 2xl:text-8xl lg:max-xl:text-7xl mobilesc:max-md:text-4xl text-white">My <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal text-green-300">Mind</span></h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl 2xl:text-8xl lg:max-xl:text-7xl mobilesc:max-md:text-4xl text-white">To <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal " >Build</span></h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl 2xl:text-8xl lg:max-xl:text-7xl mobilesc:max-md:text-4xl text-white">A <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal px-4 py-2 mx-2 my-2 rounded-lg bg-grad text-white">Brighter Future</span></h1>
					</TypeIt>
					<div className="flex gap-8">

						<button type="button" className="ultrawide:text-2xl bg-white text-black font-bold mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36 hover:border-2 hover:border-green-300">My Story</button>
						<button type="button" className="hover:border-2 hover:border-white ultrawide:text-2xl bg-green-300 text-black font-black mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36">Contact Me</button>
					</div>
				</div>
				<div className="flex flex-col justify-center w-full bg-shadow h-dvh mobilesc:max-md:h-96 relative">
					<div className="ultrawide:w-5/6 md:max-xl:w-2/3 mobilesc:max-md:w-[75%] absolute z-0 ultrawide:left-[15%] mobilesc:max-md:left-[30%]">
						<Player className="animation-pulsing w-[40%] mobilesc:max-md:w-[80%]" autoplay loop src={'./BipolarBrain.json'} />
					</div>
				</div>
			</section >
		</>
	)
}
