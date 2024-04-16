'use client'
import SectionHeader from "./SectionHeader.component";


function SpotlightText(props) {
	const { title, desc, features } = props;

	return (
		<div className="flex flex-col align-start py-2 px-4 ultrawide:w-1/3 lg:max-ultrawide:w-1/4">
			<div className="flex items-center gap-4 w-full justify-center mb-4">
				<h1 className="text-green-300 ultrawide:text-4xl mobilesc:max-ultrawide:text-2xl ">{title}</h1>
				<hr className="w-full mobilesc:max-md:w-1/3 border-t-2 border-green-300"></hr>
			</div>
			<p className="ultrawide:text-xl text-white mb-2">{desc}</p>
			<ul className="list-disc pl-8">
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
			<div className="flex flex-col gap-4 self-end">
				<button className="py-4 px-8 mobilesc:max-md:py-2 mobilesc:max-md:px-4 text-black bg-white rounded-full ultrawide:text-xl lg:max-ultrawide:text-md hover:opacity-75 hover:border-2 hover:border-green-300 font-bold">Visit Site</button>
				<button className="py-4 px-8 mobilesc:max-md:py-2 mobilesc:max-md:px-4 text-black bg-green-300 rounded-full ultrawide:text-xl lg:max-ultrawide:text-md hover:opacity-75 hover:border-2 hover:border-white font-black">View Source Code</button>

			</div>
		</div>
	)
}

function Spotlight(props) {
	const { videos, highlights, idx } = props;
	return (
		<div className="ultrawide:mr-48 ultrawide:min-h-[540px] mobilesc:max-md:min-h-48 lg:max-ultrawide:mr-0 mb-12 mobilesc:max-md:mb-4 px-12 relative ultrawide:w-1/2 lg:max-ultrawide:w-2/3 mobilesc:max-md:w-full ">
			<div className="absolute overflow-hidden shadow-inner w-full h-96 mobilesc:max-md:h-fit left-0 top-0 rounded-lg hover:scale-105 hover:border-2 hover:border-green-300 duration-150">
				<video className="w-full h-full rounded-lg" src={videos[idx]} muted autoPlay />
			</div>
			<div className="backdrop-blur-lg absolute px-4 py-4 shadow-white drop-shadow-lg ultrawide:w-1/2 lg:max-ultrawide:w-1/3 h-fit ultrawide:-right-48 mobilesc:max-ultrawide:hidden -bottom-64 bg-slate-900 opacity-95 rounded-lg animation-hover">
				<div className="flex mb-4 items-center gap-4 w-full justify-center">
					<h1 className="text-green-300 ultrawide:text-2xl">Highlights</h1>
					<hr className="w-full border-t-2 border-green-300"></hr>
				</div>
				<ul className="list-disc pl-4">
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

			</div>

		</div>
	)
}

export default function FeaturedSection(props) {

	const SAMPLE_VIDEOS = ['lanceIOA.mp4', 'rapiflyA.mp4']
	const SPOT_PROJECTS = [
		{
			title: "LanceIO",
			desc: "A dashboard designed to make freelancing more manageable and accessible to neurodivergent individuals as well as those who generally need a bit of help staying organized.",
			highlights: ["A microservice architecture with an Azure managed backend suite", "In-house JWT auth layer", "SQL to NoSQL migration for affordability short-term", "In-house proxy layer using Nginx"],
			features: ["Tracking, managing, and invoicing freelance orders in one dashboard", "Designed to improve client-contractor relationships for long-term conversions (based on a neurodivergent approach of 'know what I can')", "Income tracking across various currencies as well as plotting to see a general overview of your year of freelancing"]
		},
		{
			title: "Rapifly",
			desc: "**HAS BEEN ABANDONED BY OWNER** Based on an intuitive new approach to project management and problem solving, Rapifly was a dashboard for managing community-oriented projects with the goal of gamififying problem solving for the sake of a better future.",
			highlights: ["Full migration from a deprecated codebase into a working, modern codebase without changing the original stack", "Migration from a monolith to a microservice-oriented architecture (based on DDD principles)", "Development of most of the backend infrastructure from scratch."],
			features: ["Tracking, managing, and invoicing freelance orders in one dashboard", "Designed to improve client-contractor relationships for long-term conversions (based on a neurodivergent approach of 'know what I can')", "Income tracking across various currencies as well as plotting to see a general overview of your year of freelancing"]
		},

	]
	return (
		<div className="px-24 mobilesc:max-md:px-6 py-12 mobilesc:max-md:py-3 ultrawide:w-2/3 lg:max-ultrawide:w-full flex flex-col justify-center items-center">
			<SectionHeader numStr="01." title="Building an Accessible World" />
			{SPOT_PROJECTS.map((spotProject, idx) => {
				return (<div className="mb-8 flex flex-col w-full items-center justify-center ">
					<div className="mb-24 mobilesc:max-md:mb-6 flex mobilesc:max-md:flex-col gap-4 w-full justify-center">
						<Spotlight idx={idx} videos={SAMPLE_VIDEOS} highlights={spotProject.highlights} />
						<SpotlightText title={spotProject.title} desc={spotProject.desc} features={spotProject.features} />
					</div>
				</div>)
			})}
		</div>
	)
}
