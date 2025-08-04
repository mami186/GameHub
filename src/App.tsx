import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import SIdebar from "./Components/SIdebar";
import Rawg from "./Components/Rawg";
import PlatformSelector from "./Components/PlatformSelector";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import type { Platform } from "./hooks/useGames";


export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	searchText : string 
}
const App = () => {
	const [gameQuery , setgameQuery]=useState<GameQuery>({}as GameQuery)
		
	return (
		<>
			<div className=" ">
				<Navbar onsubmit={(searchText)=>setgameQuery({...gameQuery , searchText})} />
				<div className="flex flex-auto">
					<div className=" hidden sm:hidden md:block lg:block w-43">
						<SIdebar
							selectedGenre={gameQuery.genre}
							onselectedGenre={(genre) => setgameQuery({...gameQuery , genre})}
						/>
						<PlatformSelector
							onSelectPlatform={(platform: Platform) =>
								setgameQuery({...gameQuery , platform})
							}
						/>
					</div>

					<div className="">
						<MainContent
							gameQuery={gameQuery}
						/>{" "}
					</div>
				</div>
			</div>
			<Rawg />
		</>
	);
};

export default App;
