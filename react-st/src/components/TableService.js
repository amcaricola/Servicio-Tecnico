import React, { useEffect, useState } from "react";
import { useContext } from "react";
import GlobalContex from "../context/GlobalContex";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TableService({ filter }) {
  const { serviceOrders } = useContext(GlobalContex);
  const [searcher, setSearcher] = useState("");

  useEffect(() => {
    setSearcher("");
  }, [filter]);

  const headerItems = {
    id: "ServiceHeader",
    list: [
      { key: "Doc ID" },
      { key: "Producto" },
      { key: "Factura" },
      { key: "Cliente" },
      { key: "Guia de Entrada", class: "D1024" },
      { key: "Guia de Salida", class: "D1024" },
      { key: "Taller de Servicio", class: "D1280" },
      { key: "Orden de Trabajo", class: "D1024" },
      { key: "Conclusion", class: "D1024" },
      { key: "Estado" },
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
        <td className="D1024" data-id={_id}>
          {numeroEntrada}
        </td>
        <td className="D1024" data-id={_id}>
          {numeroSalida}
        </td>
        <td className="D1280" data-id={_id}>
          {tallerSalida}
        </td>
        <td className="D1024" data-id={_id}>
          {numeroOT}
        </td>
        <td className="D1024" data-id={_id}>
          {conclusion}
        </td>
        <td data-id={_id}>{estado}</td>
      </tr>
    );
  };

  const handleOnchange = (e) => {
    setSearcher(e.target.value);
  };

  const data = serviceOrders.filter((el) => el.cerrado === filter);

  const searched = searcher
    ? data.filter((el) => el.numeroFactura.includes(searcher))
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
        placeholder="Buscar por Factura"
      ></input>
      <table>
        <TableHead headerItems={headerItems} />

        <TableBody data={tableData} filter={filter} />
      </table>
    </>
  );
}
