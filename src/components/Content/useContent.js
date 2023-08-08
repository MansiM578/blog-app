/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "utils/Storage";

function useContent() {
  const [storedData, setStoredData] = useState([]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const storedFormData = getLocalStorage("inputData");

    const updatedItems = storedFormData.filter((obj) => obj.id !== id);

    setLocalStorage("inputData", updatedItems);
    setStoredData(updatedItems);

    if (updatedItems.length === 0) {
      navigate("/dashboard/noDataAdded", { replace: true });
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/edit/${id}`);
  };

  useEffect(() => {
    const storedFormData = getLocalStorage("inputData");

    if (storedFormData === null || storedFormData.length === 0) {
      navigate("/dashboard/noDataAdded", { replace: true });
    } else {
      setStoredData(storedFormData);
    }
  }, []);

  return [storedData, handleDelete, handleEdit];
}

export default useContent;
