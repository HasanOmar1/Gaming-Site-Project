import {
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import "./GamesByNamePage.css";
import Button from "@mui/material/Button";
import RadioGroupRating from "../../Components/Rating/Rating";
import BackBtn from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import axios from "../../axiosUsersConfig";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import { useEffect, useRef, useState } from "react";
import RecommendedCards from "../../Components/RecommendedCards/RecommendedCards";
import { useCategories } from "../../Contexts/CategoriesContext/CategoriesContext";
import Dialog from "../../Components/Dialog/Dialog";
import { useIsInLibrary } from "../../Contexts/AlreadyInLibraryContext/AlreadyInLibraryContext";

export default function GamesByNamePage() {
  const [theGame, setTheGame] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const { currentUser, fetchUserData } = useUserData();
  const { gamesData } = useGamesData();
  const dialog = useRef();
  const { setIsInLibrary } = useIsInLibrary();

  useEffect(() => {
    let timeoutId;
    if (state) {
      setTheGame(state.game);
    } else {
      const searchByName = name.split("-").join(" ");
      const myGame = gamesData.find((game) => game.title == searchByName);
      setTheGame(myGame);

      timeoutId = setTimeout(() => {
        if (!myGame) {
          navigate("/notFound");
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [gamesData]);

  // console.log(theGame);
  async function addToLibrary(id) {
    const inLibrary = currentUser?.library.find((game) => {
      return game?.id === id;
    });
    // console.log(inLibrary);

    if (currentUser) {
      try {
        if (!inLibrary) {
          setIsInLibrary(true);
          const updatedUser = {
            library: [
              ...currentUser?.library,
              {
                id: theGame.id,
                title: theGame.title,
                thumbnail: theGame.thumbnail,
                short_description: theGame.short_description,
                genre: theGame.genre,
              },
            ],
          };
          const response = await axios.put(
            `/users/${currentUser?.id}`,
            updatedUser
          );

          fetchUserData();

          console.log(currentUser);
        } else {
          setIsInLibrary(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    dialog.current.showModal();

    if (!currentUser) return;
  }

  const gameGenre = state?.game?.genre.toLowerCase();
  const pickCategory = gameGenre + "Category";
  const { [pickCategory]: currentCategory } = useCategories();
  const randomGames = Math.ceil(Math.random() * gamesData.length);
  const randomGamesByGenre = Math.ceil(Math.random() * currentCategory?.length);

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
                onClick={() => addToLibrary(theGame.id)}
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
          <div>
            <hr className="line" />
          </div>
          {currentCategory ? (
            <>
              <div className="recommended-games-container">
                <h4>Recommended games in the same genre</h4>
                <div className="recommended-games">
                  <RecommendedCards
                    recommended={currentCategory?.slice(
                      randomGamesByGenre,
                      randomGamesByGenre + 3
                    )}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="recommended-games-container">
                <h4>Recommended Games</h4>
                <div className="recommended-games">
                  <RecommendedCards
                    recommended={gamesData?.slice(randomGames, randomGames + 3)}
                  />
                </div>
              </div>
            </>
          )}
          <Dialog ref={dialog} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
}
