import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Props{
    count: number
    result:Game[]
}

interface Game{
    id: number
    name: string
    rating: number
}
const MainContent = () => {
    const [games, setgames]= useState<Game[]>([])
    const [error , seterror] = useState('')
    const [isLoading, setisLoading] = useState(false)

    useEffect(()=>{
        setisLoading(true)
        apiClient.get('/games')
        .then((res)=> setgames(res.data.results))
        .catch((err)=> seterror(err.message))
        .finally(()=>setisLoading(false))
    })
  return (
    <>{error && <p>{error}</p>}
    {isLoading && <div className="spinner-border"></div>}
    <ul>
        {games.map((game)=>(
            <li key={game.id}>{game.name}</li>
        ))}
    </ul>
    </>
  )
}

export default MainContent