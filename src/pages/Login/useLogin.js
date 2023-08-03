import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../routing/auth";

function useLogin() {
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    console.log(auth);

    console.log("on mount");
    return () => {
      console.log("on unmount");
    };
  }, []);

  return {
    errors,
    handleInputChange,
    handleSubmit,
    formData,
    setFormData,
    auth,
  };
}

export default useLogin;
