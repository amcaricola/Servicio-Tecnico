import React from "react";

const TableBody = ({ data }) => {
  return <tbody>{data.map((el) => el)}</tbody>;
};

export default TableBody;
