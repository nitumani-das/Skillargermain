import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";
import Signup from "../pages/signuppage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;