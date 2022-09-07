import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; // para rutas
import { LoginContext } from "./context/LoginContext"; // Contexto para Login
import { ServiceOrderContext } from "./context/ServiceOrderContext"; // Contexto para Servicio tecnico
import { ActionServiceContext } from "./context/ActionServiceContext";
import { ReportModalContext } from "./context/ReportModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoginContext>
      <ServiceOrderContext>
        <ActionServiceContext>
          <ReportModalContext>
            <App />
          </ReportModalContext>
        </ActionServiceContext>
      </ServiceOrderContext>
    </LoginContext>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
