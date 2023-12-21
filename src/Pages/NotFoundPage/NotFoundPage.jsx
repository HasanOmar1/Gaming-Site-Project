import { useLocation, useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <main className="NotFoundPage page">
      <h1>ERROR 404 , PAGE NOT FOUND!</h1>
      <h1>Redirecting You back to the homepage in 3 seconds</h1>
    </main>
  );
}
