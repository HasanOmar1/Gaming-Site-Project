import axios from "../../gamesAPI";
import { createContext, useContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [shooterCategory, setShooterCategory] = useState([]);
  const [tenShooterGames, setTenShooterGames] = useState([]);
  const [recommendedShooterGames, setRecommendedShooterGames] = useState([]);

  useEffect(() => {
    async function shooterGamesApi() {
      try {
        const response = await axios.get("games?category=shooter");
        setShooterCategory(response.data);
        const tenShooterGames = response.data.slice(10, 20);
        setTenShooterGames(tenShooterGames);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    shooterGamesApi();
  }, []);

  useEffect(() => {
    if (shooterCategory) {
      const theFinals = shooterCategory.find(
        (game) => game.title === `The Finals`
      );
      const fortnite = shooterCategory.find(
        (game) => game.title === `Fortnite`
      );
      const apexLegends = shooterCategory.find(
        (game) => game.title === `Apex Legends`
      );
      setRecommendedShooterGames([theFinals, fortnite, apexLegends]);
    }
  }, [shooterCategory]);

  return (
    <CategoriesContext.Provider
      value={{
        loading,
        shooterCategory,
        tenShooterGames,
        recommendedShooterGames,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => useContext(CategoriesContext);
