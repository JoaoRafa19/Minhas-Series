import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generos from "./components/generos";
import Header from "./components/header";
import Home from "./components/home";
import NovoGenero from "./components/NovoGenero";
import EditGenero from "./components/genero_edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/generos" element={<Generos />} />
          <Route exact path="/generos/:id" element={<EditGenero />} />
          <Route exact path="/generos/novo" element={<NovoGenero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
