import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./auth";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.isLoggedIn) {
    return <Navigate to="/" />;
  }

  console.log(location.pathname);
  return children;
}

export default RequireAuth;
RequireAuth.propTypes = {
  children: PropTypes.func.isRequired,
};
