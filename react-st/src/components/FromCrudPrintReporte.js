import React, { useContext } from "react";
import GlobalContex from "../context/GlobalContex";

const FromCrudPrintReporte = () => {
  const { singleOrder } = useContext(GlobalContex);

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

  return (
    <>
      <h2 id="titleReporte">Reporte Completo de la NV #{notaVenta}</h2>

      <h3 id="productoReporte">Producto: {producto} </h3>

      <table id="tablaReporte">
        <thead>
          <tr>
            <th>Taller de grabado</th>
            <th>Guia de Salida</th>
            <th>Fecha </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{tallerSalida}</td>
            <td>{numeroSalida}</td>
            <td>{fechaSalida}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{producto}</td>
            <td>{cantidad}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Factura</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{factura}</td>
          </tr>
        </tbody>
      </table>

      <h4>Comentario:</h4>
      <div className="comentarioReporte">
        <p>{comentario}</p>
      </div>
    </>
  );
};

export default FromCrudPrintReporte;
