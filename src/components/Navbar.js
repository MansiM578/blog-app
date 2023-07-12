/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <div className="bg-light">
        <nav className="navbar navbar-light bg-light mx-auto w-75">
          <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <form className="d-flex">
              <a className="nav-link active mx-3">Create new post</a>
              <a className="nav-link active">LogIn</a>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
