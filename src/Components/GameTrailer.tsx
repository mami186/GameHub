import useGameTrailer from "../hooks/useGameTrailer";
interface Props {
	id: number;
}
const GameTrailer = ({ id }: Props) => {
	const { query } = useGameTrailer(id);

	if (query.isLoading) {
		return <div>Loading trailer...</div>;
	}

	if (query.error) {
		return <div>Error loading trailer</div>;
	}

	if (!query.data?.results || query.data.results.length === 0) {
		return <div>No trailer available</div>;
	}

	const trailer = query.data.results[0];

	return (
		<><div className="aspect-video overflow-hidden h-auto w-max-32 rounded-2xl">
			<video
				src={trailer.data[480]}
				poster={trailer.preview}
				controls

        ></video>
        </div>
		</>
	);
};

export default GameTrailer;
