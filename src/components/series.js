import React from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

function Series() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/series").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const deleteSerie = (id) => {
    axios.delete(`/api/series/${id}`).then((res) => {
      console.log(res);
    });
  };
  const renderSerie = (_serie) => {
    return (
      <tr key={_serie.id}>
        <td>{_serie.id}</td>
        <td>{_serie.name}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger close"
            onClick={() => {
              deleteSerie(_serie.id);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <Link className="btn btn-info mx-2" to={`/series/${_serie.id}`}>
            Info
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="container">
        <h1>Series</h1>
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
            to="/series/novo"
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
          <tbody>{data.map(renderSerie)}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default Series;
