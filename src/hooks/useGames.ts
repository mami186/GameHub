import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import type { Platform } from "./usePlatfom";
import useStore from "../store";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
	id: number;
	name: string;
	slug: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
}

const useGames = () => {
	const gameQuery = useStore((s) => s.gameQuery);
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
		staleTime: 24 * 60 * 60 * 1000,
		getNextPageParam: (lastpage, allpages) => {
			return lastpage.next ? allpages.length + 1 : undefined;
		},
	});

	return {
		...query,
		data: query.data ?? { pages: [] },
	};
};

export default useGames;
