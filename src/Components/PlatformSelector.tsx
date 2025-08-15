import type { Platform } from "../hooks/usePlatfom";
import usePlatform from "../hooks/usePlatfom";
import useStore from "../store";



const PlatformSelector = () => {
	const platformId= useStore(s=>s.gameQuery.platformId);
	const setPlatformId = useStore(s=>s.setPlatformId);
	const { data, error } = usePlatform();
	return (
		<>
			{" "}
			{error && <p>{error}</p>}
			<select
				className="p-2 border mx-2 rounded-2xl text-sm bg-white px-2 "
				value={platformId}
				onChange={(e)=>setPlatformId(parseInt(e.target.value))}
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
