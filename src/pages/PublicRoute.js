import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

export default function PublicRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
