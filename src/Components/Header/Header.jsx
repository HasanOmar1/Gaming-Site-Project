import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import DropdownBtn from "../Dropdown/Dropdown";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const { currentUser, setCurrentUser } = useUserData();
  const navigate = useNavigate();
  // const location = useLocation();
  // if (location.pathname === `/404`) {
  //   return null;
  // }

  function handleLogOut() {
    setCurrentUser(null);
  }

  return (
    <nav className="Header">
      <Link to={"/"} className="logo">
        <div>
          <h1>GAMES</h1>
        </div>
      </Link>

      <div className="navbar-links">
        <Link to={"/"} className="link home">
          Home
        </Link>
        <DropdownBtn />

        <SearchIcon
          className="search-icon"
          onClick={() => navigate("/search")}
        />
        {!currentUser ? (
          <>
            <Link to={"/login"} className="loginOrRegister login">
              <div className="login-title">Log in</div>
            </Link>
            <Link to={"/register"} className="register">
              <div className="register-title">Join us</div>
            </Link>
          </>
        ) : (
          <>
            <button
              type="button"
              class="btn btn-secondary library"
              onClick={() => navigate("/library")}
            >
              My Library
            </button>

            <Link to={"/"} className="link">
              <div onClick={handleLogOut} className="loginOrRegister logout">
                Log out
              </div>
            </Link>
            <h5 className="logged-user">{currentUser.email}</h5>
          </>
        )}
      </div>
    </nav>
  );
}
