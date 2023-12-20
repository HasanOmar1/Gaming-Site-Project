import React, { forwardRef, useRef, useState } from "react";
import "./Dialog.css";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import { useNavigate } from "react-router-dom";

const dialogModal = forwardRef(function UserDialog({ email, password }, ref) {
  const { createUser, setCurrentUser } = useUserData();
  const [nickNameValue, setNickNameValue] = useState("");
  const navigate = useNavigate();

  const nickNameRef = useRef();
  function handleNickName(e) {
    setNickNameValue(e.target.value);
  }

  async function addNickName() {
    if (!nickNameValue) {
      return;
    }

    try {
      const user = await createUser(email, password, nickNameValue);
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <dialog className="nickname-dialog-form" ref={ref}>
      <h3>Enter Your Nickname</h3>
      <form method="dialog">
        <input
          type="text"
          ref={nickNameRef}
          id="nickname"
          value={nickNameValue}
          onChange={(e) => handleNickName(e)}
        />
        <button className="close-dialog" onClick={addNickName}>
          Continue
        </button>
        <button className="x">X</button>
      </form>
    </dialog>
  );
});

export default dialogModal;
