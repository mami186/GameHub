import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import SIdebar from "./Components/SIdebar";
import Rawg from "./Components/Rawg";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	return (
		<>
			<div className=" ">
				<Navbar />
				<div className="flex flex-auto">
					<div className=" hidden sm:hidden md:block lg:block w-43">
						<SIdebar onselectedGenre={(genra) => setSelectedGenre(genra)} />
					</div>

					<div className="">
						<MainContent selectedGenre={selectedGenre}/>
					</div>
				</div>
			</div>
			<Rawg />
		</>
	);
};

export default App;
