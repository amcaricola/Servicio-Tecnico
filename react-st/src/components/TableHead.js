import React from "react";

const TableHead = ({ headerItems }) => {
  return (
    <thead>
      <tr>
        {headerItems.list.map((el) => (
          <th key={el}>{el}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
