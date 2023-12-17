import { useEffect, useState } from "react";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import "./SearchForGame.css";
import Cards from "../../Components/Cards/Cards";
import RecommendedCards from "../../Components/RecommendedCards/RecommendedCards";

export default function SearchForGame() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const { gamesData, searchedGame, setGamesData, setSearchedGame } =
    useGamesData();

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
        <h3>Find Games</h3>
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
            <h4>Recommended Games</h4>
            <div className="recommended-cards">
              <RecommendedCards recommended={searchedGame.slice(10, 14)} />
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
