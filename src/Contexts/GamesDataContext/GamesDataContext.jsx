import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../gamesAPI";
export const GamesDataContext = createContext();

export default function GamesDataProvider({ children }) {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    async function gamesAPI() {
      try {
        const response = await axios.get("games?platform=pc");
        setGamesData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    gamesAPI();
  }, []);

  return (
    <GamesDataContext.Provider value={{ gamesData }}>
      {children}
    </GamesDataContext.Provider>
  );
}

export const useGamesData = () => useContext(GamesDataContext);
