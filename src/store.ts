import { create } from "zustand";

interface GameQuery {
	genreId?: number ;
	platformId?: number;
	searchText?: string;
}
interface Store{
    menueBar:boolean;
    setmenueBar:()=>void;
	gameQuery:GameQuery;
    setGenreId:(genreId:number)=>void;
    setPlatformId:(platformId:number)=>void;
    setSearchText:(searchText:string)=>void;
}


const useStore =create<Store>(set=>({
    menueBar:false,
    setmenueBar:()=>set((store)=>({menueBar:!store.menueBar})),
    gameQuery:{},
    setGenreId:(genreId:number)=>set((store)=>({gameQuery:{...store.gameQuery, genreId}})),
    setPlatformId:(platformId:number)=>set((store)=>({gameQuery:{...store.gameQuery, platformId}})),
    setSearchText:(searchText)=>set(()=>({gameQuery:{searchText}})),
}))

export default useStore;