import React from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

function Generos() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/genres").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const deleteGenre = (id) => {
    axios.delete(`/api/genres/${id}`).then((res) => {
      setData(data.filter((genre) => genre.id !== id));
    });
  };

  const renderGeneros = (_genero) => {
    return (
      <tr key={_genero.id}>
        <td>{_genero.id}</td>
        <td>{_genero.name}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteGenre(_genero.id)}
          >
            {" "}
            -{" "}
          </button>
          <Link className="btn btn-warning mx-2" to={`/generos/${_genero.id}`}>
            Edit
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <h1>Generos</h1>
      {data.length === 0 && (
        <div className="container">
          <div className="row">
            <div className="alert alert-warning btn mx-auto" role="alert">
              Lista vazia!
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <Link
          to="/generos/novo"
          className="btn btn-secondary mt-1 mb-2 p-2 mx-auto w-25"
        >
          Adicionar
        </Link>
      </div>
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{data.map(renderGeneros)}</tbody>
      </Table>
    </div>
  );
}

export default Generos;
