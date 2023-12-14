import { useLocation } from "react-router-dom";
import "./GamesByNamePage.css";
import Button from "@mui/material/Button";
import RadioGroupRating from "../../Components/Rating/Rating";

export default function GamesByNamePage() {
  const { state } = useLocation();
  //   console.log(state.game);
  return (
    <main className="GamesByNamePage page">
      <div className="img-container">
        <a href={state?.game.game_url} target="_blank">
          <img src={state?.game?.thumbnail} alt={state?.game?.title} />
        </a>

        <div className="play-library-container">
          <Button
            variant="contained"
            href={state?.game?.game_url}
            target="_blank"
          >
            Play
          </Button>
          <Button
            variant="contained"
            color="success"
            className="add-to-library"
          >
            Add To Library
          </Button>
        </div>
        <div className="rating">
          <RadioGroupRating />
        </div>
      </div>
      <div className="description">
        <h1 className="game-title">{state?.game?.title}</h1>
        <p className="game-description">{state?.game?.short_description}</p>
        <div className="game-info">
          <p className="game-developer">
            Developer: <span>{state?.game?.developer}</span>
          </p>
          <p className="game-publisher">
            Publisher: <span>{state?.game?.publisher}</span>
          </p>
          <p className="game-release-date">
            Release Date: <span>{state?.game?.release_date}</span>
          </p>
          <p className="game-platform">
            Platform: <span>{state?.game?.platform}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
