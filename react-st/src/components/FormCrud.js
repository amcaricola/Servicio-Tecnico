import React from "react";
import FormCrudInside from "./FromCrudInside";
import "../App.css";

export default function FromCrud({
  modal,
  setModal,
  action,
  tableData,
  dataToChange,
  setDataToChange,
  handleTableDataChange,
}) {
  return (
    <>
      <div className={modal ? "blackscreen modalActive" : "blackscreen"}>
        <div className="modal">
          <FormCrudInside
            modal={modal}
            setModal={setModal}
            action={action}
            tableData={tableData}
            dataToChange={dataToChange}
            setDataToChange={setDataToChange}
            handleTableDataChange={handleTableDataChange}
          />
        </div>
      </div>
    </>
  );
}
