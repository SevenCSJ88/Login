import React from "react";
import { BrowserRouter, Route, Routes ,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
const App = () => {
  return (
    <BrowserRouter>
      <nav className="mb-4">
        <Link className="mr-4" to="/register">
          Register
        </Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
