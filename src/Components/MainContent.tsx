import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import MediaResize from "./MediaResize";
import useGames from "../hooks/useGames";



const MainContent = () => {
	const {games ,error , isLoading}=useGames() 	 	

	return (
		<>
			{error && <p>{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<div className="flex flex-wrap ">
				{games.map((game) => (
					<div
						className="flex flex-col flex-auto sm:w-64 bg-white rounded-lg overflow-hidden shadow-2xl m-1 mb-2"
						key={game.id}
					>
						<img src={MediaResize(game.background_image)} alt="Image" />
						<div className="flex items-center justify-between px-3 py-2 h-auto">
							<div>{game.name}</div>
							<div className="bg-gray-500 opacity-70 rounded p-0 text-white text-center">
								{game.rating}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default MainContent;
