import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: "client" | "vet";
}

export const ProtectedRoute = ({ children, allowedRole }: ProtectedRouteProps) => {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (role !== allowedRole) {
    return <Navigate to={role === "client" ? "/patient" : "/doctor"} replace />;
  }

  return <>{children}</>;
};