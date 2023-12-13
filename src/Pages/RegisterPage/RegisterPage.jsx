import { Link } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
  function handleSubmit(e) {
    e.preventDefault();
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
              <input type="email" name="email" placeholder="Enter Your Email" />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <button>Register</button>
            </form>
          </div>
          <p className="register">
            You have one?
            <Link to={"/login"} className="register">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
