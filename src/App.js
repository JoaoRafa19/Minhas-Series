import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generos from "./components/generos";
import Header from "./components/header";
import Home from "./components/home";
import NovoGenero from "./components/novoGenero";
import EditarGenero from "./components/editarGenero";
import Series from "./components/series";
import NovaSerie from "./components/novaSerie";
import InfoSerie from "./components/infoSerie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/generos" element={<Generos />} />
          <Route exact path="/generos/:id" element={<EditarGenero />} />
          <Route exact path="/generos/novo" element={<NovoGenero />} />
          <Route path="/series" element={<Series />} />
          <Route exact path="/series/novo" element={<NovaSerie />} />
          <Route exact path="/series/:id" element={<InfoSerie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
