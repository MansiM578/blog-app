import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../routing/auth";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const auth = useAuth();

  const navigate = useNavigate();

  // function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // function to validate the form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // login actions
      console.log("Form is valid. Submitting data:", formData);
      auth.login();
      navigate("/dashboard", { replace: true });

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } else {
      console.log("Form has errors. Please fix them.");
    }
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
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          {errors.name && <p className="error danger">{errors.name}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
