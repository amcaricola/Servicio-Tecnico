import React, { useState, useEffect } from "react";
import ServiceOrderModel from "../helper/ServiceOrderModel";
import PrintOrderModel from "../helper/PrintOrderModel";
import getOrders from "../helper/getOrders";

function checkStoragetime() {
  let LastLoggedTime = localStorage.getItem("logged") || 0,
    newLoggedTime = new Date().getTime(),
    checkLoggingTime = parseInt(newLoggedTime) - parseInt(LastLoggedTime);

  // console.log(checkLoggingTime)

  if (checkLoggingTime <= 300000) {
    return true;
  } else {
    return false;
  }
}

const GlobalContex = React.createContext({});

const GlobalContexProvider = ({ children }) => {
  const [logging, setLogging] = useState(checkStoragetime()); // TRUE POR DESARROLLO ---> checkStoragetime()

  //ordenes
  const [serviceOrders, setServiceOrders] = useState([]);
  const [printOrders, setPrintOrders] = useState([]);

  //acciones
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState({
    title: "",
    name: "",
    method: "",
  });
  const [singleOrder, setSingleOrder] = useState({});
  //loader
  const [loader, setLoader] = useState(false);

  //funcion USE EFFECT

  useEffect(() => {
    getOrders(setServiceOrders, ServiceOrderModel, "servicio");
    getOrders(setPrintOrders, PrintOrderModel, "grabado");
  }, []);

  //metodos
  const handleSingleOrder = (currentOrder, method) => {
    if (method === "post" && action.title === "servicio") {
      // console.log("post - servicio");
      setSingleOrder({
        docID: serviceOrders.length + 1,
        numeroFactura: "",
        clienteFactura: "",
        fechaFactura: "",
        numeroEntrada: "",
        fechaEntrada: "",
        itemEntrada: "",
        numeroSalida: "",
        fechaSalida: "",
        tallerSalida: "",
        numeroOT: "",
        fechaOT: "",
        conclusion: "",
        comentario: "",
        estado: "",
      });
      return;
    }

    if (method === "post" && action.title === "grabado") {
      // console.log("post - grabado");
      setSingleOrder({
        notaVenta: "",
        tallerSalida: "",
        numeroSalida: "",
        fechaSalida: "",
        producto: "",
        cantidad: "",
        comentario: "",
        factura: "",
        cerrado: false,
      });
      return;
    }
    // console.log("put - " + action.title);
    setSingleOrder(currentOrder);
  };

  return (
    <GlobalContex.Provider
      value={{
        logging,
        setLogging,
        modal,
        setModal,
        action,
        setAction,
        loader,
        setLoader,
        serviceOrders,
        setServiceOrders,
        printOrders,
        setPrintOrders,
        singleOrder,
        handleSingleOrder,
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};

export { GlobalContexProvider };
export default GlobalContex;
