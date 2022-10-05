import React from "react";
import { useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TablePrint({ filter }) {
  const { printOrders } = useContext(GlobalContex);
  // hay que coregir todas las ORDERS!

  const headerItems = {
    id: "PrintHeader",
    list: [
      "Nota Venta",
      "Taller Grabado",
      "Guia Salida",
      "Fecha",
      "Producto",
      "Cantidad",
      "Factura a cliente",
      "Estado",
    ],
  };

  const tableFiltered = ({
    _id,
    notaVenta,
    tallerSalida,
    numeroSalida,
    fechaSalida,
    producto,
    cantidad,
    factura,
    estado,
  }) => {
    return (
      <tr key={_id} id={_id}>
        <td data-id={_id}>{notaVenta}</td>
        <td data-id={_id}>{tallerSalida}</td>
        <td data-id={_id}>{numeroSalida}</td>
        <td data-id={_id}>{fechaSalida}</td>
        <td data-id={_id}>{producto}</td>
        <td data-id={_id}>{cantidad}</td>
        <td data-id={_id}>{factura}</td>
        <td data-id={_id}>{estado}</td>
      </tr>
    );
  };

  const data = printOrders.filter((el) => el.cerrado === filter);
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
