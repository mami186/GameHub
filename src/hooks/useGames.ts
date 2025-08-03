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
	parent_platforms: { platform: Platform }[];
}

const useGames = (selectedGenre: Genre | null ,selectedPlatform : Platform | null	) =>
	useData<Game>("/games", { params: { genres: selectedGenre?.id , parent_platforms : selectedPlatform?.id } }, [
		selectedGenre?.id,selectedPlatform?.id
	]);

export default useGames;
