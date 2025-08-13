import type { GameQuery } from "../App"
import useGenres from "../hooks/useGeneres"
import useGenre from "../hooks/useGenre"
import usePlatforms from "../hooks/usePlatforms"

interface Props{
    gmaeQuery :GameQuery
}


const GameHeading = ({gmaeQuery}:Props) => {
  const genre = useGenres(gmaeQuery.genreId)

  const platform = usePlatforms(gmaeQuery.platformId)
  
    const heading = `${platform?.name|| ''} ${genre?.name || ''} Games`
  return (
    <h1 className="text-6xl font-bold p-2" >{heading}</h1>
  )
}

export default GameHeading