import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useUserData } from "../../Contexts/DataContext/DataContext";

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
    <div className="Header">
      <Link to={"/"} className="logo">
        <div>
          <h1>GAMES</h1>
        </div>
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
  );
}
