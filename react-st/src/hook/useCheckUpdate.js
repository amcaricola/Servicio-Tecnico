import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io();

const useCheckUpdate = () => {
  const [alert, setAlert] = useState(false);
  const [update, setUpdate] = useState({});

  useEffect(() => {
    socket.on("connection", (data) => {
      console.log(socket);
      // setAlert(true);
      // setUpdate({ ...data });
    });

    socket.on("update", (data) => {
      console.log(data);
      // setAlert(true);
      // setUpdate({ ...data });
    });

    return () => {
      socket.off("update");
    };
  }, []);

  return { alert, setAlert, update, setUpdate };
};

export { useCheckUpdate };
