import React from "react";

const ContextMenuInsideService = ({ handleClick, singleOrder, logging }) => {
  return (
    <>
      <li
        onClick={() => {
          handleClick("Reporte");
        }}
        style={{ backgroundColor: "var(--blue)" }}
      >
        {`Ver REPORTE OT # ${singleOrder.docID ? singleOrder.docID : "0"}`}
      </li>

      {logging && (
        <>
          <li
            onClick={() => {
              handleClick("updateFactura");
            }}
          >
            Actualizar Factura
          </li>
          <li
            onClick={() => {
              handleClick("updateEntrada");
            }}
          >
            Actualizar guia Entrada
          </li>
          <li
            onClick={() => {
              handleClick("updateSalida");
            }}
          >
            Actualizar guia Salida
          </li>
          <li
            onClick={() => {
              handleClick("updateTaller");
            }}
          >
            Actualizar OT Taller
          </li>
          <li
            onClick={() => {
              handleClick("updateConclusion");
            }}
          >
            Actualizar conculsion
          </li>
          <li
            onClick={() => {
              handleClick("updateCierre");
            }}
          >
            Cerrar Orden de trabajo
          </li>
        </>
      )}
    </>
  );
};

export default ContextMenuInsideService;
