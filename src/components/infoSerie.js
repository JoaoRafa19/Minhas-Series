import React from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const InfoSerie = () => {
  const { id } = useParams();
  const [name, setName] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios.get(`/api/series/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  //custom header

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
    <div>
      <header>
        <div className="h-100" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="h-100 container">
            <div className="row">
              <div className="col-3">
                <img
                  className="img-fluid img-thumbnail"
                  alt={data.name}
                  src={data.poster}
                />
              </div>
              <div className="col-9">titulo</div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
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
          <pre>{JSON.stringify(data)}</pre>

          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={saveSerie}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoSerie;
