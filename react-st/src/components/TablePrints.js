import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TablePrint({ filter }) {
  const { printOrders } = useContext(GlobalContex);
  const [searcher, setSearcher] = useState("");

  // hay que coregir todas las ORDERS!

  useEffect(() => {
    setSearcher("");
  }, [filter]);

  const headerItems = {
    id: "PrintHeader",
    list: [
      { key: "Nota Venta" },
      { key: "Taller Grabado" },
      { key: "Guia Salida" },
      { key: "Fecha" },
      { key: "Producto" },
      { key: "Cantidad" },
      { key: "Factura a cliente" },
      { key: "Estado" },
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

  const handleOnchange = (e) => {
    setSearcher(e.target.value);
  };

  const data = printOrders.filter((el) => el.cerrado === filter);

  const searched = searcher
    ? data.filter((el) => el.notaVenta.includes(searcher))
    : data;

  const tableData = searched.map((el) => tableFiltered(el));

  return (
    <>
      <input
        className="Searcher"
        type="text"
        autoComplete="off"
        value={searcher}
        onChange={handleOnchange}
        placeholder="Buscar por Nota de Venta"
      ></input>
      <table>
        <TableHead headerItems={headerItems} />

        <TableBody data={tableData} filter={filter} />
      </table>
    </>
  );
}
