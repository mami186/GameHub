import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import MediaResize from "./MediaResize";

interface Props {
	count: number;
	result: Game[];
}

interface Game {
	id: number;
	name: string;
	rating: number;
	background_image: string;
}
const MainContent = () => {
	const [games, setgames] = useState<Game[]>([]);
	const [error, seterror] = useState("");
	const [isLoading, setisLoading] = useState(false);

	useEffect(() => {
		setisLoading(true);
		apiClient
			.get("/games")
			.then((res) => setgames(res.data.results))
			.catch((err) => seterror(err.message))
			.finally(() => setisLoading(false));
	}, []);
	return (
		<>
			{error && <p>{error}</p>}
			{isLoading && <div className="spinner-border"></div>}

			{games.map((games) => (<>
				<div
					className="w-65  bg-white rounded-lg overflow-hidden shadow-2xl m-1 mb-2"
					key={games.id}
				>
					<img  src={MediaResize(games.background_image)} alt="Image" />
					<div className="flex justify-between px-3" >
					<div>
						<p className="text-gray-600 mb-4  mt-1">{games.name}</p>
					</div>
					<div>
						<p className="px-1 mt-3  mb-2 flex justify-between bg-gray-500 opacity-70 rounded">{games.rating}</p>
					</div>
					</div>
				</div>
				</>
			))}
		</>
	);
};

export default MainContent;
