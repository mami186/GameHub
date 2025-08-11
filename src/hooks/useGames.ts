import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import ApiClient from "../services/api-client";
import type { Platform } from "./usePlatfom";

const apiClient =new ApiClient<Game>("/games")

export interface Game {
	id: number;
	name: string;
	slug: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery | null) =>{
	const query =useQuery({
		queryKey: ["Games",gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: gameQuery?.genre?.id,
					parent_platforms: gameQuery?.platform?.id,
					search: gameQuery?.searchText,
				}
			}),
		staleTime: 5 * 60 * 1000, // 5 minutes
	})
	return {
		data: query.data?.results || [],
		isLoading: query.isLoading,
		error: query.error?.message || "",
	};
}

export default useGames;
