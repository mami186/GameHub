import type { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatfom";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
	const { data, error } = usePlatform();

	if (error) return null;

	return (
<select className="p-2 border mx-2 rounded-2xl text-sm bg-white px-2 "
  onChange={(e) => {
    const selectedSlug = e.target.value;
    const selectedPlatform = data.find((p) => p.slug === selectedSlug);
    if (selectedPlatform) onSelectPlatform(selectedPlatform);
  }}
>
  <option hidden>Platform</option>
  {data.map((platform) => (
    <option  key={platform.id} value={platform.slug}>
      {platform.name}
    </option>
  ))}
</select>

	);
};

export default PlatformSelector;
