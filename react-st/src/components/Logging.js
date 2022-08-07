import React from "react";
import { useState } from "react";
import "../App.css";

function Logging({ logging, setLogging }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (logging) {
      setLogging(false);
      return;
    }

    value === "1234" ? setLogging(true) : alert("Contraseña incorrecta");
    setValue("");
  };

  return (
    <>
      <form className="logging" onSubmit={(event) => handleSubmit(event)}>
        <input type="submit" value={!logging ? "Acceder" : "Desconectar"} />
        {!logging && (
          <input
            id="logging-pass"
            type="password"
            placeholder="ingresar como Maestro"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </form>
    </>
  );
}

export default Logging;
