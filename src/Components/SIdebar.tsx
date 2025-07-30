import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Props {
    count: number
    result:Genre []
}
interface Genre{
    id: number
    name: string 
    image_background: string
}
const SIdebar = () => {

    const [genre , setgenre]= useState<Genre[]>([])
    const [error , seterror]= useState('')
    const [isloading , setisloading]= useState(false)
useEffect(()=>{
    setisloading(true)

    apiClient.get('/genres')
    .then((res)=>{setgenre(res.data.results)})
    .catch ((err)=>{ seterror(err.message)})
    .finally(()=>{setisloading(false)})



},[])
    
  return (
    <><ul className=" shadow-md mr-5 p-6 rounded-2xl ">
        <h1 className="text-2xl text-left font-bold ">Genres</h1>
        {error && <p>{error}</p>}
        {isloading && <div>Loading...</div>}
        {genre.map((genre)=> <li key={genre.id}>{genre.name}</li>)}
    </ul>
    </>
  )
}

export default SIdebar