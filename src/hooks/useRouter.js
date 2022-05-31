import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { AdminRoute } from "../hoc/AdminRoute";
import { WithoutAuth } from "../hoc/WithoutAuth";
import { UserRoute } from "../hoc/UserRoute";
import { LoginPage, AdminPage, UserPage, OrderWorkplace } from "../pages";

export const useRouter = () => {
  const isAuth = useSelector((state) => state.redux.isAuth);
  const isRole = useSelector((state) => state.redux.isRole);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <WithoutAuth isAuth={isAuth}>
            <LoginPage />
          </WithoutAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminRoute isAuth={isAuth} isRole={isRole}>
            <AdminPage />
          </AdminRoute>
        }
      />
      <Route
        path="/user"
        element={
          <UserRoute isAuth={isAuth} isRole={isRole}>
            <UserPage />
          </UserRoute>
        }
      />
      <Route
        path="/order-workplace"
        element={
          <UserRoute isAuth={isAuth} isRole={isRole}>
            <OrderWorkplace />
          </UserRoute>
        }
      />
    </Routes>
  );
};
