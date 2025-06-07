import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import AppRoutes from "./routes/approutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
