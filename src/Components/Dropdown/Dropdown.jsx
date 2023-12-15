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
        {/* <Dropdown.Item>Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBtn;
