import React from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

function Generos() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/genres").then((res) => {
      console.log(res.data.data);

      setData(res.data.data);
    });
  }, []);

  const renderGeneros = (_genero) => {
    return (
      <tr key={_genero.id}>
        <td>{_genero.id}</td>
        <td>{_genero.name}</td>
        <td>
          <button>+</button>
        </td>
      </tr>
    );
  };
  if (data.length === 0) {
    return (
      <div className="container">
        <div class="alert alert-warning" role="alert">
          Loading ...
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Generos</h1>
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
