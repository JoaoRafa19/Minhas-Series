import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const NovoGenero = () => {
  const [name, setName] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const onChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const saveGenre = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      axios.post("/api/genres", { name }).then((res) => {
        setName("");
        setSuccess(true);
      });
    }
  };

  if (success) {
    return <Navigate to="/generos" />;
  }

  return (
    <div className="container">
      <h1>Novo Genero </h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            placeholder="Nome do novo genero"
            onChange={onChange}
          />
        </div>
        <div className="mt-2">
          <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
        </div>
        <button type="button" className="btn btn-secondary" onClick={saveGenre}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NovoGenero;
