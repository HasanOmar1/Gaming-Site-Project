import { Link } from "react-router-dom";
import "./HomePage.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import Cards from "../../Components/Cards/Cards";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import ColCards from "../../Components/ColCards/ColCards";
import { useCategories } from "../../Contexts/CategoriesContext/CategoriesContext";
import { useEffect, useState } from "react";
import RecommendedCards from "../../Components/RecommendedCards/RecommendedCards";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/Logo.png";

export default function HomePage() {
  const { users, currentUser } = useUserData();
  const { gamesData } = useGamesData();
  const [recommendedGenre, setRecommendedGenre] = useState(null);
  const [currentGenre, setCurrentGenre] = useState(null);
  const { [currentGenre]: currentCategory } = useCategories();
  const [renderRandomGames, setRenderRandomGames] = useState(0);

  useEffect(() => {
    if (currentUser?.library) {
      const libraryLength = currentUser?.library.length;
      const randomNum = Math.floor(Math.random() * libraryLength);

      const gameGenre = currentUser?.library.map((getGenre) =>
        getGenre.genre.toLowerCase()
      );
      const randomGameGenre = gameGenre[randomNum];
      if (currentUser?.library.length !== 0) {
        setRecommendedGenre(randomGameGenre);
      }
    }

    if (currentCategory?.length) {
      const randomGamesToRender = Math.floor(
        Math.random() * currentCategory?.length
      );
      setRenderRandomGames(randomGamesToRender);
    }
  }, [currentUser?.library]);

  useEffect(() => {
    const pickCategory = recommendedGenre + "Category";
    if (recommendedGenre !== null) {
      setCurrentGenre(pickCategory);
    }
  }, [recommendedGenre]);

  return (
    <main className="HomePage page">
      <img className="left-logo" src={Logo} alt="site's logo" />
      <img className="right-logo" src={Logo} alt="site's logo" />

      {users && (
        <div className="welcome-msg">
          <h3>Looking for a game to play? Then you are in the right place!</h3>
          {!currentUser && (
            <>
              <h4>Join us for extra features!</h4>
              <Link to={"/register"}>
                <Button variant="outline-info">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      )}
      {currentUser && currentCategory && (
        <div className="recommended-games">
          <h5>Games you might like based on your recent activities</h5>
          <RecommendedCards
            recommended={currentCategory?.slice(
              renderRandomGames,
              renderRandomGames + 3
            )}
          />
        </div>
      )}
      {gamesData.length > 0 ? (
        <>
          <h2 className="cards-title">Recently Added</h2>
          <section className="cards-section">
            <div className="left-cards-container">
              <Cards genre={gamesData.slice(0, 7)} />
            </div>
            <div className="right-cards-container">
              <ColCards recommended={gamesData.slice(50, 55)} />
            </div>
          </section>
        </>
      ) : (
        <h3 id="loading">Loading ...</h3>
      )}
    </main>
  );
}
