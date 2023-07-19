/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div>
      <div className="bg-light">
        <nav className="navbar navbar-light bg-light mx-auto w-75">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Navbar
            </Link>
            <form className="d-flex">
              <Link to="addForm" className="nav-link active mx-3">
                Create a New Post
              </Link>
              <Link to="login" className="nav-link  active">
                LogIn
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
