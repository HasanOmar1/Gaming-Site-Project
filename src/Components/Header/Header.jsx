import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Navbar() {
  // const location = useLocation();
  // if (location.pathname === `/404`) {
  //   return null;
  // }

  return (
    <div className="Header">
      <Link to={"/"} className="logo">
        <div>
          <h1>GAMES</h1>
        </div>
      </Link>
      <Link to={"/login"} className="loginOrRegister login">
        <div>Log in</div>
      </Link>
      <Link to={"/register"} className="loginOrRegister register">
        <div>Join us</div>
      </Link>
    </div>
  );
}
