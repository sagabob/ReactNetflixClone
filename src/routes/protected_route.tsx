import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import * as ROUTES from "../constants/routes";
import { ProtectRouteProps } from "./types";

export function ProtectedRoute({ children }: ProtectRouteProps) {
  const { user } = AuthContext.useContext();
  if (!user) return <Navigate to={ROUTES.HOME} replace />;
  return children ? <>{children}</> : <Outlet />;
}
