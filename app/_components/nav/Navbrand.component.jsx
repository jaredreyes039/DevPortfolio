

export default function Navbrand(props) {
	let { brandText } = props;

	return (
		<div className="pl-24 mobilesc:max-md:pl-0 flex flex-row md:max-ultrawide:w-1/3 mobilesc:max-md:w-full items-center mobilesc:max-md:justify-center">
			<h1 className="text-3xl text-white mobilesc:max-md:text-center w-full">{brandText}</h1>
		</div>
	)
}
