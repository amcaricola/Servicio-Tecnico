import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ServicioTecnico from "./pages/ServicioTecnico";
import ServicioGrabados from "./pages/ServicioGrabado";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ServicioTecnico" element={<ServicioTecnico />} />

        <Route path="/ServicioGrabado" element={<ServicioGrabados />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
