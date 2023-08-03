import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useContent() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      setStoredData(JSON.parse(storedFormData));
    }
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    const updatedItems = storedFormData.filter((obj) => obj.id !== id);

    localStorage.setItem("formData", JSON.stringify(updatedItems));

    setStoredData(updatedItems);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return [storedData, handleDelete, handleEdit];
}

export default useContent;
