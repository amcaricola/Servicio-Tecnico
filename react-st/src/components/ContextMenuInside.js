import React from "react";
import { useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import ContextMenuInsidePrint from "./ContextMenuInsidePrint";
import ContextMenuInsideService from "./ContextMenuInsideService";

const ContextMenuInside = ({ setActive }) => {
  const { logging, setModal, setAction, action, singleOrder } =
    useContext(GlobalContex);

  const handleClick = (ActionName) => {
    setAction({
      title: action.title,
      name: ActionName,
      method: "put",
    });
    setModal(true);
    setActive(false);
  };

  return (
    <ul>
      {action.title === "servicio" && (
        <ContextMenuInsideService
          logging={logging}
          handleClick={handleClick}
          singleOrder={singleOrder}
        />
      )}

      {action.title === "grabado" && (
        <ContextMenuInsidePrint
          logging={logging}
          handleClick={handleClick}
          singleOrder={singleOrder}
        />
      )}
    </ul>
  );
};

export default ContextMenuInside;
