import React from "react";
import { Link, useLocation } from "react-router-dom";

const SharedButton = ({ singleOrderId }) => {
  const location = useLocation();

  return (
    <Link
      to={`${location.pathname}/${singleOrderId}`}
      rel="noopener"
      target="_blank"
    >
      <div id="SharedButton">compartir</div>
    </Link>
  );
};

export default SharedButton;
