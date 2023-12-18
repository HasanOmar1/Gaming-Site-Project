import { Link } from "react-router-dom";
import "./HomePage.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import Cards from "../../Components/Cards/Cards";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import ColCards from "../../Components/ColCards/ColCards";
import { useCategories } from "../../Contexts/CategoriesContext/CategoriesContext";
import { useEffect, useState } from "react";
import RecommendedCards from "../../Components/RecommendedCards/RecommendedCards";

export default function HomePage() {
  const { users, currentUser } = useUserData();
  const { gamesData } = useGamesData();
  const [recommendedGenre, setRecommendedGenre] = useState(null);
  const [currentGenre, setCurrentGenre] = useState(null);

  useEffect(() => {
    if (currentUser?.library) {
      const libraryLength = currentUser?.library.length;
      const randomNum = Math.floor(Math.random() * libraryLength);
      console.log(randomNum);

      const gameGenre = currentUser?.library.map((getGenre) =>
        getGenre.genre.toLowerCase()
      );
      const randomGameGenre = gameGenre[randomNum];
      if (currentUser?.library.length !== 0) {
        setRecommendedGenre(randomGameGenre);
      }

      // console.log(randomGameGenre);
      // console.log(gameGenre);

      // const randomGamesByGenre = Math.ceil(Math.random() * currentCategory?.length);
    }
  }, [currentUser?.library]);

  useEffect(() => {
    const pickCategory = recommendedGenre + "Category";
    if (recommendedGenre !== null) {
      setCurrentGenre(pickCategory);
    }
    // if(!currentGenre.includes('null') || !currentGenre.includes('undefined')){

    // }
  }, [recommendedGenre]);

  // console.log(currentGenre);
  const { [currentGenre]: currentCategory } = useCategories();
  console.log(currentGenre);

  return (
    <main className="HomePage page">
      {users && (
        <div className="welcome-msg">
          <h3>Looking for a game to play? Then you are in the right place!</h3>
          {!currentUser && (
            <>
              <h4>Join us for extra features!</h4>
              <Link to={"/register"}>
                <button>Get Started</button>
              </Link>
            </>
          )}
        </div>
      )}
      {currentUser && currentCategory && (
        <RecommendedCards
          recommended={currentCategory?.slice(
            0,
            3
            // recommendedGenre,
            // recommendedGenre + 3
          )}
        />
      )}
      <h2 className="cards-title">Recently Added</h2>
      <section className="cards-section">
        <div className="left-cards-container">
          <Cards genre={gamesData.slice(0, 7)} />
        </div>
        <div className="right-cards-container">
          <ColCards recommended={gamesData.slice(50, 55)} />
        </div>
      </section>
    </main>
  );
}
