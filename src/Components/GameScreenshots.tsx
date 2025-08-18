import useGameScreenshots from '../hooks/useGameScreenshots'
interface Props{
    id:number
}

const GameScreenshots = ({id}:Props) => {
    const {query}=useGameScreenshots(id)
    console.log(query.data?.results[0].image)
    const screenshot =query.data?.results
  return (
    <div className='grid grid-cols-3 rounded-2xl overflow-hidden'>
        {screenshot?.map((screenshot)=>
        <img className='' src={screenshot.image} alt="" />
        )}
    </div>
  )
}

export default GameScreenshots