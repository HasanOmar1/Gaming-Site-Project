import axios from "../../gamesAPI";
import { createContext, useContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [shooterCategory, setShooterCategory] = useState([]);
  const [mmorpgCategory, setMmorpgCategory] = useState([]);
  const [mobaCategory, setMobaCategory] = useState([]);
  const [racingCategory, setRacingCategory] = useState([]);
  const [fightingCategory, setFightingCategory] = useState([]);
  const [sportsCategory, setSportsCategory] = useState([]);
  const [strategyCategory, setStrategyCategory] = useState([]);
  const [battleRoyaleCategory, setBattleRoyaleCategory] = useState([]);

  //SHOOTER
  useEffect(() => {
    async function shooterGamesApi() {
      try {
        const response = await axios.get("games?category=shooter");
        setShooterCategory(response.data);
        console.log(shooterCategory);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    shooterGamesApi();
  }, []);

  //MMORPG

  useEffect(() => {
    async function mmorpgGamesApi() {
      try {
        const response = await axios.get("games?category=mmorpg");
        setMmorpgCategory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    mmorpgGamesApi();
  }, []);

  //MOBA

  useEffect(() => {
    async function mobaGamesApi() {
      try {
        const response = await axios.get("games?category=moba");
        setMobaCategory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    mobaGamesApi();
  }, []);

  //Racing

  useEffect(() => {
    async function racingGamesApi() {
      try {
        const response = await axios.get("games?category=racing");
        setRacingCategory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    racingGamesApi();
  }, []);

  //Fighting

  useEffect(() => {
    async function fightingGamesApi() {
      try {
        const response = await axios.get("games?category=fighting");
        setFightingCategory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fightingGamesApi();
  }, []);

  //Sports

  useEffect(() => {
    async function sportsGamesApi() {
      try {
        const response = await axios.get("games?category=sports");
        setSportsCategory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    sportsGamesApi();
  }, []);

  //Strategy

  useEffect(() => {
    async function strategyGamesApi() {
      try {
        const response = await axios.get("games?category=strategy");
        setStrategyCategory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    strategyGamesApi();
  }, []);

  //Battle Royale

  useEffect(() => {
    async function battleRoyaleGamesApi() {
      try {
        const response = await axios.get("games?category=battle-royale");
        setBattleRoyaleCategory(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    battleRoyaleGamesApi();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        loading,
        shooterCategory,
        mmorpgCategory,
        mobaCategory,
        racingCategory,
        fightingCategory,
        sportsCategory,
        strategyCategory,
        battleRoyaleCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => useContext(CategoriesContext);
