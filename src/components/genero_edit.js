import React from "react";
import axios from "axios";
import { Navigate } from "react-router";

const EditGenero = (props) => {
  const [name, setName] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {}, []);

  const onChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  console.log(props);

  const saveGenre = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      axios.put("/api/genres", { name }).then((res) => {
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
      <h1>Editar Genero </h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            placeholder="Novo nome do genero"
            onChange={onChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-secondary mt-2"
          onClick={saveGenre}
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditGenero;
