import React from "react";

export default function SideButton({ title, click, visibility }) {
  return <>{visibility && <button onClick={click}>{title}</button>}</>;
}
