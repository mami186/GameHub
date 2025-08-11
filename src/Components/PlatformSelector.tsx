import type { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatfom";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
	const { data, error } = usePlatform();


	return (
    <> {error && <p>{error}</p>}
<select className="p-2 border mx-2 rounded-2xl text-sm bg-white px-2 "
  onChange={(e) => {
    const selectedSlug = e.target.value;
    const selectedPlatform = data?.find((p: Platform) => p.slug === selectedSlug);
    if (selectedPlatform) onSelectPlatform(selectedPlatform);
  }}
>
  <option >Platform</option>
  {data?.map((platform: Platform) => (
    <option  key={platform.id} value={platform.slug}>
      {platform.name}
    </option>
  ))}
</select>
</>
	);
};

export default PlatformSelector;
