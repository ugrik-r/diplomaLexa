import { Navigate } from "react-router";

export const AdminRoute = ({ children, isAuth, isRole }) =>
  isAuth && isRole === "ROLE_ADMIN" ? children : <Navigate to="/user" />;
