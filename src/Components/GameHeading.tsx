import { useState } from "react"
import type { GameQuery } from "../App"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatfom"

interface Props{
    gmaeQuery :GameQuery
}


const GameHeading = ({gmaeQuery}:Props) => {
  const {data:genres}=useGenre();
  const genre = genres?.find((g)=>g.id===gmaeQuery.genreId)

  const {data:platforms}=usePlatform()
  const platform = platforms?.find((p)=>p.id ===gmaeQuery.platformId)
    const heading = `${platform?.name|| ''} ${genre?.name || ''} Games`
  return (
    <h1 className="text-6xl font-bold p-2" >{heading}</h1>
  )
}

export default GameHeading