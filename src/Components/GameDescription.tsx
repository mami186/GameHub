import { useState } from "react";
import type { Game } from "../hooks/useGames";
interface Props {
	game?: Game;
	isLoading: boolean;
}
const GameDescription = ({ game, isLoading }: Props) => {
	const [showFull, setShowFull] = useState(true);

	const isLong = (game?.description_raw?.length || 0) >= 300;
	const displayText = showFull
		? game?.description_raw?.slice(0, 300) + "...  "
		: game?.description_raw;

	const toggleText = () => {
		setShowFull(!showFull);
	};
	if (isLoading)
		return (
			<div className="rounded my-5 animate-pulse ">
				<div className="px-20 rounded font-bold bg-gray-500 h-9 w-9 my-6 mx-19" />
				<div className="px-5 rounded bg-gray-500 h-19 w-full" />
				<button className="rounded bg-gray-500 text-white px-9 py-3 ml-9" />
			</div>
		);
	return (
		<>
			<div className="my-5   ">
				<p className="">
					{displayText}{" "}
					<button
						className="rounded bg-gray-500 hover:bg-gray-700 text-white  ml-2"
						onClick={toggleText}
					>
						{showFull ? "Show Less" : "Show More"}
					</button>
				</p>
			</div>
		</>
	);
};

export default GameDescription;
