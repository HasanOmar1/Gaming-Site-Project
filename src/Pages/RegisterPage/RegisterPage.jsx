import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { useState } from "react";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";

export default function RegisterPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { createUser, users } = useUserData();
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (emailValue.includes("@") && passwordValue.length > 5) {
      users.map((users) => {
        if (emailValue === users.email) {
          setIsValid(false);
          setEmailErrorMsg("User already exists");
          setEmailValue("");
          setPasswordValue("");
        } else {
          setIsValid(true);
        }
      });
    }
    if (passwordValue.length < 6) {
      setIsValid(false);
      setPasswordErrorMsg("password must be longer than 5 characters");
    }

    if (isValid) {
      createUser(emailValue, passwordValue);
      navigate("/login");
    }
  }

  function handlePasswordInput(e) {
    setPasswordValue(e.target.value);
    if (passwordValue.length > 5) {
      setPasswordErrorMsg("");
    }
  }

  return (
    <main className="RegisterPage page">
      <div className="login-container">
        <div className="wave">
          <h1>Hello Gamer 👋</h1>
        </div>
        <div className="login">
          <h1>Create My Account</h1>
          <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="email-error-msg">{emailErrorMsg}</div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <div className="password-error-msg">{passwordErrorMsg}</div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={passwordValue}
                onChange={(e) => handlePasswordInput(e)}
              />
              <button type="submit">Register</button>
            </form>
          </div>
          <p className="register">
            Already a member?
            <Link to={"/login"} className="register">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
