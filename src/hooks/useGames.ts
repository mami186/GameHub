import { type AxiosRequestConfig } from "axios";
import type { Genre } from "./useGenre";
import useData from "./userData";

interface Game {
	id: number;
	name: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
}
export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const useGames = (selectedGenre: Genre | null) =>
	useData<Game>(
		"/games",
		{params: { genres: selectedGenre?.id } },
		[selectedGenre?.id]
	);

export default useGames;
