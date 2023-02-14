import React from "react";
import "../App.css";
import { useContext } from "react";

import GlobalContex from "../context/GlobalContex";
import FromCrudServicesReporte from "./FromCrudServicesReporte";
import FormCrudServiceUpdate from "./FormCrudServiceUpdate";
import Modal from "./Modal";

export default function FromCrudServices({ handleTableDataChange }) {
  const { action } = useContext(GlobalContex);

  return (
    <>
      <Modal>
        {action.name === "Reporte" && <FromCrudServicesReporte />}
        {action.name !== "Reporte" && (
          <FormCrudServiceUpdate
          // handleTableDataChange={handleTableDataChange}
          />
        )}
      </Modal>
    </>
  );
}
