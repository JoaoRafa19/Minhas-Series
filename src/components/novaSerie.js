import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const NovaSerie = () => {
  const [name, setName] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const onChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const saveSerie = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      axios.post("/api/series", { name }).then((res) => {
        setName("");
        setSuccess(true);
      });
    }
  };

  if (success) {
    return <Navigate to="/series" />;
  }

  return (
    <div className="container">
      <h1>Nova Série </h1>
      <form onSubmit={saveSerie}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            placeholder="Nome da nova série"
            onChange={onChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-secondary mt-2"
          onClick={saveSerie}
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NovaSerie;
