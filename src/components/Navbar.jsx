/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../routing/auth";

function Navbar() {
  // const username = localStorage.getItem("username");

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-light">
        <nav className="navbar navbar-light bg-light mx-auto w-75">
          <div className="container-fluid">
            {auth.isLoggedIn ? (
              <Link to="/dashboard" className="navbar-brand">
                Navbar
              </Link>
            ) : (
              <Link to="/login" className="navbar-brand">
                Navbar
              </Link>
            )}
            <div className="d-flex">
              {auth.isLoggedIn ? (
                <Link to="../addForm" className="nav-link active mx-3">
                  Create a New Post
                </Link>
              ) : (
                <Link to="/login" className="nav-link active mx-3">
                  Create a New Post
                </Link>
              )}
              {!auth.isLoggedIn ? (
                <Link to="../login" className="nav-link  active">
                  logIn
                </Link>
              ) : (
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
