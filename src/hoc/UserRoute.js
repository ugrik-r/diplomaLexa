import { Navigate } from "react-router";

export const UserRoute = ({ children, isAuth, isRole }) =>
  isAuth && isRole === "ROLE_USER" ? children : <Navigate to="/admin" />;
