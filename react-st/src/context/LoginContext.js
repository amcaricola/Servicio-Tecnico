import React, { useState } from "react";

const Logging = React.createContext({});

const LoginContext = ({ children }) => {
  const [logging, setLogging] = useState(true); // TRUE POR DESARROLLO
  return (
    <Logging.Provider value={{ logging, setLogging }}>
      {children}
    </Logging.Provider>
  );
};

export { LoginContext };
export default Logging;
