import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../axiosUsersConfig";

export const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  async function fetchUserData() {
    try {
      const response = await axios.get("/users");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  async function createUser(email, password) {
    try {
      const response = await axios.post(`/users`, {
        email: email,
        password: password,
        library: [],
      });
      fetchUserData();
      setUsers([...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (users) {
      setCurrentUser(users.find((user) => user?.id === currentUser?.id));
    }
  }, [users]);

  async function removeGame(id) {
    try {
      const removedGames = currentUser?.library.filter((game) => {
        return game.id !== id;
      });
      const updatedUser = {
        ...currentUser,
        library: [removedGames],
      };
      const response = await axios.put(`/users/${currentUser.id}`, updatedUser);
      fetchUserData();
      console.log(removedGames);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserDataContext.Provider
      value={{
        users,
        createUser,
        setCurrentUser,
        currentUser,
        fetchUserData,
        removeGame,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export const useUserData = () => useContext(UserDataContext);
