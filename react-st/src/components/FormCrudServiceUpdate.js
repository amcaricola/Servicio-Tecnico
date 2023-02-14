import React, { useEffect, useState, useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import makeCrud from "../helper/makeCrud";

const initialFromData = {
  documentoID: "",
  fecha: "",
  sujeto: "",
  producto: "",
  comentario: "",
  conclusion: "",
};

const updateTitle = {
  postFactura: "Crear OT de trabajo",
  updateFactura: "Actualizar Factura o Producto",
  updateEntrada: "Actualizar Guia Entrada",
  updateSalida: "Actualizar Guia Salida",
  updateTaller: "Actualizar OT de proveedor",
  updateConclusion: "Actualizar Conclusion",
  updateCierre: "Cerrar OT",
};

const FormCrudServiceUpdate = () => {
  const { singleOrder, action, setModal, setLoader, thisUser, setThisUser } =
    useContext(GlobalContex);

  const [form, setForm] = useState(initialFromData);
  const {
    docID,
    numeroFactura,
    clienteFactura,
    fechaFactura,
    numeroEntrada,
    fechaEntrada,
    itemEntrada,
    numeroSalida,
    fechaSalida,
    tallerSalida,
    numeroOT,
    fechaOT,
    comentario,
    conclusion,
  } = singleOrder;

  useEffect(() => {
    if (action.name === "postFactura") {
      setForm(initialFromData);
    }
    if (action.name === "updateFactura") {
      setForm({
        documentoID: numeroFactura,
        fecha: fechaFactura,
        sujeto: clienteFactura,
        producto: itemEntrada,
        comentario: comentario,
      });
    }
    if (action.name === "updateEntrada") {
      setForm({
        documentoID: numeroEntrada,
        fecha: fechaEntrada,
        sujeto: clienteFactura,
        producto: itemEntrada,
        comentario: comentario,
      });
    }
    if (action.name === "updateSalida") {
      setForm({
        documentoID: numeroSalida,
        fecha: fechaSalida,
        sujeto: tallerSalida,
        producto: itemEntrada,
        comentario: comentario,
      });
    }
    if (action.name === "updateTaller") {
      setForm({
        documentoID: numeroOT,
        fecha: fechaOT,
        sujeto: tallerSalida,
        producto: itemEntrada,
        comentario: comentario,
      });
    }
    if (action.name === "updateConclusion" || action.name === "updateCierre") {
      setForm({
        comentario: comentario,
        conclusion: conclusion || "REPARACION",
      });
    }

    // eslint-disable-next-line
  }, [action]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (!thisUser) setThisUser(true);
    try {
      makeCrud(form, action, singleOrder);
      // handleTableDataChange(newOrder);
      setModal(false);
    } finally {
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    const key = e.target.id ? e.target.id : e.target.name;
    const newValue = { [key]: e.target.value };
    setForm((prev) => {
      return { ...prev, ...newValue };
    });
  };

  return (
    <>
      <h2>{updateTitle[action.name]}</h2>
      <h3 id="productoReporte">Orden de trabajo: #{docID} </h3>

      <form onSubmit={handleSubmit}>
        {action.name !== "updateConclusion" &&
          action.name !== "updateCierre" && (
            <div>
              <label>
                Numero de documento:
                <input
                  type="text"
                  id="documentoID"
                  placeholder="Numero de Documento"
                  autoComplete="off"
                  value={form.documentoID}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>

              <label>
                Fecha del documento:
                <input
                  type="text"
                  id="fecha"
                  placeholder="dd/mm/yyyy"
                  autoComplete="off"
                  value={form.fecha}
                  onChange={(e) => handleChange(e)}
                  pattern="^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$"
                  title="dd/mm/yyyy - dia/mes/año"
                  required
                />
              </label>

              <label>
                Cliente del documento:
                <input
                  type="text"
                  id="sujeto"
                  placeholder="cliente del documento"
                  autoComplete="off"
                  value={form.sujeto}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>
              <div
                style={
                  action.name === "updateFactura" ||
                  action.name === "postFactura"
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                <label>
                  Codigo del Producto:
                  <input
                    type="text"
                    id="producto"
                    placeholder="Producto"
                    autoComplete="off"
                    value={form.producto}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </label>
              </div>
            </div>
          )}
        {action.name === "updateConclusion" && (
          <>
            <div className="radio-conclusion">
              <input
                type="radio"
                value="REPARACION"
                name="conclusion"
                onChange={(e) => handleChange(e)}
                checked={form.conclusion === "REPARACION"}
              />
              <label htmlFor="concluReparacion">Reparacion por Taller</label>
            </div>

            <div className="radio-conclusion">
              <input
                type="radio"
                value="CAMBIO"
                name="conclusion"
                onChange={(e) => handleChange(e)}
                checked={form.conclusion === "CAMBIO"}
              />
              <label htmlFor="concluCambio">Cambio nuevo producto</label>
            </div>

            <div className="radio-conclusion">
              <input
                type="radio"
                value="NOTA CREDITO"
                name="conclusion"
                onChange={(e) => handleChange(e)}
                checked={form.conclusion === "NOTA CREDITO"}
              />
              <label htmlFor="concluNotacredito">
                Nota de credito a Cliente
              </label>
            </div>

            <div className="radio-conclusion" id="last-radio-conclusion">
              <input
                type="radio"
                value="RECHAZADO"
                name="conclusion"
                onChange={(e) => handleChange(e)}
                checked={form.conclusion === "RECHAZADO"}
              />
              <label htmlFor="concluCambio">
                Garantia rechazada por Proveedor
              </label>
            </div>
          </>
        )}

        {action.name === "updateCierre" && (
          <div id="title-cierre">
            <h2>¿Seguro que deseas cerrar la Orden de trabajo #{docID}?</h2>
          </div>
        )}

        <label>
          Comentario:
          <textarea
            name="comentario"
            id="comentario"
            cols="30"
            rows="10"
            value={form.comentario}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </label>

        <div className="btnsm">
          <input
            onClick={() => setModal(false)}
            className="closeModal"
            value="Cerrar"
            readOnly
          />
          <input
            type="submit"
            id="accionModal"
            value={updateTitle[action.name]}
            readOnly
          />
        </div>
      </form>
    </>
  );
};

export default FormCrudServiceUpdate;
