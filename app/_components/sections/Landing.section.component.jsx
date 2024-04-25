'use client'
import TypeIt from "typeit-react";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((lot) => lot.Player), { ssr: false });

export default function LandingSection(props) {

	const { setElem } = props;

	return (
		<>
			<section className="w-full mobilesc:max-md:mb-6 md:mb-24 pt-24 md:pt-48  py-4 flex flex-1 max-h-screen mobilesc:max-sm:h-[720px] min-h-screen mobilesc:max-md:flex-col">
				<div className="mobilesc:max-sm:px-6 mobilesc:relative sm:absolute z-10 sm:left-24 sm:top-32 mobilesc:max-sm:pt-24 sm:max-xl:top-44 w-full ">
					<div className="flex w-full flex-col">
						<div className="flex w-full mb-12">
							<div className="relative mobilesc:mr-12 sm:mr-24 mobilesc:w-[64px] mobilesc:h-[64px] sm:max-lg:w-[120px] sm:max-lg:h-[120px] lg:w-[240px] lg:h-[240px]">
								<Image
									src="/landingArrow.png"
									alt="Arrow slanted down to the right"
									fill
								/>
							</div>
							<h1 className="w-1/3 mobilesc:leading-loose mobilesc:max-md:tracking-normal ultrawide:text-8xl md:max-ultrawide:text-9xl mobilesc:max-md:text-6xl text-green-300">
								<TypeIt>
									JAY REYES
								</TypeIt>
							</h1>
						</div>
						<hr className="mobilesc:max-sm:w-full w-3/4 border-b-2 border-white mb-12"></hr>
						<h1 className="w-full mb-12 text-green-300 mobilesc:max-md:text-4xl md:text-5xl lg:text-7xl">
							<TypeIt options={{
								cursor: false
							}}>
								SOFTWARE ENGINEER
							</TypeIt>
						</h1>
						<div className="mobilesc:max-sm:w-3/4 sm:max-lg:w-1/2 lg:w-1/4 flex gap-4 mobilesc:max-lg:mb-24 lg:mb-48 items-center justify-between">
							<p className="text-white text-lg">
								DEVELOPMENT
							</p>
							<hr className="w-3/4 border-b-2 border-white"></hr>
							<p className="text-white text-lg">
								DESIGN
							</p>
						</div>
						<div className="flex gap-8 mobilesc:max-sm:gap-4 relative z-0">
							<button onClick={() => { setElem("story") }} type="button" className="ultrawide:text-2xl mobilesc:max-md:text-xl text-xl mobilesc:max-md:text-lg bg-white text-black font-bold mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36 hover:border-2 hover:border-green-300">My Story</button>
							<button onClick={() => { setElem("contact") }} type="button" className="hover:border-2 hover:border-white ultrawide:text-2xl text-xl mobilesc:max-md:text-lg bg-green-300 text-black font-black mobilesc:max-md:py-2 mobilesc:max-md:px-4 md:py-4 md:px-8 hover:opacity-75 duration-100 rounded-full md:w-96 mobilesc:max-md:w-36">Contact Me</button>
						</div>
					</div>
				</div>
				<div className="w-full h-screen mobilesc:max-md:h-[720px] overflow-x-clip overflow-y-visible absolute left-0 top-0">
					<div className="absolute z-0 mobilesc:max-sm:-right-[75%] sm:max-lg:-right-[50%] -right-[15%] mobilesc:max-sm:top-1/4 sm:-bottom-[30%] mobilesc:max-sm:w-[640px] mobilesc:max-sm:h-[640px] sm:max-lg:w-full lg:w-1/2 animate-pulse scale-125 h-screen rotate-45">
						<Image
							src="/landingPrint.png"
							alt="Fingerprint"
							fill
						/>
					</div>
				</div>
				<div className="cursor-animate mobilesc:max-lg:hidden w-[64px] h-[64px] absolute z-10">
					<Image
						src="/landingMouse.png"
						alt="Animated cursor"
						fill
					/>
				</div>
				{/* <div className="xl:top-[20%] ultrawide:top-[10%] absolute xl:left-1/4 flex flex-col justify-center z-20">
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
				</div> */}
			</section >
		</>
	)
}
