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
      console.log(searchedGame);
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
        <Cards genre={searchedGame.slice(0, 10)} />
      </div>
    </main>
  );
}
