import { useState } from "react";
import { FaHashnode, FaMoon, FaSun } from "react-icons/fa6";
import { IoSearchSharp, IoMenu } from "react-icons/io5";

const Navbar = () => {
	const [ theme, toggleTheme ] = useState();
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
							<input
								type="text"
								className=" w-full border  rounded-xl hover:bg-gray-300"
							/>
						</div>
					</li>


                    <li className={`mt-3 mr-2 text-2xl sm:block  md:block ${theme === 'dark' ? "hidden" : "block"}`} >
					<FaSun />
					</li>
					<li className={`mt-3 mr-2 text-2xl sm:block  md:block ${theme === 'dark' ? "block" : "hidden"}`}>
					<FaMoon /> 
					</li>
					<li className="mr-2">
						<label className=" relative cursor-pointer">
							<input type="checkbox" className="sr-only peer "  />
                            <div className="w-11 h-6 mt-3 bg-gray-300 peer-checked:bg-gray-900 rounded-full transition-all duration-300"></div>
                            <div className="absolute  mt-3 left-1 top-1 w-4 h-4 bg-gray-900 rounded-full transition-all duration-300 peer-checked:translate-x-5 peer-checked:bg-gray-300"></div>
						</label>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
