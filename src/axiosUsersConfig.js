import axios from "axios";

const usersAPI = import.meta.env.VITE_USERS_API;

const instance = axios.create({
  baseURL: usersAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
