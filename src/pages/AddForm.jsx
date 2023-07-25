import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddForm() {
  const [formData, setFormData] = useState({
    heading: "",
    paraName: "",
    paraDate: "",
    content: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    heading: "",
    paraName: "",
    paraDate: "",
    content: "",
  });

  const handleChange = (event) => {
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

    if (formData.heading.trim() === "") {
      newErrors.heading = "Heading is required";
      isValid = false;
    }
    if (formData.paraName.trim() === "") {
      newErrors.paraName = "Name is required";
      isValid = false;
    }
    if (formData.content.trim() === "") {
      newErrors.content = "Content of the article is required";
      isValid = false;
    }

    if (formData.paraDate.trim() === "") {
      newErrors.paraDate = "Date is required";
      isValid = false;
    } else {
      const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      if (!dateRegex.test(formData.date)) {
        newErrors.paraDate = "Invalid date format (DD-MM-YYYY)";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleImageUpload = (image) => {
    const updatedData = { ...formData, image };
    setFormData(updatedData);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingData = localStorage.getItem("formData");
      let formDataArray = [];

      if (existingData) {
        formDataArray = JSON.parse(existingData);
      }

      formDataArray.push({ ...formData, id: formData.heading });

      localStorage.setItem("formData", JSON.stringify(formDataArray));

      setFormData({
        heading: "",
        paraName: "",
        paraDate: "",
        content: "",
        image: "",
      });

      navigate("/dashboard");
    } else {
      console.log("Form has errors. Please Fix then");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-75 mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="form-control my-3 w-100"
            placeholder="Enter the Heading of the Topic"
          />
          {errors.heading && <p className="error danger">{errors.heading}</p>}
          <input
            type="text"
            id="paraName"
            name="paraName"
            value={formData.paraName}
            onChange={handleChange}
            className="form-control  w-100"
            placeholder="Enter your Name"
          />
          {errors.paraName && <p className="error danger">{errors.paraName}</p>}
          <input
            type="text"
            id="paraData"
            name="paraDate"
            value={formData.paraDate}
            onChange={handleChange}
            className="form-control my-3 w-100"
            placeholder="Enter the Current Date"
          />
          {errors.paraDate && <p className="error danger">{errors.paraDate}</p>}
          <textarea
            type="text"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="form-control border mb-3 w-100"
            rows="12"
            placeholder="Enter the details about the topic"
            style={{ resize: "none" }}
          />
          {errors.content && <p className="error danger">{errors.content}</p>}
          <input
            type="file"
            // name="image"
            // value={formData.image}
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (event) => {
                const image = event.target.result;
                handleImageUpload(image);
              };
              reader.readAsDataURL(file);
            }}
          />
          <button type="submit" className="btn btn-primary">
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
