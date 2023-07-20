import React, { createContext, useContext, useState } from "react";

import PropTypes from "prop-types";
// Create a context for authentication data and functions to update it in the app's components
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  const login = (userName, userEmail) => {
    setUser(userName);
    setEmail(userEmail);
  };

  const logout = () => {
    setUser(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ user, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export function useAuth() {
  return useContext(AuthContext);
}
