'use client'

import SectionHeader from "./SectionHeader.component";
import TypeIt from "typeit-react";


export default function ExperienceSection(props) {

	const EXPERIENCE = [
		{
			location: "Planning Synergies PBC Inc.",
			timeline: "12/22-07/23",
			role: "Lead Software Engineer and DevOps Engineer",
			highlights: [
				"Lead a team of developers and designers to bring a test demo from deprecated to production",
				"Successfully migrated a deprecated codebase (written using MEAN stack), and restructured the architecture from a monolith to microservice-oriented.",
				"Developed various secure servers for both in-house monitoring of the product, and the product itself.",
				"Conducted interviews and successfully hired candidates to be part of the development team.",
				"As the only developer when I first came onboard, I still earned a notable investment for our CEO and the company.",
				"Promoted from software engineer to lead engineer and devops enginner within 3 months for my performance and attention to detail.",
				"Managed a team of devs and designers through the Azure DevOps suite",
				"Despite time constraints, and my lack of Azure experience at the time, I still successfully deployed the demo product through Azure and configured it properly."
			],
			skills: [
				{ title: "Software Development", percent: "80%" },
				{ title: "DevOps Engineer", percent: "15%" },
				{ title: "Business Management", percent: "5%" }
			]
		},
		{
			location: "Freelance Software Engineer",
			timeline: "07/20-PRESENT",
			role: "Software Engineer, Web Designer, and Site Admin",
			highlights: [
				"Developed various websites to improve conversions for small business",
				"Worked with teams across various industries and from various backgrounds to bring products to fruition",
				"Built and maintained a steady client pool through my dedication and performance",
				"Experienced across both front- and back-end development for websites, webapps, and software for various platforms, most notably Linux",
			],
			skills: [
				{ title: "Software Development", percent: "55%" },
				{ title: "Business Management", percent: "45%" }
			]

		}
	]

	return (
		<div className="px-24 mobilesc:max-md:px-6 ultrawide:w-2/3 mobilesc:max-ultrawide:w-full flex flex-col justify-center items-center">
			<SectionHeader
				title="Where I've Been Recently"
				numStr="02."
			/>
			{EXPERIENCE.map((job) => {
				return (<div className="mb-12 mobilesc:max-md:mb-6 flex flex-col w-2/3 mobilesc:max-md:w-full">
					<div className="mb-4 flex mobilesc:max-sm:flex-col items-center gap-2 w-full justify-center">
						<div className="mr-4 mobilesc:max-sm:mr-0 flex w-1/2 mobilesc:max-md:w-full gap-2">
							<h1 className="font-black text-green-300 ultrawide:text-2xl">{job.location}</h1>
							<em><h1 className="text-green-300 ultrawide:text-2xl">{job.role}</h1></em>
						</div>
						<hr className="w-96 border-t-2 border-green-300 mobilesc:max-md:hidden"></hr>
						<h1 className="w-96 mobilesc:max-md:w-full ml-4 text-green-300 ultrawide:text-2xl"><TypeIt>{job.timeline}</TypeIt></h1>

					</div>
					{job.skills.map((skill, idx) => {
						return (
							<>
								<div class="ml-24 mobilesc:max-md:ml-0 w-1/3 mobilesc:max-md:w-full flex justify-between mb-1">
									<span class="text-base font-medium text-blue-700 dark:text-white">{skill.title}</span>
									<span class="text-sm font-medium text-blue-700 dark:text-white">{skill.percent}</span>
								</div>
								<div key={'sk-' + idx} class="ml-24 mobilesc:max-md:ml-0 w-1/3 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 mobilesc:max-md:w-full">
									<div ratio={skill.percent} class="animation-prog bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style={{ width: skill.percent }}></div>
								</div >
							</>
						)
					})}
					<ul className="list-disc ultrawide:w-full lg:max-ultrawide:w-full pl-24 mobilesc:max-md:pl-6">
						{job.highlights.map((hl, idx) => {
							return (
								<li
									key={"job-hl-" + idx}
									className="text-green-300 w-full mb-2 ultrawide:text-xl text-lg mobilesc:max-md:text-sm"
								>
									{hl}
								</li>
							)
						})}
					</ul>
				</div>)
			})}
		</div >

	)
}
