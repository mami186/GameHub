import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"


interface screenshots{
    id:number
    image:string }

const useGameScreenshots = (id:number) => {
    const apiClient = new ApiClient<screenshots>(`/games/${id}/screenshots`)
    const query =useQuery({
        queryKey: ['screenshots'],
        queryFn: () => apiClient.getAll(),
        staleTime: 24*60*60*1000,
            
        
    })
  return {query}
}

export default useGameScreenshots