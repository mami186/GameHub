import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import * as ms from "ms";

const apiClient =new ApiClient<Platform>("/platforms/lists/parents")
export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatform = () => {
	const query = useQuery({
		queryKey: ["platforms"],
		queryFn: () => apiClient.getAll(),
		staleTime: ms('1 day'), // 24 hours
	});

	return {
		data: query.data?.results || [],
		error: query.error?.message || "",
		isLoading: query.isLoading,
	};
};

export default usePlatform