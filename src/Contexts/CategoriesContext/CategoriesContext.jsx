import axios from "../../gamesAPI";
import { createContext, useContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [shooterCategory, setShooterCategory] = useState([]);
  const [recommendedShooterGames, setRecommendedShooterGames] = useState([]);

  useEffect(() => {
    async function shooterGamesApi() {
      try {
        const response = await axios.get("games?category=shooter");
        setShooterCategory(response.data);
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
        recommendedShooterGames,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => useContext(CategoriesContext);
