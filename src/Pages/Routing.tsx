import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "./HomePage";
import GameDetail from "./GameDetail";
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
			{ path: "games/:id", element: <GameDetail /> },
		],
	},
]);

export default routing;
