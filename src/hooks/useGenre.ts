import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenre = () => {
	const [genre, setgenre] = useState<Genre[]>([]);
	const [error, seterror] = useState("");
	const [isloading, setisloading] = useState(false);
	useEffect(() => {
		const controller = new AbortController();
		setisloading(true);

		apiClient
			.get("/genres", { signal: controller.signal })
			.then((res) => {
				setgenre(res.data.results);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				seterror(err.message);
			})
			.finally(() => {
				setisloading(false);
			});

		return () => controller.abort();
	}, []);
	return { genre, error, isloading };
};
export default useGenre;
