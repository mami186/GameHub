import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"

interface GameTrailer{
    id:number
    name:string
    preview: string
    data:{
        480:string
        max:string
    }

}
const useGameTrailer = (id:number) => {
    const apiClient =new ApiClient<GameTrailer>(`/games/${id}/movies`)


    const query =useQuery({
        queryKey:['Trailer',id],
        queryFn: apiClient.getAll
    })
    return {
        query: {
            data: query.data,
            error: query.error,
            isLoading: query.isLoading
        }
    }
}

export default useGameTrailer