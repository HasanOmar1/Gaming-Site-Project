import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./GamesByNamePage.css";
import Button from "@mui/material/Button";
import RadioGroupRating from "../../Components/Rating/Rating";
import BackBtn from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import axios from "../../axiosUsersConfig";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import { useEffect, useState } from "react";

export default function GamesByNamePage() {
  const [theGame, setTheGame] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const { currentUser, fetchUserData } = useUserData();
  const { gamesData } = useGamesData();

  useEffect(() => {
    if (state) {
      setTheGame(state.game);
    } else {
      const searchByName = name.split("-").join(" ");
      const myGame = gamesData.find((game) => game.title == searchByName);
      // console.log(myGame);
      setTheGame(myGame);
    }
  }, [gamesData]);

  // console.log(theGame);
  async function addToLibrary() {
    try {
      const updatedUser = {
        library: [
          ...currentUser.library,
          {
            id: state.game.id,
            title: state.game.title,
            thumbnail: state.game.thumbnail,
            short_description: state.game.short_description,
            genre: state.game.genre,
          },
        ],
      };
      const response = await axios.put(`/users/${currentUser.id}`, updatedUser);
      fetchUserData();
      console.log(currentUser);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="GamesByNamePage page">
      {theGame ? (
        <>
          <BackBtn
            variant="outline-warning"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon className="back-icon" /> Back
          </BackBtn>

          <div className="img-container">
            <a href={theGame?.game_url} target="_blank">
              <img src={theGame?.thumbnail} alt={name} />
            </a>

            <div className="play-library-container">
              <Button
                variant="contained"
                href={theGame?.game_url}
                target="_blank"
              >
                Play
              </Button>
              <Button
                variant="contained"
                color="success"
                className="add-to-library"
                onClick={addToLibrary}
              >
                Add To Library
              </Button>
            </div>
            <div className="rating">
              <RadioGroupRating />
            </div>
          </div>
          <div className="description">
            <h1 className="game-title">{name}</h1>
            <p className="game-description">{theGame?.short_description}</p>
            <div className="game-info">
              <p className="game-developer">
                Developer: <span>{theGame?.developer}</span>
              </p>
              <p className="game-publisher">
                Publisher: <span>{theGame?.publisher}</span>
              </p>
              <p className="game-release-date">
                Release Date: <span>{theGame?.release_date}</span>
              </p>
              <p className="game-platform">
                Platform: <span>{theGame?.platform}</span>
              </p>
              <p className="game-platform">
                Genre: <span>{theGame?.genre}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
}
