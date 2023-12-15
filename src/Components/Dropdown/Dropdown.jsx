import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

function DropdownBtn() {
  const navigate = useNavigate();
  return (
    <Dropdown className="DropdownBtn">
      <Dropdown.Toggle variant="dark" id="dropdown-basic" className="drop-down">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate("/shooter")}>
          Shooter
        </Dropdown.Item>

        <Dropdown.Item onClick={() => navigate("/MMORPG")}>
          MMORPG
        </Dropdown.Item>

        <Dropdown.Item onClick={() => navigate("/MOBA")}>MOBA</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Racing")}>
          Racing
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Fighting")}>
          Fighting
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Sports")}>
          Sports
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Strategy")}>
          Strategy
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/BattleRoyale")}>
          Battle Royale
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBtn;
