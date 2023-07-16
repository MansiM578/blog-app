import React, { useEffect, useState } from "react";

// const data = [
//   {
//     heading: "How ChatGPT and other AI Tools can Transform Our World",
//     paraName: "Test",
//     paraDate: "2023-01-07",
//     content: "Have you Heard about",
//   },
//   {
//     heading: "How ChatGPT and other AI Tools can Transform Our World",
//     paraName: "Test",
//     paraDate: "2023-01-07",
//     content: "Have you Heard about",
//   },
//   {
//     heading: "How ChatGPT and other AI Tools can Transform Our World",
//     paraName: "Test",
//     paraDate: "2023-01-07",
//     content: "Have you Heard about",
//   },
// ];

function MainContent() {
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      setStoredData(JSON.parse(storedFormData));
    }
  }, []);

  // Add a unique identifier to each data object
  const dataWithIds = Object.keys(storedData).map((key, index) => ({
    id: index + 1,
    ...storedData[key],
  }));

  // const displayData = data.map((datas) => (
  //   <div>
  //     <h2>{datas.heading}</h2>
  //     <p className="my-4 d-flex">
  //       <div className="mx-3">
  //         <strong>{datas.paraName}</strong>
  //       </div>
  //       <div className="text-muted">{datas.paraDate}</div>
  //     </p>
  //     <h6>{datas.content}</h6>
  //   </div>
  // ));

  return (
    <div>
      <div className=" mx-auto w-75 mt-4">
        <div className="row ">
          <div className="col-5 text-left">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="image1"
              className="w-75 p-3"
            />
          </div>

          <div className="col-7 p-1 text-start">
            {dataWithIds.map((item) => (
              <div key={item.id}>
                <div className="row">
                  <div className="">
                    <p>Data entry {item.id}</p>
                    <h2>{item.heading}</h2>
                    <p className="my-4 text-start d-flex">
                      <div className="mx-3">
                        <strong>{item.paraName}</strong>
                      </div>
                      <div className="text-muted">{item.paraDate}</div>
                    </p>
                    <h6>{item.content}</h6>
                  </div>
                  <div className="">
                    <button type="submit">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="col-7 flex-start p-1 ">
            <h2>
              {heading}
              How ChatGPT and other AI Tools can Transform Our World
            </h2>
            <p className="my-4 d-flex">
              <div className="mx-3">
                <strong>Test</strong>
              </div>
              <div className="text-muted">2023-01-07</div>
            </p>
            <h6>
              Have you Heard about
              {["a", "b"].map((row) => (
                <div>{row}</div>
              ))}
              {content}
            </h6>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
