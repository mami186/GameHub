import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import ApiClient from "../services/api-client";
import type { Platform } from "./usePlatfom";
import * as ms from 'ms'

const apiClient = new ApiClient<Game>("/games");

export interface Game {
	id: number;
	name: string;
	slug: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery | null) => {
	const query = useInfiniteQuery({
		queryKey: ["Games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery?.genreId,
					parent_platforms: gameQuery?.platformId,
					search: gameQuery?.searchText,
					page: pageParam,
				},
			}),
		initialPageParam: 1,
		staleTime: ms('1 day'),
		getNextPageParam: (lastpage,allpages) => {
			return lastpage.next ? allpages.length+1 : undefined;
		},
	});

	return {
		...query,
		data: query.data ?? { pages: [] }
	};
};

export default useGames;
