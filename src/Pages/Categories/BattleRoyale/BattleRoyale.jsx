import "./BattleRoyale.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import { Spinner } from "react-bootstrap";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";

export default function BattleRoyale() {
  const { loading, battleRoyaleCategory } = useCategories();

  return (
    <main className="BattleRoyale page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in Battle-royale genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards
                recommended={battleRoyaleCategory.slice(0, 3)}
              />
            </div>
          </div>
          <h3 id="more-games">More Games</h3>

          <div className="games-container">
            <div className="left-cards-container">
              <Cards genre={battleRoyaleCategory.slice(4, 13)} />
            </div>
            <div className="right-cards-container">
              <ColCards recommended={battleRoyaleCategory.slice(14, 20)} />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
