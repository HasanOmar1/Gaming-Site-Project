import "../Categories.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import LoadingSpinner from "../../../Components/Spinner/Spinner";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";

export default function Sports() {
  const { loading, sportsCategory } = useCategories();

  return (
    <main className="Categories page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in Sports genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards recommended={sportsCategory.slice(0, 3)} />
            </div>
          </div>
          <h3 id="more-games">More Games</h3>

          <div className="games-container">
            <div className="left-cards-container">
              <Cards genre={sportsCategory.slice(4, 10)} />
            </div>
            <div className="right-cards-container">
              <ColCards recommended={sportsCategory.slice(10, 20)} />
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
