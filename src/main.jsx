import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextCartProvider from "./context/ContextCart.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextCartProvider>
      <App />
    </ContextCartProvider>
  </React.StrictMode>
);
