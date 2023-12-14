import { useGamesData } from "../../Contexts/GamesDataContext/GamesDataContext";
import "./Cards.css";
export default function Cards() {
  const { gamesData } = useGamesData();
  return (
    <div className="Cards">
      <div className="cards-container"></div>
    </div>
  );
}
