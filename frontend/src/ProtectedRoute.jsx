import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Loading from "./components/Loading";
const ProtectedRoute = () => {
    const { loading, IsAuthenticated } = useAuth();
    
    if (loading) {
        return <Loading />
    }
    if (!IsAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return (
       <Outlet />
    )
}

export default ProtectedRoute