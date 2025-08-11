import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

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
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

	return {
		data: query.data?.results || [],
		error: query.error?.message || "",
		isLoading: query.isLoading,
	};
};

export default usePlatform