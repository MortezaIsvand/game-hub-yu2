import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error)
        ? "This page dosn't exist"
        : "An unexpected error occured"}
    </div>
  );
};
export default ErrorPage;
