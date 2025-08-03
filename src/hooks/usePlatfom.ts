import useData from "./userData"
import { type Platform } from "./useGames"

const usePlatform =()=>useData<Platform>('/platforms/lists/parents')

export default usePlatform