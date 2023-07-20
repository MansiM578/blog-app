/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../utils/auth";

function Navbar() {
  // const username = localStorage.getItem("username");

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <div className="bg-light">
        <nav className="navbar navbar-light bg-light mx-auto w-75">
          <div className="container-fluid">
            {auth.user ? (
              <NavLink to="/dashboard" className="navbar-brand">
                Navbar
              </NavLink>
            ) : (
              <NavLink to="/" className="navbar-brand">
                Navbar
              </NavLink>
            )}
            <form className="d-flex">
              <NavLink to="addForm" className="nav-link active mx-3">
                Create a New Post
              </NavLink>
              {!auth.user ? (
                <NavLink to="/" className="nav-link  active">
                  logIn
                </NavLink>
              ) : (
                <>
                  <NavLink>{auth.user}</NavLink>
                  <button type="button" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
