

export default function SectionHeader(props) {
	const { title, numStr } = props;
	return (
		<div className="mb-24 mobilesc:max-md:mb-12 flex items-center justify-center w-full bg-shadow h-1/3 ">
			<h1 className="ultrawide:text-7xl 2xl:text-6xl lg:max-ultrawide:text-5xl mobilesc:max-md:text-3xl text-green-300">{numStr} <span className="text-white">{title}</span></h1>
			<hr className="border-t-2 border-green-300 w-full"></hr>
		</div>

	)
} 
