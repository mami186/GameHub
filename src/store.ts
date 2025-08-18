import { create } from "zustand";

interface GameQuery {
	genreId?: number ;
	platformId?: number;
	searchText?: string;
}
interface Store{
    menueBar:boolean;
    gameQuery:GameQuery;
    setmenueBar:()=>void;
    setGenreId:(genreId:number)=>void;
    setPlatformId:(platformId:number | undefined)=>void;
    setSearchText:(searchText:string)=>void;
}


const useStore =create<Store>(set=>({
    menueBar:false,
    setmenueBar:()=>set((store)=>({menueBar:!store.menueBar})),
    gameQuery:{},
    setGenreId:(genreId:number)=>set((store)=>({gameQuery:{...store.gameQuery, genreId}})),
    setPlatformId:(platformId:number | undefined)=>set((store)=>({gameQuery:{...store.gameQuery, platformId}})),
    setSearchText:(searchText:string)=>set((store)=>({gameQuery:{...store.gameQuery,  searchText}})),
}))

export default useStore;