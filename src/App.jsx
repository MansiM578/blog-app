import "./App.css";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AddForm from "./pages/AddForm";
import MainPage from "./pages/mainPage";
import Post from "./pages/post";
import Login from "./pages/Login";
import Error from "./pages/Error";
import AuthProvider from "./routing/auth";
import RequireAuth from "./routing/RequireAuth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
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
          />
          <Route
            path="/addForm"
            element={
              <RequireAuth>
                <AddForm />
              </RequireAuth>
            }
          />
          <Route path="/edit/:id" element={<Post />} />
          <Route path="/board" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
