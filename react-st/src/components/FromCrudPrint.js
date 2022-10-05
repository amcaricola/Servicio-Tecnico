import React from "react";
import "../App.css";

import Modal from "./Modal";
import FormCrudPrintUpdate from "./FormCrudPrintUpdate";
import { useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import FromCrudPrintReporte from "./FromCrudPrintReporte";

export default function FromCrudPrint({ handleTableDataChange }) {
  const { action } = useContext(GlobalContex);

  return (
    <>
      <Modal>
        {action.name === "Reporte" && <FromCrudPrintReporte />}
        {action.name !== "Reporte" && (
          <FormCrudPrintUpdate handleTableDataChange={handleTableDataChange} />
        )}
      </Modal>
    </>
  );
}
