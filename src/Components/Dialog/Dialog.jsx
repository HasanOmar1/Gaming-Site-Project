import React, { forwardRef } from "react";
import "./Dialog.css";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";

const dialogModal = forwardRef(function Dialog({ children }, ref) {
  const navigate = useNavigate();
  const { currentUser } = useUserData();
  return (
    <dialog ref={ref}>
      {currentUser ? (
        <>
          <h3>Added To Library</h3>
          <form className="dialog-form" method="dialog">
            <button className="close-dialog">Close</button>
            <button
              className="close-dialog"
              onClick={() => navigate("/library")}
            >
              Go To Library
            </button>
          </form>
        </>
      ) : (
        <>
          <h3>Please Log in First</h3>
          <form className="dialog-form" method="dialog">
            <button className="close-dialog">Close</button>
          </form>
        </>
      )}
    </dialog>
  );
});

export default dialogModal;
