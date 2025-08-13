import usePlatform from "./usePlatfom"

const usePlatforms = (id?:number) => {
    
  const {data:platforms}=usePlatform()
  return platforms?.find((p)=>p.id ===id)
   
}
export default usePlatforms