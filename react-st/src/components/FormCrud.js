import React from "react";
import FormCrudAgregar from "./FromCrudAgregar";
import "../App.css";
import { useContext } from "react";
import ReportModal from "../context/ReportModal";
import ActionServiceContext from "../context/ActionServiceContext";
import FromCrudReporte from "./FromCrudReporte";

export default function FromCrud({
  dataToChange,
  setDataToChange,
  handleTableDataChange,
}) {
  const { activeModal, setActiveModal } = useContext(ReportModal);
  const { action } = useContext(ActionServiceContext);

  const handleClose = () => {
    setActiveModal(false);
  };

  return (
    <>
      <div className={activeModal ? "blackscreen modalActive" : "blackscreen"}>
        <div className="modal">
          <button onClick={handleClose} className="closeModal x-buttonModal">
            ✖
          </button>

          {action.name === "Reporte" && <FromCrudReporte />}

          {action.name === "Agregar" && (
            <FormCrudAgregar
              dataToChange={dataToChange}
              setDataToChange={setDataToChange}
              handleTableDataChange={handleTableDataChange}
              handleClose={handleClose}
            />
          )}
        </div>
      </div>
    </>
  );
}
