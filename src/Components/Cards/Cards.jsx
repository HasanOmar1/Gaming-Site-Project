import { Link, useLocation } from "react-router-dom";
import "./Cards.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import Button from "react-bootstrap/Button";

export default function Cards({ genre }) {
  const { currentUser, removeGame } = useUserData();
  const location = useLocation();

  const showRemoveBtn = location.pathname === "/library";

  return (
    <div className="Cards">
      <div className="cards-container">
        {genre?.map((game) => {
          return (
            <div key={game.id}>
              <Link to={`/${game.title.replace(/ /g, "-")}`} state={{ game }}>
                <div className="games-container">
                  <div className="img-container">
                    <img
                      className="game-img"
                      src={game.thumbnail}
                      alt={game.title}
                    />
                  </div>
                  <p className="game-title">{game.title}</p>
                  <p className="game-description">{game.short_description}</p>
                  <p className="game-genre">{game.genre}</p>
                </div>
              </Link>
              {showRemoveBtn && (
                <Button
                  variant="danger"
                  className="delete-btn"
                  onClick={() => removeGame(game.id)}
                >
                  Remove
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
