import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} exact element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
