import { useLocation } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const location = useLocation();
  //   console.log(location);
  return (
    <main className="NotFoundPage page">
      <h1>ERROR 404 , PAGE NOT FOUND!</h1>
    </main>
  );
}
