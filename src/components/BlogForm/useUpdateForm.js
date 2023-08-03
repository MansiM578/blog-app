import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { setLocalStorage } from "utils/Storage";
import moment from "moment";

function useUpdateForm() {
  const userId = uuidv4();
  const { id } = useParams();

  const [updatedFormData, setUpdatedFormData] = useState({});

  const navigate = useNavigate();
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

  const handleChangeA = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // function to validate the form data
  const validateFormA = () => {
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

  const handleSubmitA = (e) => {
    e.preventDefault();
    if (validateFormA()) {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedFormData({ ...updatedFormData, [name]: value });
  };

  useEffect(() => {
    const initialFormData = JSON.parse(localStorage.getItem("formData"));
    if (id) {
      const updatedItems = initialFormData.filter((obj) => obj.id === id)[0];
      setUpdatedFormData(updatedItems);
    }
  }, [id]);

  const handleImageUpload = (image) => {
    const updatedData = { ...updatedFormData, image };
    setUpdatedFormData(updatedData);
  };

  const handleImageRemove = () => {
    const updatedData = { ...updatedFormData, image: "" };
    setUpdatedFormData(updatedData);
  };

  // function to validate the form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // moment(formData.paraDate).format("YYYY-MM-DD");
    console.log(updatedFormData.paraDate);
    const isValidDate = moment(
      updatedFormData.paraDate,
      "YYYY-MM-DD",
      true
    ).isValid();

    if (updatedFormData.heading.trim() === "") {
      newErrors.heading = "Heading is required";
      isValid = false;
    }
    if (updatedFormData.paraName.trim() === "") {
      newErrors.paraName = "Name is required";
      isValid = false;
    }
    if (updatedFormData.content.trim() === "") {
      newErrors.content = "Content of the article is required";
      isValid = false;
    }

    if (updatedFormData.paraDate.trim() === "") {
      newErrors.paraDate = "Date is required";
      isValid = false;
    } else if (!isValidDate) {
      newErrors.paraDate = "Invalid Date Format";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const initialFormData = JSON.parse(localStorage.getItem("formData"));
      const dataIndex = initialFormData.findIndex(
        (item) => item.id === updatedFormData.id
      );
      if (dataIndex !== -1) {
        // Create a copy of the data array
        const newData = [...initialFormData];
        newData[dataIndex] = {
          ...newData[dataIndex],
          heading: updatedFormData.heading,
          paraDate: updatedFormData.paraDate,
          paraName: updatedFormData.paraName,
          content: updatedFormData.content,
          image: updatedFormData.image,
        };

        setLocalStorage("formData", newData);

        navigate("/dashboard");
      }
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return {
    formData,
    errors,
    handleChangeA,
    handleSubmitA,
    id,
    handleChange,
    handleImageUpload,
    handleImageRemove,
    handleSave,
    handleCancel,
    updatedFormData,
  };
}

export default useUpdateForm;
