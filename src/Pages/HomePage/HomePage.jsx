import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="HomePage page">
      <div className="welcome-msg">
        <h3>Looking for a game to play? Then you are in the right place!</h3>
        <h4>
          Join us for extra features!
          <Link to={"/register"}>
            <button>Get Started</button>
          </Link>
        </h4>
      </div>
    </main>
  );
}
