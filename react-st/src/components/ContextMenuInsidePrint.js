import React from "react";

const ContextMenuInsidePrint = ({ handleClick, singleOrder, logging }) => {
  return (
    <>
      <li
        onClick={() => {
          handleClick("Reporte");
        }}
        style={{ backgroundColor: "var(--blue)" }}
      >
        {`Nota de Venta # ${
          singleOrder.notaVenta ? singleOrder.notaVenta : "0"
        }`}
      </li>

      {logging && (
        <>
          <li
            onClick={() => {
              handleClick("putGrabado");
            }}
          >
            Actualizar Grabado
          </li>
          <li
            onClick={() => {
              handleClick("cierreGrabado");
            }}
          >
            Cerrar Grabado
          </li>
        </>
      )}
    </>
  );
};

export default ContextMenuInsidePrint;
