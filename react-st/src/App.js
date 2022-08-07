import "./App.css";
import React, { useState } from "react";
import FromCrud from "./components/formCrud";
import Logging from "./components/Logging";
import SideButton from "./components/SideButton";
import TableService from "./components/TableService";

export default function App() {
  const [logging, setLogging] = useState(false);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(false);
  // const [action, setAction] = useState(null);

  // let actionMethod = (accion) => {
  //   setAction(action);
  // };

  return (
    <div className="App">
      <header className="header">
        <h1>SLM Servicio Tecnico</h1>
        <Logging logging={logging} setLogging={setLogging} />
      </header>

      <section className="section">
        <div className="aside">
          <SideButton
            title={!filter ? "Ver OT Cerradas" : "ver OT Activas"}
            click={() => (!filter ? setFilter(true) : setFilter(false))} // funcion de cambio de la tabla
            visibility={true}
          />
          <SideButton
            title="Agregar Orden"
            click={() => setModal(true)}
            visibility={logging}
          />
        </div>

        <div className="content">
          <TableService filter={filter} />
        </div>
      </section>

      {/* <FromCrud
        isActive={modal}
        closeModal={() => setModal(false)}
        action={actionMethod}
      /> */}
    </div>
  );
}
