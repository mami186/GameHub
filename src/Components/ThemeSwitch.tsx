import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeSwitch = () => {
	const [isDark, setIsDark] = useState(() => {
		// Check localStorage or default to false
		return localStorage.getItem("theme") === "dark";
	});

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	useEffect(() => {
		// Apply or remove the 'dark' class to the document body
		if (isDark) {
			document.body.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.body.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	return (
		<div className="flex items-center space-x-4 ">
			<button
				onClick={toggleTheme}
				className={`relative w-16 h-8 rounded-full border  p-1 flex items-center transition-colors duration-300 ${
					isDark ? "bg-black" : "bg-gray-300"
				}`}
			>
				{/* Icons on background */}
				<div className="absolute inset-0 flex justify-between items-center px-2 text-xs pointer-events-none">
					<FaSun className={`${isDark ? "text-transparent" : "text-black"}`} />
					<FaMoon className={`${isDark ? "text-white" : "text-transparent"}`} />
				</div>

				<div
					className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
						isDark ? "translate-x-0" : "translate-x-8"
					}`}
				/>
			</button>
		</div>
	);
};

export default ThemeSwitch;
