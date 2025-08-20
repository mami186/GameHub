import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import useGameScreenshots from "../hooks/useGameScreenshots";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
	id: number;
}


const GameScreenshots = ({ id }: Props) => {
  const { query } = useGameScreenshots(id);
  const { queryt } = useGameTrailer(id);

  const [num, setnum] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const trailer = queryt?.data?.results || [];
  const screenshot = query?.data?.results || [];
  const maxPic = screenshot.length - 1;

  const handleImageChange = (newIndex: number) => {
	if (newIndex !== num && newIndex >= 0 && newIndex <= maxPic) {
	  setDirection(newIndex > num ? 1 : -1);
	  setnum(newIndex);
	}
  };

  if (query.isLoading) return <div>Loading screenshots...</div>;
  if (query.error) return <div>Error loading screenshots</div>;
  if (screenshot.length === 0) return <div>No screenshots available</div>;

  return (
	<div className="w-full">
	  <div className="relative w-full group">
		<div className="w-full aspect-video rounded-2xl overflow-hidden">
		  <div
			className="flex transition-transform duration-500 ease-in-out h-full"
			style={{
			  transform: `translateX(-${num * 100}%)`,
			}}
		  >
			{screenshot.map((image, index) => (
			  <div
				key={image.id || index}
				className="w-full h-full flex-shrink-0"
			  >
				<img
				  className="w-full h-full object-contain"
				  src={image.image}
				  alt={`Screenshot ${index + 1}`}
				/>
			  </div>
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
		  <span
			key={num}
			className="inline-block transition-all duration-300 ease-in-out"
		  >
			{num + 1} / {screenshot.length}
		  </span>
		</div>
	  </div>

	  <div className="w-full flex items-center py-2   rounded-2xl mt-2">
		<div className="flex items-center">
		  <button
			className="text-4xl mx-4 rounded-full h-auto py-2 px-2 bg-gray-500 transition-colors"
			onClick={() => handleImageChange(num - 1)}
			disabled={num === 0}
		  >
			<MdOutlineKeyboardArrowLeft />
		  </button>
		</div>
		<div className="flex-1  ">
		  <div className="flex justify-around px-2">
			{screenshot.map((screenshot, index) => (
			  <img
				key={screenshot.id || index}
				className={`h-16 w-24 object-cover rounded-lg cursor-pointer opacity-70 hover:scale-105 transition-transform flex-shrink-0 ${
				  index === num ? "ring-2 ring-gray-300 opacity-100" : ""
				}`}
				src={screenshot.image}
				alt={`Thumbnail ${index + 1}`}
				onClick={() => handleImageChange(index)}
			  />
			))}
		  </div>
		</div>
		<div className="flex items-center">
		  <button
			className="text-4xl mx-4 rounded-full bg-gray-500 py-2 px-2 transition-colors"
			onClick={() => handleImageChange(num + 1)}
			disabled={num === maxPic}
		  >
			<MdOutlineKeyboardArrowRight />
		  </button>
		</div>
	  </div>
	</div>
  );
};

export default GameScreenshots;
