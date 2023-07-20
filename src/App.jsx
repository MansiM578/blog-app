import "./App.css";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AddForm from "./pages/AddForm";
import MainPage from "./pages/mainPage";
import Post from "./pages/post";
import Login from "./pages/Login";
import { AuthProvider } from "./utils/auth";
import RequireAuth from "./utils/RequireAuth";

function App() {
  // const [user, setUser] = useState(null);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userData, setUserData] = useState({});

  // const handleLogin = ({ userName, userEmail }) => {
  //   setIsLoggedIn(true);
  //   setUserData({ userName, userEmail });
  // };
  return (
    // <div>
    //   {isLoggedIn ? (
    //     <div>
    //       <h1>Welcome, {userData.userName}</h1>
    //       <p>Email: {userData.userEmail}</p>
    //     </div>
    //   ) : (
    //     <Login onLogin={handleLogin} />
    //   )}
    // </div>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <MainPage />
              </RequireAuth>
            }
          >
            <Route path="addForm" element={<AddForm />} />
            <Route path="post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    // <div className="App">
    //   {/* <AddForm /> */}
    //   <MainPage />
    // </div>
  );
}

export default App;
