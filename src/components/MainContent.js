import React from "react";

function MainContent() {
  return (
    <>
      <div className=" mx-auto w-75 mt-4">
        <div className="d-flex ">
          <div className="col-5 flex-start">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="image1"
              className="w-75 p-3"
            />
          </div>
          <div className="col-7 flex-start p-1 ">
            <h2>How ChatGPT and other AI Tools can Transform Our World </h2>
            <p className="my-4 d-flex">
              <div className="mx-3">
                <strong>Test</strong>
              </div>
              <div className="text-muted">2023-01-07</div>
            </p>
            <h6>Have you Heard about</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
