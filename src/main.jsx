import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserDataProvider from "./Contexts/UserDataContext/UserDataContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import GamesDataProvider from "./Contexts/GamesDataContext/GamesDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserDataProvider>
      <GamesDataProvider>
        <App />
      </GamesDataProvider>
    </UserDataProvider>
  </BrowserRouter>
);
