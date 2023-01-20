import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContextMenuInside from "./ContextMenuInside";
import { useContext } from "react";
import GlobalContex from "../context/GlobalContex";

let wHeight = window.innerHeight;

const ContextMenu = () => {
  const menu = useRef();

  const [active, setActive] = useState(false);
  const {
    setAction,
    action,
    handleSingleOrder,
    singleOrder,
    serviceOrders,
    printOrders,
    modal,
  } = useContext(GlobalContex);

  useEffect(() => {
    const activateMenu = (e) => {
      e.preventDefault();
      if (modal) return;
      if (e.target.matches("td")) {
        // console.log(e.target.dataset.id);
        if (e.clientY > wHeight * 0.65) {
          menu.current.style.top = null;
          menu.current.style.left = `${e.clientX + 5}px `;
          menu.current.style.bottom = `${wHeight - e.clientY}px`;
        } else {
          menu.current.style.bottom = null;
          menu.current.style.top = `${e.clientY}px `;
          menu.current.style.left = `${e.clientX + 5}px `;
        }

        // console.log(action);

        setAction(function (old) {
          return { ...old, ...{ name: "", method: "put" } };
        });

        const allOrders = {
          servicio: serviceOrders,
          grabado: printOrders,
        };

        const currentorder =
          e.target.dataset.id &&
          allOrders[action.title].filter(
            (el) => el._id === e.target.dataset.id
          )[0];

        handleSingleOrder(currentorder);

        setActive(true);
      }
    };

    const deactivateMenu = (e) => {
      if (
        !e.target.matches(".context-menu") &&
        !e.target.matches(".context-menu *")
      ) {
        // console.log(e.target.dataset.id);
        setActive(false);
      }
    };

    document.addEventListener("contextmenu", activateMenu);
    document.addEventListener("click", deactivateMenu);

    return () => {
      document.removeEventListener("contextmenu", activateMenu);
      document.removeEventListener("click", deactivateMenu);
    };
  }, [
    modal,
    action.title,
    handleSingleOrder,
    printOrders,
    serviceOrders,
    setAction,
    singleOrder,
  ]);

  return (
    <>
      <div
        className={active ? "context-menu active-menu" : "context-menu"}
        ref={menu}
      >
        <ContextMenuInside setActive={setActive}></ContextMenuInside>
      </div>
    </>
  );
};

export default ContextMenu;
