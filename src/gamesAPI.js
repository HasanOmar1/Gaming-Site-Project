import axios from "axios";

const apiKey = import.meta.env.VITE_GAMES_API_KEY;
const apiHost = import.meta.env.VITE_GAMES_API_HOST;
const apiURL = import.meta.env.VITE_GAMES_API;

const gamesAPI = axios.create({
  // baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
  baseURL: apiURL,
  params: {
    tag: "3d.mmorpg.fantasy.pvp",
    platform: "pc",
  },
  headers: {
    "Content-Type": "application/json",
    // "X-RapidAPI-Key": "e7e9ab942dmshb0287e76b9723f3p148e85jsnf4a7002c02b3",
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
    // "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});

export default gamesAPI;
