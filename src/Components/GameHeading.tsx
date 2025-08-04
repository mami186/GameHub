import type { GameQuery } from "../App"

interface Props{
    gmaeQuery :GameQuery
}


const GameHeading = ({gmaeQuery}:Props) => {
    const heading = `${gmaeQuery.platform?.name || ''} ${gmaeQuery.genre?.name || ''} Games`
  return (
    <h1 className="text-6xl font-bold p-2" >{heading}</h1>
  )
}

export default GameHeading