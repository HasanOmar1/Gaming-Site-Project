import "../Categories.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import LoadingSpinner from "../../../Components/Spinner/Spinner";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";

export default function MMORPG() {
  const { loading, mmorpgCategory } = useCategories();

  return (
    <main className="Categories page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in MMORPG genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards recommended={mmorpgCategory.slice(23, 26)} />
            </div>
          </div>
          <h3 id="more-games">More Games</h3>
          <div className="games-container">
            <div className="left-cards-container">
              <Cards genre={mmorpgCategory.slice(0, 9)} />
            </div>
            <div className="right-cards-container">
              <ColCards recommended={mmorpgCategory.slice(36, 42)} />
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
