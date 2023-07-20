import React, { useState } from "react";
// import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../utils/auth";

function Login() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const auth = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("username", userName);
    sessionStorage.setItem("email", email);
    // if (userName && email) {
    //   navigate("/dashboard");
    // }

    auth.login(userName, email);
    navigate("/dashboard", { replace: true });
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
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
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
              name="email"
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

// Login.propTypes = {
//   setUser: PropTypes.func.isRequired,
// };

export default Login;
