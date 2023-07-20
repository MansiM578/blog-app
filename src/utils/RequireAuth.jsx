import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./auth";

function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.user && auth.email) {
    return <Navigate to="login" />;
  }
  return children;
}

export default RequireAuth;
RequireAuth.propTypes = {
  children: PropTypes.func.isRequired,
};
