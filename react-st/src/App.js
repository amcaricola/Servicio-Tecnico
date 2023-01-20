import "./App.css";
import "./AppMobile.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ServicioTecnico from "./pages/ServicioTecnico";
import ServicioGrabados from "./pages/ServicioGrabado";
import Compartir from "./pages/Compartir";
import { GlobalContexProvider } from "./context/GlobalContex";
import Header from "./components/Header";

export default function App() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <div className="App">
      {id && (
        <Routes>
          <Route path="/ServicioTecnico/:id" element={<Compartir />} />
        </Routes>
      )}

      {!id && (
        <GlobalContexProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home word="Bienvenido!" />} />

            <Route path="/ServicioTecnico" element={<ServicioTecnico />} />

            <Route path="/ServicioGrabado" element={<ServicioGrabados />} />

            <Route
              path="*"
              element={
                <Home
                  word="ERROR 404... =("
                  word2='Parece que estas perdido... te recomendamos ir a "inicio"'
                />
              }
            />
          </Routes>
        </GlobalContexProvider>
      )}
    </div>
  );
}
