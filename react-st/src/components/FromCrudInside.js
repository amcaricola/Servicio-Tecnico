import React from "react";
import ServiceOrder from "../helper/ServiceOrder";

const FormCrudInside = ({
  modal,
  setModal,
  action,
  tableData,
  dataToChange,
  setDataToChange,
  handleTableDataChange,
}) => {
  const handleClose = () => {
    setModal(false);
  };

  const handleChange = (e) => {
    setDataToChange({ ...dataToChange, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action.name === "Agregar") {
      let newOrder = new ServiceOrder({
        _id: crypto.randomUUID(),
        docID: tableData.length + 1,
        numeroFactura: dataToChange.documento,
        clienteFactura: dataToChange.cliente,
        fechaFactura: dataToChange.fecha,
        numeroEntrada: "",
        fechaEntrada: "",
        itemEntrada: dataToChange.producto,
        numeroSalida: "",
        fechaSalida: "",
        tallerSalida: "",
        numeroOT: "",
        fechaOT: "",
        conclusion: "",
        comentario: dataToChange.comentario,
        cerrado: false,
      });

      handleTableDataChange(newOrder);
    }

    handleClose();
    console.log(dataToChange);
  };

  return (
    <>
      <button onClick={handleClose} className="closeModal x-buttonModal">
        ✖
      </button>
      <h2>{action.name}</h2>

      <div>
        <h5>Orden de trabajo: # {tableData.length + 1}</h5>
      </div>

      <h3>{action.title}</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Numero de documento:
          <input
            type="text"
            id="documento"
            placeholder="Numero de Documento"
            autoComplete="disable"
            value={dataToChange.documento}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Fecha del documento:
          <input
            type="text"
            id="fecha"
            placeholder="dd/mm/yyyy"
            autoComplete="disable"
            value={dataToChange.fecha}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Cliente del documento:
          <input
            type="text"
            id="cliente"
            placeholder="cliente del documento"
            autoComplete="disable"
            value={dataToChange.cliente}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Codigo del Producto:
          <input
            type="text"
            id="producto"
            placeholder="Producto"
            autoComplete="disable"
            value={dataToChange.producto}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Comentario:
          <textarea
            name="comentario"
            id="comentario"
            cols="30"
            rows="10"
            value={dataToChange.comentario}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </label>

        <div className="btnsm">
          <input
            onClick={handleClose}
            className="closeModal"
            value="Cerrar"
            readOnly
          />
          <input
            type="submit"
            className="accionModal"
            value={action.name}
            readOnly
          />
        </div>
      </form>

      {/* <form className="conclum">
        <div>
          <input
            type="radio"
            id="concluReparacion"
            value="REPARACION"
            name="conclusion"
          />
          <label htmlFor="concluReparacion">Reparacion por Taller</label>
        </div>

        <div>
          <input
            type="radio"
            id="concluCambio"
            value="CAMBIO"
            name="conclusion"
          />
          <label htmlFor="concluCambio">Cambio nuevo producto</label>
        </div>

        <div>
          <input
            type="radio"
            id="concluNotacredito"
            value="NOTA CREDITO"
            name="conclusion"
          />
          <label htmlFor="concluNotacredito">Nota de credito a Cliente</label>
        </div>
      </form> */}
    </>
  );
};

export default FormCrudInside;
