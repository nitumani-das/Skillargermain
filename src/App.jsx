import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import AppRoutes from "./routes/approutes";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
