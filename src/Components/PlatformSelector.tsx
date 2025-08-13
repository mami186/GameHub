import type { Platform } from "../hooks/usePlatfom";
import usePlatform from "../hooks/usePlatfom";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
	const { data, error } = usePlatform();
	return (
		<>
			{" "}
			{error && <p>{error}</p>}
			<select
				className="p-2 border mx-2 rounded-2xl text-sm bg-white px-2 "
				onChange={(e) => {
					const selectedSlug = parseInt(e.target.value);
					const selectedPlatform = usePlatforms(selectedSlug);
					if (selectedPlatform) onSelectPlatform(selectedPlatform);
				}}
			>
				<option>Platform</option>
				{data?.map((platform: Platform) => (
					<option key={platform.id} value={platform.id}>
						{platform.name}
					</option>
				))}
			</select>
		</>
	);
};

export default PlatformSelector;
