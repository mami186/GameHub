import Navbar from "./Components/Navbar"
import MainContent from "./Components/MainContent"
const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className=" flex flex-wrap">
      <MainContent/>
      </div>
    </div>
  )
}

export default App