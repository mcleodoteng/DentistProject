import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

export default function AuthRequired() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    // Redirect them to the login page if not logged in
    return <Navigate to="/login" replace />;
  }

  // If they are logged in, render the protected route
  return <Outlet />;
}
