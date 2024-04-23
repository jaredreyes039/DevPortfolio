'use client'

export default function Navlist(props) {

	const { setElem } = props;

	const ROUTES = [
		{ rt: "About Me", elem: "story" },
		{ rt: "Featured Projects", elem: "feat" },
		{ rt: "Experience", elem: "exp" },
		{ rt: "Contact Me", elem: "contact" }
	]

	return (
		<ul className="pointer-events-auto flex flex-row justify-evenly items-center w-full px-4">
			{ROUTES.map((route, idx) => {
				if (route.rt !== "Contact Me") {
					return (
						<button
							className="
							mobilesc:max-md:hidden
							border-2
							border-white
							ultrawide:text-xl
							lg:max-xl:text-md
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
							onClick={() => { setElem(route.elem) }}
							key={route.rt + "_" + idx}
						>
							{route.rt}
						</button>
					)
				}
				else {
					return (
						<button
							className="
							bg-green-300
							mobilesc:max-md:hidden
							rounded-full
							ultrawide:text-xl
							lg:max-xl:text-md
							text-black
							hover:bg-opacity-15
							hover:text-white
							transition-all
							duration-150
							ease-in-out
							px-8
							py-4
							hover:border-2
							hover:border-white
						"
							onClick={() => {
								setElem(route.elem)
							}}
							key={route.rt + "_" + idx}>
							{route.rt}
						</button>
					)
				}
			})}
		</ul>
	)
}
