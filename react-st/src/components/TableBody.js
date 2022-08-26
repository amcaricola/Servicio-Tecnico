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
      <td>{docID}</td>
      <td>{itemEntrada}</td>
      <td>{numeroFactura}</td>
      <td>{clienteFactura}</td>
      <td>{numeroEntrada}</td>
      <td>{numeroSalida}</td>
      <td>{tallerSalida}</td>
      <td>{numeroOT}</td>
      <td>{conclusion}</td>
      <td>{estado}</td>
    </tr>
  );
};

const TableBody = ({ data, filter }) => {
  const filteredData = data.filter((el) => el.cerrado === filter);

  return <tbody>{filteredData.map((el) => tableFiltered(el))}</tbody>;
};

export default TableBody;
