import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { setLocalStorage } from "utils/Storage";
import moment from "moment";

function useUpdateForm() {
  const userId = uuidv4();
  const { id } = useParams();

  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
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
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // function to validate the form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    const isValidDate = moment(
      inputData.paraDate,
      "YYYY-MM-DD",
      true
    ).isValid();

    if (inputData.heading.trim() === "") {
      newErrors.heading = "Heading is required";
      isValid = false;
    }
    if (inputData.paraName.trim() === "") {
      newErrors.paraName = "Name is required";
      isValid = false;
    }
    if (inputData.content.trim() === "") {
      newErrors.content = "Content of the article is required";
      isValid = false;
    }

    if (inputData.paraDate.trim() === "") {
      newErrors.paraDate = "Date is required";
      isValid = false;
    } else if (!isValidDate) {
      newErrors.paraDate = "Invalid Date Format";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmitA = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingData = localStorage.getItem("inputData");
      let formDataArray = [];

      if (existingData) {
        formDataArray = JSON.parse(existingData);
      }

      formDataArray.push({ ...inputData, id: userId });

      localStorage.setItem("inputData", JSON.stringify(formDataArray));

      setInputData({
        heading: "",
        paraName: "",
        paraDate: "",
        content: "",
        image: "",
      });

      navigate("/dashboard");
    }
  };

  const handleImageUpload = (image) => {
    const updatedData = { ...inputData, image };
    setInputData(updatedData);
  };

  const handleImageRemove = () => {
    const updatedData = { ...inputData, image: "" };
    setInputData(updatedData);
  };
  useEffect(() => {
    const initialFormData = JSON.parse(localStorage.getItem("inputData"));
    if (id) {
      const updatedItems = initialFormData.filter((obj) => obj.id === id)[0];
      setInputData(updatedItems);
    }
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const initialFormData = JSON.parse(localStorage.getItem("inputData"));
      const dataIndex = initialFormData.findIndex(
        (item) => item.id === inputData.id
      );
      if (dataIndex !== -1) {
        // Create a copy of the data array
        const newData = [...initialFormData];
        newData[dataIndex] = {
          ...newData[dataIndex],
          heading: inputData.heading,
          paraDate: inputData.paraDate,
          paraName: inputData.paraName,
          content: inputData.content,
          image: inputData.image,
        };

        setLocalStorage("inputData", newData);

        navigate("/dashboard");
      }
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return {
    inputData,
    errors,
    handleSubmitA,
    id,
    handleChange,
    handleImageUpload,
    handleImageRemove,
    handleSave,
    handleCancel,
  };
}

export default useUpdateForm;
