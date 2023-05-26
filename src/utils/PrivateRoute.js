import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const location = useLocation();

  return (
    currentUser 
      ? children
      : <Navigate to="/login" state={{ from: location }} />
  );
}

export default PrivateRoute;