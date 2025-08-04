import type { GameQuery } from "../App";
import type { Genre } from "./useGenre";
import useData from "./userData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	slug: string;
	rating: number;
	background_image: string;
	parent_platformsparent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery | null) =>
	useData<Game>(
		"/games",
		{params: {
				genres: gameQuery?.genre?.id,
				parent_platforms: gameQuery?.platform?.id,
				search : gameQuery?.searchText
			},
		},
		[gameQuery]
	);

export default useGames;
