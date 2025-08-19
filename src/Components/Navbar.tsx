import { useRef, useState } from "react";
import { FaHashnode } from "react-icons/fa6";
import { IoSearchSharp, IoMenu } from "react-icons/io5";
import ThemeSwitch from "./ThemeSwitch";
import useStore from "../store";



const Navbar = () => {
	const ref = useRef<HTMLInputElement>(null);
	const [hasText, setHasText] = useState(false);
	const setSearchText=useStore(s=>s.setSearchText)
	const setmenueBar =useStore(s=>s.setmenueBar)
	return (
		<>
			<nav className="pt-4">
				<ul className="flex justify-center  mx-2 sm:mx-10  text-black   ">
					<li className="text-3xl m-2 sm:block md:hidden">
						<button onClick={setmenueBar} className="p-1">
							<IoMenu />
						</button>
					</li>

					<li>
						<FaHashnode className="text-4xl m-1" />
					</li>

					<li className="flex flex-grow gap-3 pl-3 sm:mx-10 pr-10 ">
						<div className="relative w-full flex items-center">
							<IoSearchSharp
								className={`absolute left-3 z-10 text-gray-500 transition-opacity duration-200`}
							/>
							<form
								className="w-full"
								onSubmit={(event) => {
									event.preventDefault();
									if (ref.current) setSearchText(ref.current?.value);
								}}
							>
								<input
									ref={ref}
									type="text"
									placeholder="Search games..."
									className="w-full h-10 border border-gray-300 rounded-2xl px-10 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
									onChange={(e) => setHasText(e.target.value.length > 0)}
								/>
							</form>
						</div>
					</li>
					<li className="flex items-center space-x-4">
						<ThemeSwitch />
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
