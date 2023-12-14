import { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../../Contexts/DataContext/DataContext";
export default function LoginPage() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { users, setCurrentUser } = useUserData();
  const [isValid, setIsValid] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    users.map((user) => {
      if (emailInput === user.email && passwordInput === user.password) {
        setIsValid(true);
        setCurrentUser(user);
        console.log(user);
        navigate("/");
      } else if (emailInput === user.email && passwordInput !== user.password) {
        setIsValid(false);
        setPasswordInput("");
        setPasswordErrorMsg("Password is not correct");
      }
    });

    if (passwordInput.length < 5) {
      setPasswordErrorMsg("Password must be more than 5 characters!");
    }
  }

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
    if (emailInput.length === 0) {
      setEmailErrorMsg("");
    }
  }

  function handlePasswordInput(e) {
    setPasswordInput(e.target.value);
    if (passwordInput.length > 4) {
      setPasswordErrorMsg("");
    }
  }
  return (
    <main className="LoginPage page">
      <div className="login-container">
        <div className="wave">
          <h1>Hello Gamer 👋</h1>
        </div>
        <div className="login">
          <h1>Login to My Account</h1>
          <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="email-error-msg">{emailErrorMsg}</div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={emailInput}
                onChange={(e) => handleEmailInput(e)}
              />
              <div className="password-error-msg">{passwordErrorMsg}</div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={passwordInput}
                onChange={(e) => handlePasswordInput(e)}
              />
              <button>Login</button>
            </form>
          </div>
          <p className="register">
            Not a member?
            <Link className="register" to={"/register"}>
              <span>Register</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
