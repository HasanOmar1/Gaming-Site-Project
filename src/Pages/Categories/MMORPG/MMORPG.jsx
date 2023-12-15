import "./MMORPG.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import { Spinner } from "react-bootstrap";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";

export default function MMORPG() {
  const { loading, mmorpgCategory } = useCategories();

  return (
    <main className="MMORPG page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in MMORPG genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards recommended={mmorpgCategory.slice(23, 26)} />
            </div>
          </div>
          <div className="games-container">
            <div className="left-cards-container">
              <Cards genre={mmorpgCategory.slice(4, 13)} />
            </div>
            <div className="right-cards-container">
              <ColCards recommended={mmorpgCategory.slice(36, 42)} />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}