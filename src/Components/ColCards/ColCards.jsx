import { Link } from "react-router-dom";
import "./ColCards.css";

export default function ColCards({ recommended }) {
  return (
    <section className="ColCards">
      {recommended?.map((game) => {
        return (
          <Link
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
