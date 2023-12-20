import React, { forwardRef } from "react";
import "./Dialog.css";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../Contexts/UserDataContext/UserDataContext";
import { useIsInLibrary } from "../../Contexts/AlreadyInLibraryContext/AlreadyInLibraryContext";

const dialogModal = forwardRef(function Dialog({ children }, ref) {
  const navigate = useNavigate();
  const { currentUser } = useUserData();
  const { isInLibrary } = useIsInLibrary();

  return (
    <dialog ref={ref}>
      {!currentUser && (
        <>
          <h3>Please Log in First</h3>
          <form className="dialog-form" method="dialog">
            <button className="close-dialog">Close</button>
          </form>
        </>
      )}

      {currentUser && !isInLibrary && (
        <>
          <h3 style={{ color: "red" }}>Game is already in Library</h3>
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
      )}

      {currentUser && isInLibrary && (
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
      )}
    </dialog>
  );
});

export default dialogModal;
