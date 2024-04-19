'use client'
import TypeIt from "typeit-react";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((lot) => lot.Player), { ssr: false });

export default function LandingSection(props) {

	const { setElem } = props;

	return (
		<>
			<section className="mobilesc:max-md:mb-12 lg:max-xl:mb-[320px] pt-24 lg:pt-48 px-12 py-4 flex flex-1 mobilesc:max-md:flex-col">
				<div className="xl:top-[20%] absolute mobilesc:max-md:pt-24 md:left-1/4 flex flex-col justify-center z-20">
					<TypeIt className="mb-24 mobilesc:max-md:mb-12" options={{
						speed: 5,
						afterComplete: function(instance) { instance.destroy(); },
						cursor: false
					}}>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl lg:max-ultrawide:text-7xl mobilesc:max-md:text-3xl text-white">Conquering</h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl lg:max-ultrawide:text-7xl mobilesc:max-md:text-3xl text-white">My <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal text-green-300">Mind</span></h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl lg:max-ultrawide:text-7xl mobilesc:max-md:text-3xl text-white">To <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal " >Build</span></h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl lg:max-ultrawide:text-7xl mobilesc:max-md:text-3xl text-white">A <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal px-4 py-2 mx-2 my-2 rounded-lg bg-grad text-white">Brighter Future</span></h1>
					</TypeIt>
					<div className="flex gap-8 mobilesc:max-sm:gap-4">

						<button onClick={() => { setElem("story") }} type="button" className="ultrawide:text-2xl mobilesc:max-md:text-xl text-xl mobilesc:max-md:text-lg bg-white text-black font-bold mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36 hover:border-2 hover:border-green-300">My Story</button>
						<button onClick={() => { setElem("contact") }} type="button" className="hover:border-2 hover:border-white ultrawide:text-2xl text-xl mobilesc:max-md:text-lg bg-green-300 text-black font-black mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36">Contact Me</button>
					</div>
				</div>
				<div className="flex flex-col justify-center w-full bg-shadow h-dvh mobilesc:max-xl:h-96 relative">
					<div className="ultrawide:w-5/6 xl:w-3/4 md:max-xl:w-2/3 mobilesc:max-md:w-[75%] absolute z-0 left-[15%] mobilesc:max-ultrawide:left-[30%]">
						<Player className="animation-pulsing w-[40%] xl:w-[50%] mobilesc:max-md:w-[80%]" autoplay loop src={'./BipolarBrain.json'} />
					</div>
				</div>
			</section >
		</>
	)
}