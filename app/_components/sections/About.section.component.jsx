'use client'

import SectionHeader from "./SectionHeader.component";
import dynamic from 'next/dynamic';
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((lot) => lot.Player), { ssr: false });

export default function AboutSection(props) {

	return (
		<div className="px-24 mobilesc:max-lg:px-6 py-12 ultrawide:w-2/3 lg:max-ultrawide:w-full flex flex-col justify-center items-center">
			<SectionHeader
				title="This is My Developer Journey"
				numStr="03."
			/>
			<div className="flex mobilesc:max-lg:flex-col ultrawide:items-center ultrawide:justify-center ultrawide:w-full ultrawide:mb-12 lg:max-ultrawide:w-full">
				<div className="ultrawide:w-2/3 lg:max-ultrawide:w-1/3 relative">
					<div className="ultrawide:w-full z-0">
						<Player className="utlrawide:width-[100%]" autoplay loop src={'./astronaut.json'} />
					</div>
				</div>
				<div className="flex flex-col ultrawide:w-full lg:max-ultrawide:w-2/3">
					<h1 className="text-4xl text-green-300 mb-4">
						From Disorder to Developer
					</h1>
					<p className="leading-loose mobilesc:max-md:leading-relaxed mb-12 ultrawide:text-xl text-white">
						The 2020 pandemic unleashed a truly nightmarish time upon humanity, and in that time many of us struggled with losing the structure of our day-to-day. When the 2020 pandemic hit, my structure and stability collapsed with all the others, and I found myself going from a healthy, happy young college student to a spiraling, cycling mess in the course of one year- my bipolar disorder had become an active challenge, anxiety was through the roof, and overall times were difficult (needless to say). It was during this time of struggle, however, when I took on programming (as for why I really couldn't tell you), and while at the time I thought it'd be nothing more than a silly hobby I would just drop in a week or so, I see now it was the key to me living a normal life again.
					</p>
					<p className="leading-loose mobilesc:max-md:leading-relaxed ultrawide:text-xl text-white ">
						As time went on, I took my programming skills from a mere beginner, to feeling confident enough to do simple gigs here and there. While I was making my big break into tech, I didn't realize I was also making my big break in my own health- I was starting to find stability again, and things didn't feel so bad anymore. Fast forward a bit further and Im not cycling anymore, my anxiety is managed, and I now proudly and confidently call myself a software engineer!
					</p>

				</div>

			</div>

		</div>
	)
}
