import axios from "axios";

const instance = axios.create({
  baseURL: "https://6579e7ea1acd268f9afa5c39.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
