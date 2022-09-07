import React from "react";
import { useContext } from "react";
import ServiceOrder from "../context/ServiceOrderContext";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TableService({ filter }) {
  const { orders } = useContext(ServiceOrder);

  return (
    <>
      <table>
        <TableHead />

        <TableBody data={orders} filter={filter} />
      </table>
    </>
  );
}
