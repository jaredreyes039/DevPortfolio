

export default function Navbar(props) {



	return (
		<div className="z-50 mobilesc:max-xl:flex-col z-100 w-full absolute left-0 top-0 py-8 flex flex-row justify-between items-center">
			{props.children}
		</div>
	)
}
