import React from "react";
import { useState } from "react";

const initialState = {
  name: "",
  title: "",
  method: "",
};

const ActionService = React.createContext({});

const ActionServiceContext = ({ children }) => {
  const [action, setAction] = useState(initialState);

  return (
    <ActionService.Provider value={{ action, setAction }}>
      {children}
    </ActionService.Provider>
  );
};

export default ActionService;
export { ActionServiceContext };
