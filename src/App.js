import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generos from "./components/generos";
import Header from "./components/header";
import Home from "./components/home";
import axios from "axios";
import NovoGenero from "./components/NovoGenero";

function App() {
  const [data, setData] = React.useState({});
  useEffect(() => {
    axios.get("/api").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/generos" element={<Generos />} />
          <Route exact path="/generos/novo" element={<NovoGenero />} />
        </Routes>
        <p>{JSON.stringify(data)}</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
