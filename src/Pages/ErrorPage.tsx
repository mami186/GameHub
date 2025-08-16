import { isRouteErrorResponse, useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error =useRouteError()
console.log(error)
    return (
    <div>{isRouteErrorResponse(error)?'invalid page':'something went wrong'   }</div>
  )
}

export default ErrorPage