import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "routing/auth";

function useLogin() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const auth = useAuth();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // function to validate the form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (inputData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(inputData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (inputData.password.length < 6) {
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
      auth.login();
      navigate("/dashboard", { replace: true });

      setInputData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return {
    errors,
    handleInputChange,
    handleSubmit,
    inputData,
    setInputData,
    auth,
  };
}

export default useLogin;
