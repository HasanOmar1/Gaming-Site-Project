import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";

export default function Navbar() {
  const { currentUser, setCurrentUser } = useUserData();
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
        <nav id="menu">
          <input type="checkbox" id="responsive-menu" />
          <label></label>
          <ul>
            <li>
              <a class="dropdown-arrow">Products</a>
              <ul class="sub-menus">
                <li>
                  <Link to="/">Products 1</Link>
                </li>
                <li>
                  <Link to="/">Products 2</Link>
                </li>
                <li>
                  <Link to="/">Products 3</Link>
                </li>
                <li>
                  <Link to="/">Products 4</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Link to={"/"} className="link home">
          Home
        </Link>
        {!currentUser ? (
          <>
            <Link to={"/login"} className="loginOrRegister login">
              <div>Log in</div>
            </Link>
            <Link to={"/register"} className="loginOrRegister register">
              <div>Join us</div>
            </Link>
          </>
        ) : (
          <>
            <h3 className="logged-user">{currentUser.email}</h3>
            <div className="my-library ">My Library</div>
            <Link to={"/"} className="link">
              <div onClick={handleLogOut} className="loginOrRegister logout">
                Log out
              </div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
