'use client'
import SectionHeader from "./SectionHeader.component";
import Image from "next/image"

function SpotlightText(props) {
	const { title, desc, features } = props;

	return (
		<div className="h-fit lg:min-h-[540px] lg:max-h-[540px] flex flex-col align-start py-2 px-4 ultrawide:w-full lg:max-ultrawide:w-full">
			<div className="flex items-center gap-4 w-full justify-between mb-4">
				<h1 className="text-green-300 ultrawide:text-4xl mobilesc:max-ultrawide:text-2xl w-fit ">{title}</h1>
				<hr className="w-full mobilesc:max-md:w-1/3 border-t-2 border-green-300"></hr>
			</div>
			<p className="ultrawide:text-xl text-white mb-2">{desc}</p>
			<ul className="list-disc lg:pl-8 mobilesc:max-lg:mb-4">
				{features.map((feat, idx) => {
					return (
						<li
							key={'feat-' + idx}
							className="ultrawide:text-lg text-green-300 mb-2"
						>
							{feat}
						</li>
					)
				})}
			</ul>
			<div className="flex flex-col mt-auto p-auto gap-4 w-1/3 mobilesc:max-md:w-full">
				<button className="py-4 px-8 mobilesc:max-md:py-2 mobilesc:max-md:px-4 text-black bg-white rounded-full ultrawide:text-xl lg:max-ultrawide:text-md hover:opacity-75 hover:border-2 hover:border-green-300 font-bold" onClick={() => { window.location.href = props.src }}>Visit Site</button>
				<button className="py-4 px-8 mobilesc:max-md:py-2 mobilesc:max-md:px-4 text-black bg-green-300 rounded-full ultrawide:text-xl lg:max-ultrawide:text-md hover:opacity-75 hover:border-2 hover:border-white font-black" onClick={() => { window.location.href = props.git }}>View Source Code</button>

			</div>
		</div>
	)
}

function Spotlight(props) {
	const { videos, highlights, idx, gifs } = props;
	return (
		<div className=" ultrawide:min-h-[540px] mobilesc:max-md:min-h-48 mobilesc:max-md:mb-4 px-12 relative ultrawide:w-full lg:max-ultrawide:w-full mobilesc:max-mlg:w-full ">
			<div className="shadow-inner w-full h-96 mobilesc:max-md:h-fit left-0 top-0 rounded-lg hover:border-2 hover:border-green-300 duration-150">
				<div className="w-full h-full rounded-lg">
					<Image src={gifs[idx].src} alt={gifs[idx].alt} fill />
				</div>
				{/*<video className="w-full h-full rounded-lg" muted autoPlay>
					<source src={videos[idx]} type="video/mp4" />
				</video>*/}
				{/*<div className="backdrop-blur-lg absolute px-4 py-4 shadow-white drop-shadow-lg ultrawide:w-1/2 lg:max-ultrawide:w-1/3 h-64 -bottom-12 ultrawide:-right-48 xl:right-0 mobilesc:max-xl:hidden bg-slate-900 opacity-95 rounded-lg ">
					<div className="flex mb-4 items-center gap-4 w-full justify-center">
						<h1 className="text-green-300 ultrawide:text-2xl">Highlights</h1>
						<hr className="w-full border-t-2 border-green-300"></hr>
					</div>
					<ul className="list-disc pl-4 min-h-48 max-h-48 overflow-y-scroll">
						{highlights.map((hl, idx) => {
							return (
								<li
									key={"hl-" + idx}
									className="ultrawide:text-lg text-green-300 mb-2"
								>
									{hl}
								</li>
							)
						})}
					</ul>

				</div>*/}

			</div>

		</div>
	)
}

export default function FeaturedSection(props) {

	const SAMPLE_VIDEOS = ['medMang.mp4', 'lanceIOA.mp4', 'diagAssist.mp4', 'rapiflyA.mp4']
	const GIFS = [
		{
			src: "/medMang.gif",
			alt: "Screen capture of Linux Medication Management TUI"
		},
		{
			src: "/lanceIO.gif",
			alt: "Screen capture of LanceIO freelance management dashboard"
		},
		{
			src: "/diagAssist.gif",
			alt: "Screen capture of the 3DS Device Diagnostic Assistant for homebrewed 3DS devices"
		},
		{
			src: "/rapiflyA.gif",
			alt: "Screen capture of Rapifly, a challenge management platform that gamifies problem-solving to build community wealth and well-being long-term."
		}
	]
	const SPOT_PROJECTS = [
		{
			title: "Linux Medication Manager TUI",
			desc: "The Medication Manager TUI is a bash TUI I made for myself and others with similar situations to not only track our medications, appointments, and mood, but to do so in a sleek, stylish terminal app (you know how us Linux users can be!)",
			highlights: ["Full bash script using gum as the star dependency for styling the entire program", "Writes an initial config and maintains a steady program state that can be edited through the /.config dir", "Compatible with most standard Linux systems and setups"],
			features: ["Add, view, and maintain a record of your medications, appointments, and moods", "Titled journal entries with the ability to write whatever you feel in the moment", "A simple installation process to make using the app a breeze!"],
			src: "https://github.com/jaredreyes039/Med-Manager-TUI",
			git: "https://github.com/jaredreyes039/Med-Manager-TUI"
		},

		{
			title: "LanceIO",
			desc: "A PWA dashboard designed to make freelancing more manageable and accessible to neurodivergent individuals as well as those who generally need a bit of help staying organized.",
			highlights: ["A microservice architecture with an Azure managed backend suite", "Completely responsive PWA", "SQL to NoSQL migration for affordability short-term", "Minimalist storybook integration for internal documentation"],
			features: ["Tracking, managing, and invoicing freelance orders in one dashboard", "Designed to improve client-contractor relationships for long-term conversions (based on a neurodivergent approach of 'know what I can')", "Income tracking across various currencies as well as plotting to see a general overview of your year of freelancing"],
			src: "https://lanceio.online/",
			git: "https://github.com/jaredreyes039/LanceIO_FE"
		},
		{
			title: "3DS Diagnostic Assistant",
			desc: "A homebrew application written in C using the devkitarm provided toolchain to display useful diagnostic information about the 3DS from touch screen positioning to determine calibration problems, to battery health checks and networking status. Try it out sometime if you have a homebrewed 3DS you need to repair- the 3DS Diagnostic Assistant may beneficial!",
			highlights: ["Program developed and produced for the 3DS using the devkitarm toolchain for homebrew application development", "Documentation is sparse so this was a project involving both the dissection and creation of application code.", "My favorite side project thus far- the 3DS ecosystem (and Nintendo more generally) has always been an interest of mine! Maybe I'll make a rom hack sometime?"],
			features: ["Quick access to diagnostic data for 3DS hardware including joystick, gyroscope, touch, and even 3D-slider calibration", "Access to how the system currently views the battery health to check for battery problems", "Access to more specific network data to diagnose connectivity problems (basic only)"],
			src: "https://github.com/jaredreyes039/3DSDeviceDiagnosticAssistant",
			git: "https://github.com/jaredreyes039/3DSDeviceDiagnosticAssistant"
		},
		{
			title: "Rapifly",
			desc: "**HAS BEEN ABANDONED BY OWNER** Based on an intuitive new approach to project management and problem solving, Rapifly was a dashboard for managing community-oriented projects with the goal of gamififying problem solving for the sake of a better future.",
			highlights: ["Full migration from a deprecated codebase into a working, modern codebase without changing the original stack", "Migration from a monolith to a microservice-oriented architecture (based on DDD principles)", "Development of most of the backend infrastructure from scratch."],
			features: ["Tracking, managing, and invoicing freelance orders in one dashboard", "Designed to improve client-contractor relationships for long-term conversions (based on a neurodivergent approach of 'know what I can')", "Income tracking across various currencies as well as plotting to see a general overview of your year of freelancing"],
			src: "https://jaydevanddesign.com",
			git: "https://github.com/jaredreyes039/Rapifly"
		},
	]
	return (
		<div className="px-48 mobilesc:max-md:px-6 py-12 mobilesc:max-md:py-3 ultrawide:w-2/3 lg:max-ultrawide:w-full flex flex-col justify-center items-center">
			<SectionHeader numStr="01." title="Building an Accessible World" />
			<div className="grid gap-6 mobilesc:max-lg:gap-6 mobilesc:max-lg:grid-rows-auto mobilesc:max-lg:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
				{SPOT_PROJECTS.map((spotProject, idx) => {
					return (<div key={spotProject.title + idx} className=" mobilesc:max-md:mb-6 flex flex-col gap-4 w-full ">
						<Spotlight idx={idx} gifs={GIFS} videos={SAMPLE_VIDEOS} highlights={spotProject.highlights} />
						<SpotlightText title={spotProject.title} desc={spotProject.desc} features={spotProject.features} git={spotProject.git} src={spotProject.src} />
					</div>
					)
				})}
			</div>
		</div>
	)
}
