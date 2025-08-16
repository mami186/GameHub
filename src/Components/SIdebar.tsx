import MediaResize from "./MediaResize";
import useGenre from "../hooks/useGenre";
import useStore from "../store";


const SIdebar = ( ) => {
	const { data, error, isLoading } = useGenre();

	const genreId =useStore(s=>s.gameQuery.genreId)
	const setGenreId =useStore(s=>s.setGenreId)
	return (
		<>
			<ul className=" shadow-md mr-3 h-auto pb-1 pl-4 pr-9 rounded-2xl">
				<h1 className="text-2xl text-left font-bold ">Genres</h1>
				{error && <p>{error}</p>}
				{isLoading && (
					<div className="w-6 h-6 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
				)}
				<div>
					{data?.map((genra) => (
						<li key={genra.id} className="flex items-center gap-2 my-2 pr-2">
							<img
								className=" w-8 h-8 rounded-sm"
								src={MediaResize(genra.image_background)}
								alt="Image"
							/>{" "}
							<button
								onClick={() => setGenreId(genra.id)}
								className={`text-sm hover:underline text-left hover:text-purple-800 ${genra.id === genreId? ' font-bold underline':'font-normal'}`}
							>
								{genra.name}
							</button>
						</li>
					))}
				</div>
			</ul>
		</>
	);
};

export default SIdebar;
