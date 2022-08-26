import React from "react";
import { useEffect } from "react";

export default function SideButton({
  title,
  click,
  visibility,
  modal,
  setCrudAction,
}) {
  useEffect(() => {
    if (modal === true) {
      setCrudAction({
        name: "Agregar",
        title: "Factura",
        method: "POST",
      });
    }
  }, [modal, setCrudAction]);

  return <>{visibility && <button onClick={click}>{title}</button>}</>;
}
