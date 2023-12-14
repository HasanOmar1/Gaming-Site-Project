import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserDataProvider from "./Contexts/UserDataContext/UserDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </BrowserRouter>
);
