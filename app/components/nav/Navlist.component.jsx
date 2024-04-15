

export default function Navlist(props) {
	const ROUTES = [
		"About Me",
		"Featured Projects",
		"Experience",
		"Contact Me"
	]

	return (
		<ul className="flex mobilesc:max-md:hidden flex-row justify-evenly items-center w-1/2 px-4">
			{ROUTES.map((route, idx) => {
				if (route !== "Contact Me") {
					return (
						<button
							className="
							mobilesc:max-md:hidden
							border-2
							border-white
							ultrawide:text-xl
							lg:max-2xl:text-md
							rounded-full
							text-white
							hover:bg-opacity-15
							hover:bg-white
							transition-all
							duration-150
							ease-in-out
							px-8
							py-4
							duration-100
							hover:border-2
							hover:border-green-300
						"
							key={route + "_" + idx}
						>
							{route}
						</button>
					)
				}
				else {
					return (
						<button
							className="
							mobilesc:max-md:hidden
							rounded-full
							ultrawide:text-xl
							lg:max-2xl:text-md
							text-black
							hover:bg-opacity-15
							hover:text-white
							transition-all
							duration-150
							ease-in-out
							px-8
							py-4
							bg-green-300
							hover:border-2
							hover:border-white
							rounded-4
							duration-100
						"
							key={route + "_" + idx}>
							{route}
						</button>
					)
				}
			})}
		</ul>
	)
}
