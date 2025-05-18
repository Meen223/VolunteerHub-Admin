import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
