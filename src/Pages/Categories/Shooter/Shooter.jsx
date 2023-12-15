import { useEffect, useState } from "react";
import "./Shooter.css";
import axios from "../../../gamesAPI";
import { useCategories } from "../../../Contexts/CategoriesContext/CategoriesContext";
import BigCards from "../../../Components/BigCards/BigCards";

export default function Shooter() {
  const { loading, recommendedShooterGames } = useCategories();

  return (
    <main className="Shooter page">
      {!loading ? (
        <div className="all-container">
          <div className="recommended-container">
            <h3>Check out these recommended shooter games</h3>
            <div className="recommended-games-container">
              <BigCards recommended={recommendedShooterGames} />
            </div>
          </div>
          <div className="test"></div>
        </div>
      ) : (
        <h1>Fetching Data</h1>
      )}
    </main>
  );
}
