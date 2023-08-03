import { useEffect, useState } from "react";

function useMainContent() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      setStoredData(JSON.parse(storedFormData));
    }
  }, []);

  const handleDelete = (id) => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    const updatedItems = storedFormData.filter((obj) => obj.id !== id);

    localStorage.setItem("formData", JSON.stringify(updatedItems));

    setStoredData(updatedItems);
  };

  return [storedData, handleDelete];
}

export default useMainContent;
