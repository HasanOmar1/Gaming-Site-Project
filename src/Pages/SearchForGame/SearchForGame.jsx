import { useEffect, useState } from "react";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import "./SearchForGame.css";
import Cards from "../../Components/Cards/Cards";
import RecommendedCards from "../../Components/RecommendedCards/RecommendedCards";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForGame() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const { gamesData, searchedGame, setSearchedGame } = useGamesData();

  useEffect(() => {
    if (!searchBarValue) {
      setSearchedGame(gamesData);
    } else {
      const filteredGame = gamesData.filter((title) => {
        return title.title.toLowerCase().includes(searchBarValue.toLowerCase());
      });
      return setSearchedGame(filteredGame);
    }
  }, [searchBarValue]);

  return (
    <main className="SearchForGame page">
      <div className="search-container">
        <h3>
          <SearchIcon className="search-icon" />
          Find Games
        </h3>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a game"
          onChange={(e) => setSearchBarValue(e.target.value)}
          value={searchBarValue}
        />
        <hr style={{ width: `50vw` }} />
      </div>

      <div className="cards-container">
        {!searchBarValue ? (
          <div className="recommended-cards-container">
            <h4>Games You Must Try</h4>
            <div className="recommended-cards">
              <RecommendedCards recommended={searchedGame.slice(110, 114)} />
            </div>
            <div>
              <RecommendedCards recommended={searchedGame.slice(30, 34)} />
            </div>
            <div>
              <RecommendedCards recommended={searchedGame.slice(70, 74)} />
            </div>
          </div>
        ) : (
          <Cards genre={searchedGame.slice(0, 5)} />
        )}
      </div>
    </main>
  );
}
