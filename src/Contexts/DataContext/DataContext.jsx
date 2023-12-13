import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../axiosUsersConfig";

export const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("/users");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  async function createUser(email, password) {
    try {
      const response = await axios.post(`/users`, {
        email: email,
        password: password,
        library: [{}],
      });
      setUsers([...users, response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserDataContext.Provider value={{ users, createUser }}>
      {children}
    </UserDataContext.Provider>
  );
}

export const useUserData = () => useContext(UserDataContext);
