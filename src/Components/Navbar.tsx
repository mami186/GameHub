import { FaHashnode } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
	return (
		<>
			<nav>
				<ul className="flex justify-between text-black mx-7 ">
					<li>
						<FaHashnode className="text-5xl" />
					</li>
					<li className="flex-grow pl-10 pr-60 pt-3">
						{" "}
						<div className="relative w-full flex items-center">
							<IoSearchSharp className="absolute left-3" />
							<input
								type="text"
								className=" w-full border pl-10 rounded-xl hover:bg-gray-300"
							/>
						</div>
					</li>


                    <li className="mt-3 mr-3">theme</li>
					<li>
						<label className=" relative cursor-pointer ">
							<input type="checkbox" className="  sr-only peer" />
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
