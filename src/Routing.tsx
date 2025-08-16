import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import App from "./Pages/HomePage";
import GameDetail from "./Pages/GameDetail";

const routing = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
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
