import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
	id: number;
}

const GameScreenshots = ({ id }: Props) => {
	const { query } = useGameScreenshots(id);
	const [num, setnum] = useState(0);
        const [direction, setDirection] = useState(0); // -1 for left, 1 for right

	const handleImageChange = (newIndex: number) => {
		if (newIndex !== num) {
			setDirection(newIndex > num ? 1 : -1);
			setnum(newIndex);
		}
	};

	if (query.isLoading) return <div>Loading screenshots...</div>;
	if (query.error) return <div>Error loading screenshots</div>;
	if (!query.data?.results || query.data.results.length === 0)
		return <div>No screenshots available</div>;

	const screenshot = query.data.results;
	const maxPic = screenshot.length - 1;

	return (
		<>
			<div className="relative mx-20 aspect-auto w-4xl group">
				<div className="w-full h-96 rounded-2xl overflow-hidden">
					<div 
						className="flex transition-transform duration-500 ease-in-out h-full"
						style={{ 
							transform: `translateX(-${num * 100}%)`,
						}}
					>
						{screenshot.map((image, index) => (
							<img
								key={image.id || index}
								className="w-full h-full object-cover flex-shrink-0"
								src={image.image}
								alt={`Screenshot ${index + 1}`}
							/>
						))}
					</div>
				</div>
				{num > 0 && (
					<button
						className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full group-hover:translate-x-4 text-3xl text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-500 ease-out opacity-0 group-hover:opacity-90"
						onClick={() => handleImageChange(num - 1)}
					>
						<MdOutlineKeyboardArrowLeft />
					</button>
				)}
				{num < maxPic && (
					<button
						className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full group-hover:-translate-x-4 text-3xl text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-500 ease-out opacity-0 group-hover:opacity-90"
						onClick={() => handleImageChange(num + 1)}
					>
						<MdOutlineKeyboardArrowRight />
					</button>
				)}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
					<span key={num} className="inline-block transition-all duration-300 ease-in-out">
						{num + 1} / {screenshot.length}
					</span>
				</div>
			</div>

			<div className="flex w-full justify-between py-2 bg-gray-500 rounded-4xl">
				<div className="flex align-middle items-center">
					{num > 0 && (
						<button
							className="text-4xl mr-10 rounded-4xl h-auto py-0 bg-blue-600 hover:bg-blue-700 transition-colors"
							onClick={() => handleImageChange(num - 1)}
						>
							<MdOutlineKeyboardArrowLeft />
						</button>
					)}
				</div>
				<div className="grid grid-cols-6 justify-center overflow-hidden">
					{screenshot.map((screenshot, index) => (
						<img 
							key={screenshot.id || index}
							className={`px-1 rounded-2xl cursor-pointer hover:scale-105 transition-transform ${
								index === num ? 'ring-2 ring-blue-500' : ''
							}`}
							src={screenshot.image} 
							alt={`Thumbnail ${index + 1}`}
							onClick={() => handleImageChange(index)}
						/>
					))}
				</div>
				<div className="flex align-middle items-center">
					{num < maxPic && (
						<button
							className="text-4xl ml-10 rounded-4xl bg-red-600 hover:bg-red-700 transition-colors"
							onClick={() => handleImageChange(num + 1)}
						>
							<MdOutlineKeyboardArrowRight />
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default GameScreenshots;