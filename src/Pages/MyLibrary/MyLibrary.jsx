import Cards from "../../Components/Cards/Cards";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import "./MyLibrary.css";
export default function MyLibrary() {
  const { currentUser } = useUserData();
  // console.log(currentUser?.library);
  const userLibrary = currentUser?.library?.map((game) => game);
  console.log(currentUser);
  return (
    <main className="MyLibrary page">
      <h3>My Games</h3>
      <div className="game-container">
        {userLibrary && <Cards genre={userLibrary} />}
      </div>
    </main>
  );
}
