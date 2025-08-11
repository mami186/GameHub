import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import {type FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

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

const useGames = (gameQuery: GameQuery | null) =>{
	const query =useQuery({
		queryKey: ["Games",gameQuery],
		queryFn: () =>
			apiClient.get<FetchResponse<Game>>("/games", {
				params: {
					genres: gameQuery?.genre?.id,
					parent_platforms: gameQuery?.platform?.id,
					search: gameQuery?.searchText,
				},
			}).then((res) => res.data.results),

	})
	return {
		data: query.data || [],
		isLoading: query.isLoading,
		error: query.error?.message || "",
	};
}

export default useGames;
