import { Link } from "react-router-dom";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import "./Cards.css";
export default function Cards({ genre }) {
  return (
    <div className="Cards">
      <div className="cards-container">
        {genre?.map((game) => {
          return (
            <Link
              key={game.id}
              to={`/${game.title.replace(/ /g, "-")}`}
              state={{ game }}
            >
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
          );
        })}
      </div>
    </div>
  );
}
