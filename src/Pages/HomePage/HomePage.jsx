import { Link } from "react-router-dom";
import "./HomePage.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import Cards from "../../Components/Cards/Cards";

export default function HomePage() {
  const { users, currentUser } = useUserData();

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

          <Cards />
        </div>
      )}
    </main>
  );
}
