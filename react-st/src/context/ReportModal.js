import React, { useState } from "react";

const ReportModal = React.createContext({});

const ReportModalContext = ({ children }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [idToReport, setIdToReport] = useState("");

  return (
    <ReportModal.Provider
      value={{ activeModal, setActiveModal, idToReport, setIdToReport }}
    >
      {children}
    </ReportModal.Provider>
  );
};

export { ReportModalContext };
export default ReportModal;
