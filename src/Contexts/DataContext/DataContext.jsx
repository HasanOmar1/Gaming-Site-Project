import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../axiosUsersConfig";

export const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const response = await axios.get("/users");
      console.log(response.data);
      setUsers(response.data);
    }
    fetchUserData();
  }, []);

  return (
    <UserDataContext.Provider value={{ users }}>
      {children}
    </UserDataContext.Provider>
  );
}

export const useUserData = () => useContext(UserDataContext);
