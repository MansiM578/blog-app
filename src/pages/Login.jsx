import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const navigate = useNavigate();

  // const form =
  // const formData = new FormData(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const userName = formData.get("name");
    const userEmail = formData.get("email");

    if (userName && userEmail) {
      onLogin({ userName, userEmail });
    }
    // else {
    //   alert("please enter username and password");
    // }

    // navigate("/");
  };
  return (
    <div>
      <Navbar />
      <form className="form" onSubmit={handleSubmit}>
        <h5>Login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
            <input
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
