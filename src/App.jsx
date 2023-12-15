import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import GamesDataProvider from "./Contexts/GamesDataContext/GamesDataContext";
import GamesByNamePage from "./Pages/GamesByNamePage/GamesByNamePage";
import Shooter from "./Pages/Categories/Shooter/Shooter";
import CategoriesProvider from "./Contexts/CategoriesContext/CategoriesContext";
import MMORPG from "./Pages/Categories/MMORPG/MMORPG";
import MOBA from "./Pages/Categories/MOBA/MOBA";
import Racing from "./Pages/Categories/Racing/Racing";
import Fighting from "./Pages/Categories/Fighting/Fighting";
import Sports from "./Pages/Categories/Sports/Sports";
import Strategy from "./Pages/Categories/Strategy/Strategy";
import BattleRoyale from "./Pages/Categories/BattleRoyale/BattleRoyale";

function App() {
  return (
    <>
      <GamesDataProvider>
        <CategoriesProvider>
          <Header />
          <Routes>
            <Route path={"/"} exact element={<HomePage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
            <Route path={"/:name"} element={<GamesByNamePage />} />
            <Route path={"/shooter"} element={<Shooter />} />
            <Route path={"/MMORPG"} element={<MMORPG />} />
            <Route path={"/MOBA"} element={<MOBA />} />
            <Route path={"/Racing"} element={<Racing />} />
            <Route path={"/Fighting"} element={<Fighting />} />
            <Route path={"/Sports"} element={<Sports />} />
            <Route path={"/Strategy"} element={<Strategy />} />
            <Route path={"/BattleRoyale"} element={<BattleRoyale />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </CategoriesProvider>
      </GamesDataProvider>
    </>
  );
}

export default App;
