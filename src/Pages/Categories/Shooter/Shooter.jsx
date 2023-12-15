import "./Shooter.css";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import BigCards from "../../../Components/BigCards/BigCards";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

export default function Shooter() {
  const { loading, recommendedShooterGames } = useCategories();

  return (
    <main className="Shooter page">
      {!loading ? (
        <div className="all-container">
          <Button className="genre-title">Shooter</Button>{" "}
          <div className="recommended-container">
            <h3>Recommended games in this genre</h3>
            <div className="recommended-games-container">
              <BigCards recommended={recommendedShooterGames} />
            </div>
          </div>
          <div className="test"></div>
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}
