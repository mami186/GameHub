import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import type { Game } from "./useGames";


const apiClient = new ApiClient<Game>("/games");

const useGameDetail = (slug: string) => {
	const query = useQuery({
		queryKey: ["gameDetail", slug],
		queryFn: () => apiClient.get(slug),
		staleTime: 24 * 60 * 60 * 1000,
		enabled: !!slug,
	});

	return {
		data: query.data,
		error: query.error?.message || "",
		isLoading: query.isLoading,
	};
};

export default useGameDetail