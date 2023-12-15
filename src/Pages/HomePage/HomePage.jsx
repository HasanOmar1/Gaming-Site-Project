import { Link } from "react-router-dom";
import "./HomePage.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import Cards from "../../Components/Cards/Cards";
import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import ColCards from "../../Components/ColCards/ColCards";

export default function HomePage() {
  const { users, currentUser } = useUserData();
  const { gamesData } = useGamesData();

  return (
    <main className="HomePage page">
      {users && (
        <div className="welcome-msg">
          <h3>Looking for a game to play? Then you are in the right place!</h3>
          {!currentUser && (
            <>
              <h4>Join us for extra features!</h4>
              <Link to={"/register"}>
                <button>Get Started</button>
              </Link>
            </>
          )}
        </div>
      )}
      <h2 className="cards-title">Recently Added</h2>
      <section className="cards-section">
        <div className="left-cards-container">
          <Cards genre={gamesData.slice(0, 7)} />
        </div>
        <div className="right-cards-container">
          <ColCards recommended={gamesData.slice(50, 55)} />
        </div>
      </section>
    </main>
  );
}
