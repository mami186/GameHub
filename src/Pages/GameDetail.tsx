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
		<>
			<div className="px-40 text-6xl font-bold mt-9">{game?.name}</div>
		<div className="px-30 max-w-7xl mx-auto mt-9">
			<div className="flex flex-col flex-wrap">
				{game?.id && <GameScreenshots id={game.id}></GameScreenshots>}
				<div className="w-full">
					{game?.id && <GameTrailer id={game.id}></GameTrailer>}
				</div>
			</div>

			<div className="w-full">
				<GameDescription isLoading={isLoading} game={game} />
			</div>
			<GameAttributes game={game} />
		</div>
</>	);
};

export default GameDetail;
