'use client'

import SectionHeader from "./SectionHeader.component";
import dynamic from 'next/dynamic';
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((lot) => lot.Player), { ssr: false });

export default function AboutSection(props) {

	return (
		<div className="px-48 mobilesc:max-lg:px-6 py-12 ultrawide:w-2/3 lg:max-ultrawide:w-full flex flex-col justify-center items-center">
			<SectionHeader
				title="This is My Developer Journey"
				numStr="03."
			/>
			<div className="flex mobilesc:max-lg:flex-col md:mb-12 ultrawide:items-center ultrawide:justify-center ultrawide:w-full ultrawide:mb-12 lg:max-ultrawide:w-full">
				<div className="ultrawide:w-2/3 mobilesc:max-md:mb-4 lg:max-ultrawide:w-1/3 relative">
					<div className="ultrawide:w-full z-0">
						<Player className="utlrawide:width-[100%]" autoplay loop src={'./devLottieA.json'} />
					</div>
				</div>
				<div className="flex flex-col mobilesc: ultrawide:w-full lg:max-ultrawide:w-2/3">
					<h1 className="text-4xl mobilesc:max-lg:text-2xl text-green-300 mb-4">
						On Pokemon, Physics, and a Self-Motivated College Student
					</h1>
					<p className="leading-loose mobilesc:max-md:leading-relaxed mb-4 lg:text-lg text-white">
						What do Pokemon, physics class, and the desire to do your own thing lead to? Well, if
						you're me, all it takes is a sprinkle of Gengar, a pinch of Newtonian Mechanics, and a heaping scoop of determination- and you find yourself a software engineer!
					</p>
					<p className="leading-loose mobilesc:max-md:leading-relaxed lg:text-lg mb-4 text-white ">
						My development journey started back in high school where I was exposed to HTML4 (yes, 4)
						when a friend of mine taught me a few tricks to build a very barebones blog- no styles, nothing of
						the like. The blog was essentially, more or less, a joke for a website, but at that time I wasn't
						taking programming as anything more than a little trick I could do in class when I was bored.
					</p>
					<p className="leading-loose mobilesc:max-md:leading-relaxed lg:text-lg text-white ">
						While high school was a brief intro to a world I never knew existed at the time, college is where
						I began taking programming seriously- not because I was a comp sci major (I was actually going for a
						double major focused in chemical and biomedical engineering), but because physics class was repetitive,
						problems were boring, and "I can do this faster" was all that would ring in my ears, I took on python and moved onto developing a simple physics caluclator- where we all seem to start in this field isnt it- a calculator? Anyways, fast forward a few programming-filled months and I dropped out of college to pursue software engineering, and I never, ever looked back.
					</p>
				</div>

			</div>
			<div className="flex flex-row-reverse mobilesc:max-lg:flex-col ultrawide:items-center ultrawide:justify-center ultrawide:w-full ultrawide:mb-12 lg:max-ultrawide:w-full">
				<div className="ultrawide:w-2/3 lg:max-ultrawide:w-1/3 relative">
					<div className="ultrawide:w-full z-0">
						<Player className="utlrawide:width-[100%]" autoplay loop src={'./devLottieB.json'} />
					</div>
				</div>
				<div className="flex flex-col ultrawide:w-full lg:max-ultrawide:w-2/3">
					<h1 className="text-4xl mobilesc:max-lg:text-2xl text-green-300 mb-4">
						On Freelancing, Reflection, and Moving Forward
					</h1>
					<p className="leading-loose mobilesc:max-md:leading-relaxed mb-4 lg:text-lg text-white">
						Once I was comfortable programming, around November of 2020 I started freelancing! With Fiverr as may main platform even today, I found a niche all my own for helping others organize their lives and businesses so they can focus on what matters most to them! From basic services like transferring notes to Obsidian vaults in markdown, to intense months-long contracts such as Rapifly- a unique work situation where I found myself as lead software engineer, scrum master, azure admin, and even a proxy-human resources agent sifting through resumes and interviewing a variety of individuals for various roles in the business.
					</p>
					<p className="leading-loose mobilesc:max-md:leading-relaxed lg:text-lg mb-4 text-white ">
						Ultimately, freelancing has unlocked unbelievable opportunities for me that, had I stayed in college, I don't believe I would have had the fortune to experience otherwise. While I plan to go back one day, for now I am comfortable with the decision I made back in 2020, and I look forward to sharing my knowledge and expertise with you.
					</p>
					<p className="leading-loose mobilesc:max-md:leading-relaxed lg:text-lg text-white ">
						Moving forward, I look to stop freelancing entirely because while I love the freedom of being my own leader,I also enjoy having a stable living, and for any employers reading this, I look forward to moving on from this chapter of self-employment, and starting my next chapter anew with your business!
					</p>
				</div>

			</div>


		</div>
	)
}
