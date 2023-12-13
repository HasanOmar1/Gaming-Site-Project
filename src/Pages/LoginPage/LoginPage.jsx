import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
export default function LoginPage() {
  function handleSubmit(e) {
    e.preventDefault();
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
              <input type="email" name="email" placeholder="Enter Your Email" />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
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
