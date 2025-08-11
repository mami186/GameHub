import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/api-client";
export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenre = () =>
	useQuery({
		queryKey: ["genre"],
		queryFn: () =>
			apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24hrs
	});

export default useGenre;
