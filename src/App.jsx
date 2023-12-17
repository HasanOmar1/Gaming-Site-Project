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
import SearchForGame from "./Pages/SearchForGame/SearchForGame";

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
            <Route path={"/mmorpg"} element={<MMORPG />} />
            <Route path={"/moba"} element={<MOBA />} />
            <Route path={"/racing"} element={<Racing />} />
            <Route path={"/fighting"} element={<Fighting />} />
            <Route path={"/sports"} element={<Sports />} />
            <Route path={"/strategy"} element={<Strategy />} />
            <Route path={"/battleRoyale"} element={<BattleRoyale />} />
            <Route path={"/search"} element={<SearchForGame />} />
            <Route path={"/*"} element={<NotFoundPage />} />
          </Routes>
        </CategoriesProvider>
      </GamesDataProvider>
    </>
  );
}

export default App;
