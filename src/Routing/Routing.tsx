import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../Pages/HomePage";
import GameDetail from "../Pages/GameDetail";
import ErrorPage from "./ErrorPage";

const routing = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement:<ErrorPage/>,
		children: [
			{
				index:true,
				element: <App />,
			},
			{ path: "games", element: <GameDetail /> },
		],
	},
]);

export default routing;
