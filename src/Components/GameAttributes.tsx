import type { Game } from "../hooks/useGames"
import DefinitionItems from "./DefinitionItems"

interface Props{
    game?:Game
}

const GameAttributes = ({game}:Props) => {
  return (
<div className="grid grid-cols-2 gap-4 mt-5 px-40 ">
				<div>
					<DefinitionItems term="Platforms">
						{game?.parent_platforms.map(({ platform }) => (
							<p className="px-5" key={platform.id}>
								{platform.name}
							</p>
						))}
					</DefinitionItems>
				</div>
				<div>
					<DefinitionItems term="Metacritic">
						<p className="px-5">{game?.rating}</p>
					</DefinitionItems>
				</div>
				<div>
					<DefinitionItems term="Genres">
						{game?.genres.map((genre) => (
							<p className="px-5" key={genre.id}>
								{genre.name}
							</p>
						))}
					</DefinitionItems>
				</div>
				<div>
					<DefinitionItems term="Publishers">
						{game?.publishers.map((publisher) => (
							<p className="px-5" key={publisher.id}>
								{publisher.name}
							</p>
						))}
					</DefinitionItems>
				</div>
			</div>  )
}

export default GameAttributes