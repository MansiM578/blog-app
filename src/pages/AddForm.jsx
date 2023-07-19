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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (image) => {
    const updatedData = { ...formData, image };
    setFormData(updatedData);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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

    navigate("/");
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
          <input
            type="text"
            id="paraName"
            name="paraName"
            value={formData.paraName}
            onChange={handleChange}
            className="form-control  w-100"
            placeholder="Enter your Name"
          />
          <input
            type="text"
            id="paraData"
            name="paraDate"
            value={formData.paraDate}
            onChange={handleChange}
            className="form-control my-3 w-100"
            placeholder="Enter the Current Date"
          />
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
