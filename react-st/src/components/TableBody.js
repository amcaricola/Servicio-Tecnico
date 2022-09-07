import React from "react";

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

const TableBody = ({ data, filter }) => {
  const filteredData = data.filter((el) => el.cerrado === filter);

  return <tbody>{filteredData.map((el) => tableFiltered(el))}</tbody>;
};

export default TableBody;
