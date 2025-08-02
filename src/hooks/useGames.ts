import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import type { Genre } from "./useGenre";

interface Game {
	id: number;
	name: string;
	rating: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
}
export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const useGames = (
	selectedGenre: Genre | null,
	requestconfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [games, setgames] = useState<Game[]>([]);
	const [error, seterror] = useState("");
	const [isLoading, setisLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();
			setisLoading(true);
			apiClient
				.get("/games", {
					signal: controller.signal,
					...requestconfig,
					params: { genres: selectedGenre?.id },
				})
				.then((res) => setgames(res.data.results))
				.catch((err) => {
					if (err instanceof CanceledError) return;
					seterror(err.message);
				})
				.finally(() => setisLoading(false));

			return () => controller.abort();
		},
		deps ? [...deps, selectedGenre?.id] : [selectedGenre?.id]
	);
	return { games, error, isLoading };
};
export default useGames;
