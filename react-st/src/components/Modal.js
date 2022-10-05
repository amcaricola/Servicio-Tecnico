import React from "react";
import "../App.css";
import { useContext } from "react";

import GlobalContex from "../context/GlobalContex";

export default function Modal({ children }) {
  const { modal, setModal } = useContext(GlobalContex);

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className={modal ? "blackscreen modalActive" : "blackscreen"}>
        <div className="modal">
          <button onClick={handleClose} className="closeModal x-buttonModal">
            ✖
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
