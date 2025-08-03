import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import SIdebar from "./Components/SIdebar";
import Rawg from "./Components/Rawg";
import PlatformSelector from "./Components/PlatformSelector";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import type { Platform } from "./hooks/useGames";

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);
	return (
		<>
			<div className=" ">
				<Navbar />
				<div className="flex flex-auto">
					<div className=" hidden sm:hidden md:block lg:block w-43">
						<SIdebar
							selectedGenre={selectedGenre}
							onselectedGenre={(genra) => setSelectedGenre(genra)}
						/>
						<PlatformSelector
							onSelectPlatform={(platform: Platform) =>
								setSelectedPlatform(platform)
							}
						/>
					</div>

					<div className="">
						<MainContent
							selectedPlatform={selectedPlatform}
							selectedGenre={selectedGenre}
						/>{" "}
					</div>
				</div>
			</div>
			<Rawg />
		</>
	);
};

export default App;
