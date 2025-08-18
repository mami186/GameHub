import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import GameAttributes from "../Components/GameAttributes";
import GameDescription from "../Components/GameDescription";
import GameTrailer from "../Components/GameTrailer";
import GameScreenshots from "../Components/GameScreenshots";

const GameDetail = () => {
	const { slug } = useParams();
	const { data: game, isLoading } = useGameDetail(slug!);

	return (
		<div>
			<div className='w-full'>
				<GameDescription isLoading={isLoading} game={game} />

				<GameAttributes game={game} />
			</div>

			<div className="flex flex-col flex-wrap">
					<h1 className="text-3xl font-bold">Screenshots</h1>
					{game?.id && <GameScreenshots id={game.id}></GameScreenshots>}
				<div  className='flex flex-row flex-wrap w-[480px]'>
					<h1 className="text-3xl font-bold">Game Trailer</h1>
					{game?.id && <GameTrailer id={game.id}></GameTrailer>}
				</div>
			</div>
		</div>
	);
};

export default GameDetail;
