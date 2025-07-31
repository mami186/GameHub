import Navbar from "./Components/Navbar"
import MainContent from "./Components/MainContent"
import SIdebar from "./Components/SIdebar"
import Rawg from "./Components/Rawg"
const App = () => {
  return (<>
    <div className="w-full">
      <Navbar />
      <div className="flex my-3 px-1 h-auto">
      <SIdebar/>

      <div className=" flex flex-wrap">
        <MainContent />
      </div>
      </div>
    </div>
    <Rawg/>
    </>
  )
}

export default App