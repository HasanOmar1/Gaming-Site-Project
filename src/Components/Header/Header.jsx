import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import DropdownBtn from "../Dropdown/Dropdown";
import SearchIcon from "@mui/icons-material/Search";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";

export default function Navbar() {
  const { currentUser, setCurrentUser } = useUserData();
  const userLibrary = currentUser?.library?.map((game) => game);
  const navigate = useNavigate();

  function handleLogOut() {
    setCurrentUser(null);
    localStorage.clear();
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
              className="btn btn-secondary library"
              onClick={() => navigate("/library")}
            >
              My Library
              <span className="library-icon">
                <SportsEsportsTwoToneIcon />
              </span>
              <span className="library-counter"> {userLibrary.length} </span>
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
