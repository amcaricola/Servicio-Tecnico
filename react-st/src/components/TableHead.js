import React from "react";

const TableHead = ({ headerItems }) => {
  return (
    <thead>
      <tr>
        {headerItems.list.map((el) => (
          <th className={el.class} key={el.key}>
            {el.key}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
