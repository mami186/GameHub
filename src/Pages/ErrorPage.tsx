import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<>
      <Navbar/>
			<div className="p-15 h-screen">
				<h1 className="text-7xl font-bold" >Oops....</h1>
				<div className="text-3xl mt-3  ">
					{isRouteErrorResponse(error)
						? "ERROR ... invalid page"
						: "ERRO ...something went wrong"}
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
