import React from "react";

const NovoGenero = () => {
  return (
    <div>
      <h1>Novo Genero</h1>
      <form>
        <div className="form-group">
          <label>Genero</label>
          <input type="text" className="form-control" id="inputGenre" />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkGenre"
            />
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NovoGenero;
