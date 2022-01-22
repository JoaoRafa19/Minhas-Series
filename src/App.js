import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generos from "./components/generos";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generos" element={<Generos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
