import React from "react";
import { useFetch } from "../hooks/useFetch";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TableService({ filter }) {
  let url = "https://api.amcaricola.com/sertec-slm/db.json";

  const data = useFetch(url);

  return (
    <>
      <table>
        <TableHead />

        <TableBody data={data} filter={filter} />
      </table>
    </>
  );
}
