import React from "react";
import { useContext } from "react";
import ActionServiceContext from "../context/ActionServiceContext";
// import ReportModal from "../context/ReportModal";
import ServiceOrderContext from "../context/ServiceOrderContext";
import makeServiceCrud from "../helper/makeServiceCrud";

const FormCrudAgregar = ({
  dataToChange,
  setDataToChange,
  handleTableDataChange,
  handleClose,
}) => {
  const { orders } = useContext(ServiceOrderContext);
  const { action } = useContext(ActionServiceContext);
  // const { setActiveModal } = useContext(ReportModal);

  const handleChange = (e) => {
    setDataToChange({ ...dataToChange, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SigleOrder = await makeServiceCrud(dataToChange, action, orders);

    handleTableDataChange(SigleOrder, action.method);

    handleClose();
  };

  return (
    <>
      <h2>{action.name}</h2>

      <div>
        <h5>Orden de trabajo: # {orders.length + 1}</h5>
      </div>

      <h3>Factura</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Numero de documento:
          <input
            type="text"
            id="documento"
            placeholder="Numero de Documento"
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
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

export default FormCrudAgregar;
