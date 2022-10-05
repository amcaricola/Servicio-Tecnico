import React, { useEffect, useState, useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import makeCrud from "../helper/makeCrud";

const initialFromData = {
  notaVenta: "",
  tallerSalida: "",
  numeroSalida: "",
  fechaSalida: "",
  producto: "",
  cantidad: "",
  factura: "",
  comentario: "",
};

const updateTitle = {
  postGrabado: "Crear Orden de Grabado",
  putGrabado: "Actualizar Orden de Grabado",
  cierreGrabado: "Cerrar Orden de Grabado",
};

const FormCrudPrintUpdate = ({ handleTableDataChange }) => {
  const { singleOrder, action, setModal, setLoader } = useContext(GlobalContex);

  const [form, setForm] = useState(initialFromData);

  const {
    notaVenta,
    tallerSalida,
    numeroSalida,
    fechaSalida,
    producto,
    cantidad,
    comentario,
    factura,
  } = singleOrder;

  useEffect(() => {
    if (action.name === "postGrabado") {
      setForm(initialFromData);
    }
    if (action.name === "putGrabado") {
      setForm({
        notaVenta: notaVenta,
        tallerSalida: tallerSalida,
        numeroSalida: numeroSalida,
        fechaSalida: fechaSalida,
        producto: producto,
        cantidad: cantidad,
        factura: factura,
        comentario: comentario,
      });
    }
    if (action.name === "cierreGrabado") {
      setForm({
        comentario: comentario,
      });
    }

    // eslint-disable-next-line
  }, [action]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      let newOrder = await makeCrud(form, action, singleOrder);
      handleTableDataChange(newOrder);
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

      <form onSubmit={handleSubmit}>
        {action.name !== "cierreGrabado" && (
          <div>
            <label>
              Nota de Venta:
              <input
                type="text"
                id="notaVenta"
                placeholder="Numero de Nota de venta"
                autoComplete="off"
                value={form.notaVenta}
                onChange={(e) => handleChange(e)}
                required
              />
            </label>

            <label>
              Taller de Grabado:
              <input
                type="text"
                id="tallerSalida"
                placeholder="taller de Guia de Salida"
                autoComplete="off"
                value={form.tallerSalida}
                onChange={(e) => handleChange(e)}
                required
              />
            </label>
            <div className="doubleInputDiv">
              <label>
                Numero de Guia de Salida:
                <input
                  type="text"
                  id="numeroSalida"
                  placeholder="Numero de Guia de Salida"
                  autoComplete="off"
                  value={form.numeroSalida}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>

              <label>
                Fecha de Guia Salida:
                <input
                  type="text"
                  id="fechaSalida"
                  placeholder="dd/mm/yyyy"
                  autoComplete="off"
                  value={form.fechaSalida}
                  onChange={(e) => handleChange(e)}
                  pattern="^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$"
                  title="dd/mm/yyyy - dia/mes/año"
                  required
                />
              </label>
            </div>

            <div className="doubleInputDiv">
              <label>
                Producto:
                <input
                  type="text"
                  id="producto"
                  placeholder="Producto a grabar"
                  autoComplete="off"
                  value={form.producto}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>

              <label>
                Cantidad despachada:
                <input
                  type="text"
                  id="cantidad"
                  placeholder="Cantidad despachada para grabado"
                  autoComplete="off"
                  value={form.cantidad}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </label>
            </div>

            <label
              style={
                action.name === "postGrabado"
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              Factura a cliente:
              <input
                type="text"
                id="factura"
                placeholder="Factura realizada a cliente"
                autoComplete="off"
                value={form.factura}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
        )}

        {action.name === "cierreGrabado" && (
          <div id="title-cierre">
            <h2>
              ¿Seguro que deseas cerrar el Proceso de grabado de la NV #
              {notaVenta}?
            </h2>
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

export default FormCrudPrintUpdate;
