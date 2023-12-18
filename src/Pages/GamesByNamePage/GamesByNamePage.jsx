import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./GamesByNamePage.css";
import Button from "@mui/material/Button";
import RadioGroupRating from "../../Components/Rating/Rating";
import BackBtn from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import axios from "../../axiosUsersConfig";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";

export default function GamesByNamePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const { currentUser, fetchUserData } = useUserData();

  async function addToLibrary() {
    try {
      const updatedUser = {
        ...currentUser,
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
      {state ? (
        <>
          <BackBtn
            variant="outline-warning"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon className="back-icon" /> Back
          </BackBtn>

          <div className="img-container">
            <a href={state?.game.game_url} target="_blank">
              <img src={state?.game?.thumbnail} alt={name} />
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
        </>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
}
