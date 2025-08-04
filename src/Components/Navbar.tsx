import { useRef, useState } from "react";
import { FaHashnode, FaMoon, FaSun } from "react-icons/fa6";
import { IoSearchSharp, IoMenu } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";

interface Props{
	onsubmit :(search:string)=>void
}

const Navbar = ({onsubmit}:Props) => {

	const ref =useRef<HTMLInputElement>(null)

	const [darkMode, setDarkMode] = useState(false)

		const toggleTheme = () => {
		  const html = document.documentElement
		  if (html.classList.contains("dark")) {
			html.classList.remove("dark")
			localStorage.setItem("theme", "light")
		  } else {
			html.classList.add("dark")
			localStorage.setItem("theme", "dark")
		  }
		}

	return (
		<>
			<nav className="pt-4">
				<ul className="flex justify-between  sm:mx-10 text-black   ">
					<li className="text-3xl m-2  sm:block md:hidden">
					<IoMenu />
					</li>
					<li >
						<FaHashnode className="text-4xl m-1" />
					</li>
					<li className="flex flex-grow gap-3 pl-3 pr-10 ">
						{" "}
						<div className="relative w-full flex items-center">
							<IoSearchSharp className="absolute left-3" />
							<form onSubmit={(event)=>{
								event.preventDefault()
								if(ref.current) onsubmit(ref.current?.value)}
							}>
								<input ref={ref}
									type="text"
									className=" w-full border  rounded-xl hover:bg-gray-300"
								/>
							</form>
						</div>
					</li>

					
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
