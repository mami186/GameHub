import { useState } from "react";
import MainContent from "../Components/MainContent";
import SIdebar from "../Components/SIdebar";


const App = () => { 
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<>
				{/* Mobile Sidebar Overlay */}
				{isMobileMenuOpen && (
					<div
						className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
						onClick={() => setIsMobileMenuOpen(false)}
					/>
				)}

				{/* Mobile Sidebar */}	
				<div
					className={`fixed top-0 left-0 h-full w-64 bg-white   z-50 transform transition-transform duration-300 md:hidden ${
						isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className="p-4">
						<button
							onClick={() => setIsMobileMenuOpen(false)}
							className="mb-4 text-2xl"
						>
							×
						</button>
						<SIdebar/>
					</div>
				</div>

				<div className="flex flex-auto">
					{/* Desktop Sidebar */}
					<div className="hidden md:block lg:block w-43">
						<SIdebar/>
					</div>

					<div className="flex-1">

						<div className="">
							<MainContent />
						</div>
					</div>
				</div>
		</>
	);
};

export default App;
