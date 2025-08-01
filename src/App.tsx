import Navbar from "./Components/Navbar"
import MainContent from "./Components/MainContent"
import SIdebar from "./Components/SIdebar"
import Rawg from "./Components/Rawg"
const App = () => {
  return (<>
    <div className=" ">
      <Navbar />
      <div className="flex flex-auto">
      <div className=" hidden sm:hidden md:block lg:block w-43">
        <SIdebar />
      </div>

      <div className="">
        <MainContent />
      </div>
      </div>
    </div>
    <Rawg/>
    </>
  )
}

export default App