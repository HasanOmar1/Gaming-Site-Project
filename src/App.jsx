import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import GamesDataProvider from "./Contexts/GamesDataContext/GamesDataContext";
import GamesByNamePage from "./Pages/GamesByNamePage/GamesByNamePage";

function App() {
  return (
    <>
      <GamesDataProvider>
        <Header />
        <Routes>
          <Route path={"/"} exact element={<HomePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/:name"} element={<GamesByNamePage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </GamesDataProvider>
    </>
  );
}

export default App;
