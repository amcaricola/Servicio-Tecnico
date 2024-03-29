import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContex from "../context/GlobalContex";
import Logging from "./Logging";

const Header = () => {
  const handleLinkIsActive = ({ isActive }) => (isActive ? "navActive" : "");
  const { logging, setLogging } = useContext(GlobalContex);

  return (
    <header className="header">
      <div className="title-header">
        <h1>Registro Bodega</h1>
        <h4>Sobre la mesa</h4>
      </div>

      <div className="menu-logging">
        <div className="nav">
          <NavLink className={(e) => handleLinkIsActive(e)} to="/">
            Inicio
          </NavLink>
          <NavLink
            className={(e) => handleLinkIsActive(e)}
            to="/ServicioTecnico"
          >
            Servicio Tecnico
          </NavLink>
          <NavLink
            className={(e) => handleLinkIsActive(e)}
            to="/ServicioGrabado"
          >
            Servicio Grabado
          </NavLink>
        </div>

        <div className="loggingDiv">
          <Logging logging={logging} setLogging={setLogging} />
        </div>
      </div>
    </header>
  );
};

export default Header;
