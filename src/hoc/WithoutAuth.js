import { Navigate } from "react-router";

export const WithoutAuth = ({ children, isAuth, isRole }) =>
  isAuth ? (
    isRole === "ROLE_ADMIN" ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/user" />
    )
  ) : (
    children
  );
