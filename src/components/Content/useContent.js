/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "utils/Storage";

function useContent() {
  const [storedData, setStoredData] = useState([]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const storedFormData = JSON.parse(localStorage.getItem("inputData"));

    const updatedItems = storedFormData.filter((obj) => obj.id !== id);

    localStorage.setItem("inputData", JSON.stringify(updatedItems));

    setStoredData(updatedItems);
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/edit/${id}`);
  };

  useEffect(() => {
    const storedFormData = getLocalStorage("inputData");

    if (localStorage.getItem("inputData") !== null) {
      setStoredData(storedFormData);
    } else if (localStorage.getItem("inputData").length === 0) {
      navigate("/dashboard/noDataAdded");
    else {
      navigate("/dashboard/noDataAdded");
    }
  }, []);

  return [storedData, handleDelete, handleEdit];
}

export default useContent;
