import React, { useEffect, useState } from "react";

function MainContent() {
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

  return (
    <div>
      <div className=" mx-auto w-75 mt-4">
        <div className="row ">
          <div className="col-5 text-left">
            <div>
              {storedData.map((item) => (
                <div key={item.heading}>
                  <img src={item.image} alt="Images" style={{ width: "80%" }} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-7 p-1 text-start">
            {storedData.map((item) => (
              <div key={item.heading}>
                <div className="row">
                  <div className="">
                    {/* <p>Data entry {item.id}</p> */}
                    <h2>{item.heading}</h2>
                    <div className="my-4 text-start d-flex">
                      <div className="mx-3">
                        <strong>{item.paraName}</strong>
                      </div>
                      <div className="text-muted">{item.paraDate}</div>
                    </div>
                    <h6>{item.content}</h6>
                  </div>
                  <div className="">
                    <button type="button" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
