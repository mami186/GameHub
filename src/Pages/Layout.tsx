import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Rawg from '../Components/Rawg'

const Layout = () => {
  return (<>
        <Navbar/>
        <Outlet/>
        <Rawg/>
        </>
    )
}

export default Layout