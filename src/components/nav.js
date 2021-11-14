import React from "react"
import { Link } from "gatsby"

export const Nav = () => {
	const unactiveLink = "py-4 px-2 text-gray-500 font-lato hover:text-purple-400 transition duration-300"
	const activeLine = "py-4 px-2 text-purple-400 border-b-4 border-purple-400 font-lato "
    return (
	<nav className="bg-white shadow-lg">
		<div className="max-w-7xl mx-auto px-4">
			<div className="flex justify-between">
				<div>
					<Link to="/" className="flex items-center py-4 px-2">
						<h1 className="font-lato text-gray-500 text-lg">
							PATRICIA SANTAENGRACIA
						</h1>
					</Link>
				</div>
				<div className="hidden md:flex items-center space-x-1">
					<Link to="/" className={ unactiveLink } activeClassName= { activeLine } >
						STORYBOARD
					</Link>
					<Link to="/illustrations" className={ unactiveLink } activeClassName= { activeLine } >
						ILLUSTRATION/DESIGN
					</Link>
					<Link to="/about" className={ unactiveLink } activeClassName= { activeLine } >
						ABOUT
					</Link>
				</div>
			</div>
		</div>
	</nav>
    )
}

export default Nav
