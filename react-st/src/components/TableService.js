import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TableService({ filter, data }) {
  return (
    <>
      <table>
        <TableHead />

        <TableBody data={data} filter={filter} />
      </table>
    </>
  );
}
