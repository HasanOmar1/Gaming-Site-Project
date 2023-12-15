import "./Shooter.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import { Spinner } from "react-bootstrap";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";

export default function Shooter() {
  const { loading, recommendedShooterGames, shooterCategory } = useCategories();

  return (
    <main className="Shooter page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in Shooter genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards recommended={recommendedShooterGames} />
            </div>
          </div>
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
