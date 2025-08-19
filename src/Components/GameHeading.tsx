import useGenres from "../hooks/useGeneres";
import usePlatforms from "../hooks/usePlatforms";
import useStore from "../store";

const GameHeading = () => {
	const genreId = useStore((s) => s.gameQuery.genreId);
	const platformId = useStore((s) => s.gameQuery.platformId);

	const genre = useGenres(genreId);

	const platform = usePlatforms(platformId);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
	return <h1 className="text-6xl font-bold p-2">{heading}</h1>;
};

export default GameHeading;
