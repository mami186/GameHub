import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface Game {
	id: number;
	name: string;
	rating: number;
	background_image: string;
}






const useGames =()=>{

    const [games, setgames] = useState<Game[]>([]);
    const [error, seterror] = useState("");
    const [isLoading, setisLoading] = useState(false);

useEffect(() => {
    setisLoading(true);
    apiClient
        .get("/games")
        .then((res) => setgames(res.data.results))
        .catch((err) => seterror(err.message))
        .finally(() => setisLoading(false));
}, []);
        return {games, error, isLoading};
}
export default useGames;