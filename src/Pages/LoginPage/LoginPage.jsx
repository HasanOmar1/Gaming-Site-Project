import "./LoginPage.css";
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
          <h1>Login to your account</h1>
          <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="email" name="email" placeholder="Enter Your Email" />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
