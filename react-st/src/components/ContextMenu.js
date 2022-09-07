import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import InsideMenuContext from "./InsideMenuContext";

let wHeight = window.innerHeight;

const ContextMenu = () => {
  const menu = useRef();

  const [active, setActive] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const activateMenu = (e) => {
      e.preventDefault();
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
        setOrderId(e.target.dataset.id);
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
  }, []);

  return (
    <>
      <div
        className={active ? "context-menu active-menu" : "context-menu"}
        ref={menu}
      >
        <InsideMenuContext
          id={orderId}
          setActive={setActive}
        ></InsideMenuContext>
      </div>
    </>
  );
};

export default ContextMenu;
