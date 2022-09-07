import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import Logging from "./Logging";
import "../App.css";

const Header = () => {
  const handleLinkIsActive = ({ isActive }) => (isActive ? "navActive" : "");
  const { logging, setLogging } = useContext(LoginContext);

  return (
    <header className="header">
      <div className="title-header">
        <h1>Registro Bodega</h1>
        <h4>Sobre la mesa</h4>
      </div>
      <div>
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
