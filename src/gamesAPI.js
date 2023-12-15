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
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
  },
});

export default gamesAPI;
