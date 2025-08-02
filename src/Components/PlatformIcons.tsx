import type { IconType } from "react-icons";
import type { Platform } from "../hooks/useGames";
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
				const IconComponent = iconMap[platform.slug]
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
