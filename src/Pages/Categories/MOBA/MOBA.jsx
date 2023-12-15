import "./MOBA.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import RecommendedCards from "../../../Components/RecommendedCards/RecommendedCards";
import { Spinner } from "react-bootstrap";
import Cards from "../../../Components/Cards/Cards";
import ColCards from "../../../Components/ColCards/ColCards";

export default function MOBA() {
  const { loading, mobaCategory } = useCategories();

  return (
    <main className="MOBA page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Recommended games in MOBA genre</h3>
            <div className="recommended-games-container">
              <RecommendedCards recommended={mobaCategory.slice(0, 3)} />
            </div>
          </div>
          <h3 id="more-games">More Games</h3>

          <div className="games-container">
            <div className="left-cards-container">
              <Cards genre={mobaCategory.slice(10, 19)} />
            </div>
            <div className="right-cards-container">
              <ColCards recommended={mobaCategory.slice(19, 25)} />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
