import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Navbar() {
  const location = useLocation();
  // if (location.pathname === "/") {
  //   return null;
  // }

  return (
    <div className="Header">
      <Link to={"/"} className="logo">
        <div>
          <h1>GAMES</h1>
        </div>
      </Link>
      <Link to={"/login"} className="login">
        <div>Log in</div>
      </Link>
    </div>
  );
}
