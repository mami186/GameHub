import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import GameAttributes from "../Components/GameAttributes";
import GameDescription from "../Components/GameDescription";

const GameDetail = () => {
	const { slug } = useParams();
	const { data: game ,isLoading} = useGameDetail(slug!);

	return (
		<div className="min-h-screen p-5 px-9  delay-300 animate-slideInUp">
			<div >
			<GameDescription isLoading={isLoading} game={game}/>
			
			<GameAttributes game={game}/></div>
			
		</div>
	);
};

export default GameDetail;
