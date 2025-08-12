import type { IconType } from "react-icons";
import {
	FaPlaystation,
	FaXbox,
	FaWindows,
	FaApple,
	FaAndroid,
	FaLinux,
	FaGlobe,
} from "react-icons/fa";
import{BsNintendoSwitch} from "react-icons/bs";
import type { Platform } from "../hooks/usePlatfom";
interface Props {
	platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		macos: FaApple,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: FaApple,
		web: FaGlobe,
		nintendo: BsNintendoSwitch,
	};

	return (
		<div className="flex gap-1">
			{platforms.map((platform) => {
				const IconComponent = iconMap[platform.slug] || FaGlobe
				return (
					<IconComponent
						key={platform.id }
						title={platform.name}
						className="text-gray-600 text-lg"
					/>
				);
			})}
		</div>
	);
};

export default PlatformIcons;
