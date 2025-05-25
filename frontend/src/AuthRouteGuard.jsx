import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Loading from "./components/Loading";

const AuthRouteGuard = ({ requireAuth, redirectTo }) => {
  const { loading, IsAuthenticated } = useAuth();

  if (loading) return <Loading />;

  const isAllowed = requireAuth ? IsAuthenticated : !IsAuthenticated;

  return isAllowed ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default AuthRouteGuard;
