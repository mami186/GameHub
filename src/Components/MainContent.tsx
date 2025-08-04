import MediaResize from "./MediaResize";
import useGames from "../hooks/useGames";
import LoadingSkeleton from "./LoadingSkeleton";
import type { GameQuery } from "../App";
import PlatformIcons from "./PlatformIcons";


interface Props{
	gameQuery : GameQuery
}


const MainContent = ({gameQuery}:Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




	return (
		<>
			{error && <p>{error}</p>}
			<div className="flex flex-wrap justify-evenly px-2 sm:px-0 ">
				{isLoading && skeletons.map((skeleton) => (
					<LoadingSkeleton key={skeleton} />
				))}
				{!isLoading && data.map((game) => (
					<div
						className={'flex flex-col flex-auto  sm:w-72 sm:max-w-96  rounded-lg overflow-hidden shadow-2xl  m-1 mb-2 '}
						key={game.id}
					>
						<img src={MediaResize(game.background_image)} alt="Image" />
						<div className="flex flex-col">
							<div className="flex items-center justify-between px-3 py-2 h-auto">
								<div>{game.name}</div>
								<div className="bg-gray-500 opacity-70 rounded p-0 text-center">
									{game.rating}
								</div>
							</div>
							<div className="px-3 pb-2">
								<PlatformIcons
									platforms={game.parent_platforms.map((p) => p.platform)}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default MainContent;
