import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { useState } from "react";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";

export default function RegisterPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { createUser, users, setCurrentUser } = useUserData();
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const user = users?.find((singleUser) => {
      return singleUser.email === emailValue;
    });

    if (user) {
      setEmailErrorMsg("User already exists");
      setEmailValue("");
      setPasswordValue("");
      return;
    }

    if (passwordValue.length < 6) {
      setPasswordErrorMsg("password must be longer than 5 characters");
      setPasswordValue("");
      return;
    }

    if (passwordValue.length > 5 && !user) {
      const user = await createUser(emailValue, passwordValue);
      setCurrentUser(user);
      navigate("/");
    }
  }

  function handlePasswordInput(e) {
    setPasswordValue(e.target.value);
    if (passwordValue.length > 4) {
      setPasswordErrorMsg("");
    }
  }
  function handleEmailInput(e) {
    setEmailValue(e.target.value);
    if (emailValue.length > 0) {
      setEmailErrorMsg("");
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
                onChange={(e) => handleEmailInput(e)}
                required
                className="email-input"
              />
              <div className="password-error-msg">{passwordErrorMsg}</div>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={passwordValue}
                onChange={(e) => handlePasswordInput(e)}
                required
              />
              <button type="submit">Register</button>
              <p className="register">
                Already a member?
                <Link to={"/login"} className="link">
                  <span>Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
