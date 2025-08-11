import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "./userData";
import { type Platform } from "./useGames";
import apiClient from "../services/api-client";

const usePlatform = () => {
	const query = useQuery({
		queryKey: ["platforms"],
		queryFn: () => 
			apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents")
				.then(res => res.data.results),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

	return {
		data: query.data || [],
		error: query.error?.message || "",
		isLoading: query.isLoading,
	};
};

export default usePlatform