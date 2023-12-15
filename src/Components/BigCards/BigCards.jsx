import { Link } from "react-router-dom";
import "./BigCards.css";
import { useCategories } from "../../Contexts/CategoriesContext/CategoriesContext";

export default function BigCards({ recommended }) {
  return (
    <section className="BigCards">
      {recommended.map((game) => {
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
