import React from "react";
import { useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TableService({ filter }) {
  const { serviceOrders } = useContext(GlobalContex);

  const headerItems = {
    id: "ServiceHeader",
    list: [
      "Doc ID",
      "Producto",
      "Factura",
      "Cliente",
      "Guia de Entrada",
      "Guia de Salida",
      "Taller de Servicio",
      "Orden de Trabajo",
      "Conclusion",
      "Estado",
    ],
  };

  const tableFiltered = ({
    _id,
    docID,
    itemEntrada,
    numeroFactura,
    clienteFactura,
    numeroEntrada,
    numeroSalida,
    tallerSalida,
    numeroOT,
    conclusion,
    estado,
  }) => {
    return (
      <tr key={_id} id={_id}>
        <td data-id={_id}>{docID}</td>
        <td data-id={_id}>{itemEntrada}</td>
        <td data-id={_id}>{numeroFactura}</td>
        <td data-id={_id}>{clienteFactura}</td>
        <td data-id={_id}>{numeroEntrada}</td>
        <td data-id={_id}>{numeroSalida}</td>
        <td data-id={_id}>{tallerSalida}</td>
        <td data-id={_id}>{numeroOT}</td>
        <td data-id={_id}>{conclusion}</td>
        <td data-id={_id}>{estado}</td>
      </tr>
    );
  };

  const data = serviceOrders.filter((el) => el.cerrado === filter);
  const tableData = data.map((el) => tableFiltered(el));

  return (
    <>
      <table>
        <TableHead headerItems={headerItems} />

        <TableBody data={tableData} filter={filter} />
      </table>
    </>
  );
}
