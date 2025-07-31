    import { useEffect, useState } from "react";
    import apiClient from "../services/api-client";
    import MediaResize from "./MediaResize";

    interface Props {
        count: number;
        result: Genre[];
    }
    interface Genre {
        id: number;
        name: string;
        image_background: string;
    }
    const SIdebar = () => {
        const [genre, setgenre] = useState<Genre[]>([]);
        const [error, seterror] = useState("");
        const [isloading, setisloading] = useState(false);
        useEffect(() => {
            setisloading(true);

            apiClient
                .get("/genres")
                .then((res) => {
                    setgenre(res.data.results);
                })
                .catch((err) => {
                    seterror(err.message);
                })
                .finally(() => {
                    setisloading(false);
                });
        }, []);

        return (
            <>
                <ul className=" shadow-md mr-3 h-auto pl-4 pr-9 rounded-2xl">
                    <h1 className="text-2xl text-left font-bold ">Genres</h1>
                    {error && <p>{error}</p>}
                    {isloading && <div>Loading...</div>}
                    <div>
                        {genre.map((genre) => (
                            <li className="flex items-center gap-2 my-2 pr-2">
                                <img
                                    className=" w-8 h-8 rounded-sm"
                                    src={MediaResize(genre.image_background)}
                                    alt="Image"
                                    key={genre.id}
                                />{" "}
                                <p className='text-sm'>{genre.name}</p>
                            </li>
                        ))}
                    </div>
                </ul>
            </>
        );
    };

    export default SIdebar;
