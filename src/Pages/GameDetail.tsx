import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { useState } from "react";

const GameDetail = () => {
	const { slug } = useParams();
	const { data: game } = useGameDetail(slug!);
	const [showFull, setShowFull] = useState(false);

	const isLong = (game?.description_raw?.length || 0) >= 300;
	const displayText = showFull
		? game?.description_raw
		: game?.description_raw?.slice(0, 300)+'...  ';

	const toggleText = () => {
		setShowFull(!showFull);
	};

	return (
		<><div className="h-screen">

			<h1 className="text-6xl px-20 font-bold">{game?.name}</h1>
			<div className="my-3 mx-10">
				<p>{displayText} <button className="rounded bg-gray-700 text-white p-1 ml-2" hidden={!isLong} onClick={toggleText}>
					{showFull ? "Show Less" : "Show More"}
				</button></p>
			</div>
			
		</div>
		</>
	);
};

export default GameDetail;
