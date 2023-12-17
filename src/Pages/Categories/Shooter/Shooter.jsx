import "./Shooter.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";
import LoadingSpinner from "../../../Components/Spinner/Spinner";

export default function Shooter() {
  const { loading, shooterCategory } = useCategories();

  return (
    <main className="Shooter page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in Shooter genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards recommended={shooterCategory.slice(50, 53)} />
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
        <div className="spinner">
          <LoadingSpinner />
        </div>
      )}
    </main>
  );
}
