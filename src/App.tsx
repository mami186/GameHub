import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import SIdebar from "./Components/SIdebar";
import PlatformSelector from "./Components/PlatformSelector";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import type { Platform } from "./hooks/useGames";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	searchText: string;
}
const App = () => {
	const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			<div className="relative">
				<Navbar
					onsubmit={(searchText) => setgameQuery({ ...gameQuery, searchText })}
					onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				/>

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
						<SIdebar
							selectedGenre={gameQuery.genre}
							onselectedGenre={(genre) => {
								setgameQuery({ ...gameQuery, genre });
								setIsMobileMenuOpen(false);
							}}
						/>
					</div>
				</div>

				<div className="flex flex-auto">
					{/* Desktop Sidebar */}
					<div className="hidden md:block lg:block w-43">
						<SIdebar
							selectedGenre={gameQuery.genre}
							onselectedGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
						/>
					</div>

					<div className="flex-1">
						<div className="flex flex-col">
							<GameHeading gmaeQuery={gameQuery} />
							<PlatformSelector
								onSelectPlatform={(platform: Platform) =>
									setgameQuery({ ...gameQuery, platform })
								}
							/>
						</div>
						<div className="">
							<MainContent gameQuery={gameQuery} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
