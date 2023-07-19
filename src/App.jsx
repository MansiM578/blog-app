import "./App.css";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AddForm from "./pages/AddForm";
// import MainPage from "./pages/mainPage";
// import Post from "./pages/post";
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const handleLogin = ({ userName, userEmail }) => {
    setIsLoggedIn(true);
    setUserData({ userName, userEmail });
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {userData.userName}</h1>
          <p>Email: {userData.userEmail}</p>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="addForm" element={<AddForm />} />
    //     <Route path="post" element={<Post />} />
    //     <Route path="logIn" element={<Login setUser={setUser} />} />
    //   </Routes>
    // </BrowserRouter>
    // <div className="App">
    //   {/* <AddForm /> */}
    //   <MainPage />
    // </div>
  );
}

export default App;
