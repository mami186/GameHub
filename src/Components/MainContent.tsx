import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Props {
	count: number;
	result: Game[];
}

interface Game {
	id: number;
	name: string;
	rating: number;
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
	});
	return (
		<>
			{error && <p>{error}</p>}
			{isLoading && <div className="spinner-border"></div>}

			{games.map((games)=>(<div className="w-40 p-4 bg-white rounded-2xl shadow-md m-1" key={games.id}>
				<p className="text-gray-600 mb-4">
					{games.name}
				</p>

			</div>
            ))}
		</>
	);
};

export default MainContent;
