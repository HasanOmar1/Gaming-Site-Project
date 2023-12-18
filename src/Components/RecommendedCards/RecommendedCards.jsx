import { Link } from "react-router-dom";
import "./RecommendedCards.css";

export default function RecommendedCards({ recommended }) {
  return (
    <section className="RecommendedCards">
      {recommended?.map((game) => {
        return (
          <Link
            reloadDocument
            key={game?.id}
            to={`/${game?.title.replace(/ /g, "-")}`}
            state={{ game }}
          >
            <div className="img-container">
              <img src={game?.thumbnail} alt={game?.title} />
            </div>
          </Link>
        );
      })}
    </section>
  );
}
