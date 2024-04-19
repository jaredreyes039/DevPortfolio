

export default function Navbrand(props) {
	let { brandText } = props;

	return (
		<div className="pl-24 mobilesc:max-xl:pl-0 mobilesc:max-xl:mb-8 flex flex-row mobilesc:max-ultrawide:w-full items-center mobilesc:max-md:justify-center">
			<h1 className="text-3xl text-white mobilesc:max-xl:text-center w-full">{brandText}</h1>
		</div>
	)
}
