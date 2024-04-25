'use client'
import TypeIt from "typeit-react";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((lot) => lot.Player), { ssr: false });

export default function LandingSection(props) {

	const { setElem } = props;

	return (
		<>
			<section className="mobilesc:max-md:mb-6 md:mb-[320px] pt-24 md:pt-48  mobilesc:px-6 md:px-12 py-4 flex flex-1 lg:max-xl:min-h-[320px] mobilesc:max-md:flex-col">
				<div className="xl:top-[20%] ultrawide:top-[10%] absolute xl:left-1/4 flex flex-col justify-center z-20">
					<TypeIt className="mb-6 mobilesc:max-md:mb-12" options={{
						speed: 5,
						afterComplete: function(instance) { instance.destroy(); },
						cursor: false
					}}>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl md:max-ultrawide:text-7xl mobilesc:text-3xl sm:max-md:text-4xl text-white">Building</h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl md:max-ultrawide:text-7xl mobilesc:text-3xl sm:max-md:text-4xl text-white">An <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal text-black bg-white px-4 py-2 rounded-lg">Online World</span></h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl md:max-ultrawide:text-7xl mobilesc:text-3xl sm:max-md:text-4xl text-white">That <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal " >Promotes</span></h1>
						<h1 className="mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl md:max-ultrawide:text-7xl mobilesc:text-3xl sm:max-md:text-4xl text-white">A <span className="mobilesc:leading-loose mobilesc:max-md:tracking-normal px-4 py-2 mx-2 my-2 rounded-lg bg-grad text-white">Better World</span></h1>
					</TypeIt>
					<div className="flex gap-8 mobilesc:max-sm:gap-4">
						<button onClick={() => { setElem("story") }} type="button" className="ultrawide:text-2xl mobilesc:max-md:text-xl text-xl mobilesc:max-md:text-lg bg-white text-black font-bold mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36 hover:border-2 hover:border-green-300">My Story</button>
						<button onClick={() => { setElem("contact") }} type="button" className="hover:border-2 hover:border-white ultrawide:text-2xl text-xl mobilesc:max-md:text-lg bg-green-300 text-black font-black mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36">Contact Me</button>
					</div>
				</div>
				<div className="flex flex-col justify-center w-full bg-shadow h-96 relative">
					<div className="ultrawide:w-[50%] xl:w-3/4 md:max-xl:w-[85%] mobilesc:max-sm:w-[90%] mobilesc:max-sm:bottom-[45%] absolute z-0 left-[15%] ultrawide:left-[45%] mobilesc:max-lg:left-[30%] lg:max-ultrawide:left-[40%] mobilesc:max-xl:top-[0%] xl:top-[-25%]">
						<video type="video/mp4" playsInline src={'/lanceMockUp.mp4'} className="w-[40%] md:w-[60%] xl:w-[65%] mobilesc:max-md:w-[90%]" autoPlay loop muted aria-description="Mockup of LanceIO.online" />
					</div>
				</div>
			</section >
		</>
	)
}
