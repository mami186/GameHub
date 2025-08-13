import { useState } from "react";
import GameHeading from "./Components/GameHeading";
import MainContent from "./Components/MainContent";
import Navbar from "./Components/Navbar";
import PlatformSelector from "./Components/PlatformSelector";
import SIdebar from "./Components/SIdebar";
import type { Platform } from "./hooks/usePlatfom";

export interface GameQuery {
	genreId?: number ;
	platformId?: number;
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
							selectedGenreId={gameQuery.genreId}
							onselectedGenre={(genre) => {
								setgameQuery({ ...gameQuery, genreId: genre.id });
								setIsMobileMenuOpen(false);
							}}
						/>
					</div>
				</div>

				<div className="flex flex-auto">
					{/* Desktop Sidebar */}
					<div className="hidden md:block lg:block w-43">
						<SIdebar
							selectedGenreId={gameQuery.genreId}
							onselectedGenre={(genre) => setgameQuery({ ...gameQuery, genreId: genre.id })}
						/>
					</div>

					<div className="flex-1">
						<div className="flex flex-col">
							<GameHeading gmaeQuery={gameQuery} />
							<PlatformSelector 
								onSelectPlatform={(platform: Platform) =>
									setgameQuery({ ...gameQuery, platformId: platform.id })
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
