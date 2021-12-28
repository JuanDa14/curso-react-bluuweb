import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const PintarDatos = ({ personaje = "" }) => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const consumirApi = async (personaje) => {
    try {
      setPersonajes([]);
      setLoading(true);
      const datos = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${personaje}&status=alive`
      );
      if (!datos.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Personaje no encontrado",
          icon: "error",
        });
      }
      const datosJSON = await datos.json();
      const { results } = datosJSON;
      setPersonajes(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    consumirApi(personaje);
  }, [personaje]);

  return (
    <>
      <button className="btn btn-danger mt-2" onClick={() => consumirApi("")}>
        Ver todos
      </button>
      <div className="d-flex justify-content-center">
        <div className={loading ? "spinner-border" : ""} role="status"></div>
      </div>
      <div className="row mt-2 g-3">
        {personajes.map((res) => (
          <div className="col-12 col-md-4" key={res.id}>
            <div className="card">
              <img className="card-img-top" src={res.image} alt={res.name} />
              <div className="card-body">
                <h4 className="card-title">{res.name}</h4>
                <p className="card-text">{res.species}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PintarDatos;
