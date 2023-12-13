import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { useState } from "react";
import { useUserData } from "../../Contexts/DataContext/DataContext";

export default function RegisterPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { createUser } = useUserData();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleRegister() {
    if (emailValue && passwordValue) {
      createUser(emailValue, passwordValue);
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
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <button onClick={handleRegister}>Register</button>
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
