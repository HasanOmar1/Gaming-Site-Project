import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} exact element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
