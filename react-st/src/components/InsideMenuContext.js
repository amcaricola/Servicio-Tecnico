import React from "react";
import { useContext } from "react";
import ActionService from "../context/ActionServiceContext";
import Logging from "../context/LoginContext";
import ReportModal from "../context/ReportModal";
import ServiceOrder from "../context/ServiceOrderContext";

const InsideMenuContext = ({ id, setActive }) => {
  const { setActiveModal, setIdToReport } = useContext(ReportModal);
  const { setAction } = useContext(ActionService);
  const { orders } = useContext(ServiceOrder);
  const { logging } = useContext(Logging);

  const handleClickReport = () => {
    setIdToReport(id);
    setAction({
      name: "Reporte",
      method: "Get",
    });
    setActiveModal(true);
    setActive(false);
  };

  const checkOrderID = () => {
    if (id) {
      let singleOrder = orders.filter((e) => e._id === id);
      return singleOrder[0].docID;
    } else {
      return "0";
    }
  };

  let orderID = checkOrderID();

  return (
    <ul>
      <li
        onClick={handleClickReport}
        style={{ backgroundColor: "var(--blue)" }}
      >{`Ver REPORTE OT # ${orderID}`}</li>
      {logging && (
        <>
          <li>Actualizar Factura</li>
          <li>Actualizar guia Entrada</li>
          <li>Actualizar guia Salida</li>
          <li>Actualizar OT Taller</li>
          <li>Actualizar conculcion</li>
          <li>Cerrar Orden de trabajo</li>
        </>
      )}
    </ul>
  );
};

export default InsideMenuContext;
