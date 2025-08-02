    import { useEffect, useState } from "react";
    import apiClient from "../services/api-client";
    import MediaResize from "./MediaResize";
import useGenre from "../hooks/useGenre";

    const SIdebar = () => {
        const {genre, error ,isloading}=useGenre()

        return (
            <>
                <ul className=" shadow-md mr-3 h-auto pb-1 pl-4 pr-9 rounded-2xl">
                    <h1 className="text-2xl text-left font-bold ">Genres</h1>
                    {error && <p>{error}</p>}
                    {isloading && <div>Loading...</div>}
                    <div>
                        {genre.map((genreItem) => (
                            <li key={genreItem.id} className="flex items-center gap-2 my-2 pr-2">
                                <img
                                    className=" w-8 h-8 rounded-sm"
                                    src={MediaResize(genreItem.image_background)}
                                    alt="Image"
                                />{" "}
                                <p className='text-sm'>{genreItem.name}</p>
                            </li>
                        ))}
                    </div>
                </ul>
            </>
        );
    };

    export default SIdebar;
