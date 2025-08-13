import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import * as ms from "ms";

const apiClient = new ApiClient<Genre>("/genres");
export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenre = () => {
	const query = useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClient.getAll(),
		staleTime: ms("1 day"), // 24 hours
	});
	return {
		data: query.data?.results || [],
		error: query.error?.message || "",
		isLoading: query.isLoading,
	};
};

export default useGenre;
