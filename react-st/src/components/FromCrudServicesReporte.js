import React, { useContext } from "react";
import GlobalContex from "../context/GlobalContex";

const FromCrudServicesReporte = () => {
  const { singleOrder } = useContext(GlobalContex);

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
    conclusion,
    comentario,
    estado,
  } = singleOrder;

  return (
    <>
      <h2 id="titleReporte">Reporte Completo de la orden: #{docID}</h2>

      <h3 id="productoReporte">Producto: {itemEntrada} </h3>

      <table id="tablaReporte">
        <thead>
          <tr>
            <th>Documento</th>
            <th>Sujeto</th>
            <th>ID</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Factura</td>
            <td>{clienteFactura}</td>
            <td>{numeroFactura}</td>
            <td>{fechaFactura}</td>
          </tr>
          <tr>
            <td>Guia Entrada</td>
            <td>{clienteFactura}</td>
            <td>{numeroEntrada}</td>
            <td>{fechaEntrada}</td>
          </tr>
          <tr>
            <td>Guia Salida</td>
            <td>{tallerSalida}</td>
            <td>{numeroSalida}</td>
            <td>{fechaSalida}</td>
          </tr>
          <tr>
            <td>OT servicio tech.</td>
            <td>{tallerSalida}</td>
            <td>{numeroOT}</td>
            <td>{fechaOT}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Conclusion</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{conclusion}</td>
            <td>{estado}</td>
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

export default FromCrudServicesReporte;
