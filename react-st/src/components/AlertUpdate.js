import React, { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import PrintOrderModel from "../helper/PrintOrderModel";
import GlobalContex from "../context/GlobalContex";
import ServiceOrderModel from "../helper/ServiceOrderModel";

const ENDPOINT = "https://slmback.up.railway.app/";

const socket = io(ENDPOINT);

const AlertUpdate = () => {
  //USE STATES ---------------------------------------------
  const [alert, setAlert] = useState(false);
  const [newUpdate, setNewUpdate] = useState({});
  const [info, setInfo] = useState([]);

  const {
    printOrders,
    setPrintOrders,
    setServiceOrders,
    serviceOrders,
    thisUser,
    setThisUser,
  } = useContext(GlobalContex);

  // USE EFFECT ---------------------------------------------
  useEffect(() => {
    // SOCKET io ------------------------------------------
    socket.on("connect", () => {
      console.log("Conectado al Servidor");
    });

    socket.on("update", (data) => {
      setNewUpdate(data);
    });

    socket.on("disconnect", () => {
      console.log("Desconectado del servidor");
    });

    return () => {
      socket.off("update");
      socket.off("connect");
      socket.off("disconnect");
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (newUpdate.action === "update") handleChange(newUpdate);
    if (newUpdate.action === "create") handleCreate(newUpdate);
    // eslint-disable-next-line
  }, [newUpdate]);

  // FUNCIONES ---------------------------------------------

  const handleCreate = (newData) => {
    const { type, data } = newData;

    if (type === "prints") {
      const newPrintData = new PrintOrderModel(data);
      setPrintOrders((oldData) => oldData.concat(newPrintData));
    }
    if (type === "orders") {
      const newServiceData = new ServiceOrderModel(data);
      setServiceOrders((oldData) => oldData.concat(newServiceData));
    }

    if (!thisUser) {
      setInfo((oldData) => oldData.concat(newData));
      setAlert(true);
    }
    setThisUser(false);
  };

  const handleChange = (newData) => {
    const { type, data } = newData;

    if (type === "prints" && data) {
      const newPrintData = new PrintOrderModel(data);
      const newData = printOrders.map((el) =>
        el._id === newPrintData._id ? newPrintData : el
      );
      setPrintOrders(newData);
    }

    if (type === "orders" && data) {
      const newServiceData = new ServiceOrderModel(data);
      const newData = serviceOrders.map((el) =>
        el._id === newServiceData._id ? newServiceData : el
      );
      setServiceOrders(newData);
    }

    if (!thisUser) {
      setInfo((oldData) => oldData.concat(newData));
      setAlert(true);
    }
    setThisUser(false);
  };

  const closeAlert = () => {
    setInfo([]);
    setAlert(false);
  };

  const dataParse = (element) => {
    let action = element.action === "create" ? "Creado" : "Actualizado";

    let type;
    let NV;
    if (element.type === "prints") {
      type = "Grabados";
      NV = "NV: " + element.data.notaVenta;
    }
    if (element.type === "orders") {
      type = "Servicios";
      NV = "FE: " + element.data.numeroFactura;
    }

    return (
      <li>
        • En {type} - {action} - {NV}
      </li>
    );
  };

  // RETURN ---------------------------------------------
  return (
    <>
      {alert && (
        <div className="updateAlertBlock">
          <h2>Nueva Actualizacion!</h2>
          <ul>{info.map((el) => dataParse(el))}</ul>
          <button onClick={closeAlert}>Aceptar</button>
        </div>
      )}
    </>
  );
};

export default AlertUpdate;
