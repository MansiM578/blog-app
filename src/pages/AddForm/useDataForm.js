import moment from "moment/moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

function useDataForm() {
  const userId = uuidv4();
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

    // moment(formData.paraDate).format("YYYY-MM-DD");
    console.log(formData.paraDate);
    const isValidDate = moment(formData.paraDate, "YYYY-MM-DD", true).isValid();

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
    } else if (!isValidDate) {
      newErrors.paraDate = "Invalid Date Format";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  // const formatDateForInput = (date) => {
  //   if(date)
  //   return moment(formData.paraDate).format('YYYY-MM-DD'); // Customize the format as per your requirement
  // };

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

      formDataArray.push({ ...formData, id: userId });

      localStorage.setItem("formData", JSON.stringify(formDataArray));

      setFormData({
        heading: "",
        paraName: "",
        paraDate: "",
        content: "",
        image: "",
      });

      navigate("/dashboard");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return [
    userId,
    formData,
    errors,
    handleChange,
    handleImageUpload,
    handleSubmit,
    handleCancel,
    // formatDateForInput,
  ];
}
export default useDataForm;
