import "./Fighting.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import { Spinner } from "react-bootstrap";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";

export default function Fighting() {
  const { loading, recommendedShooterGames, shooterCategory } = useCategories();

  return (
    <main className="Fighting page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in Fighting genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards recommended={recommendedShooterGames} />
            </div>
          </div>
          <h3 id="more-games">More Games</h3>

          <div className="games-container">
            <div className="left-cards-container">
              <Cards genre={shooterCategory.slice(4, 13)} />
            </div>
            <div className="right-cards-container">
              <ColCards recommended={shooterCategory.slice(36, 42)} />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
