import Cards from "../../Components/Cards/Cards";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import "./MyLibrary.css";
export default function MyLibrary() {
  const { currentUser } = useUserData();
  const userLibrary = currentUser?.library?.map((game) => game);
  return (
    <main className="MyLibrary page">
      <h3>My Games</h3>
      <div className="game-container">
        {userLibrary && <Cards genre={userLibrary} />}
        {userLibrary?.length === 0 && (
          <h4 id="no-games">No games found in your library</h4>
        )}
      </div>
    </main>
  );
}
