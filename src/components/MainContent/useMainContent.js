import { useEffect, useState } from "react";

function useMainContent() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("inputData");

    if (storedFormData) {
      setStoredData(JSON.parse(storedFormData));
    }
  }, []);

  const handleDelete = (id) => {
    const storedFormData = JSON.parse(localStorage.getItem("inputData"));

    const updatedItems = storedFormData.filter((obj) => obj.id !== id);

    localStorage.setItem("inputData", JSON.stringify(updatedItems));

    setStoredData(updatedItems);
  };

  return [storedData, handleDelete];
}

export default useMainContent;
