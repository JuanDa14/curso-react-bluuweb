import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Personaje from "./Personaje";
import Loading from "./Loading";

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
      {loading ? <Loading /> : ""}
      <div className="row mt-2 g-3">
        {personajes.map((res) => (
          <Personaje personaje={res} key={res.id} />
        ))}
      </div>
    </>
  );
};

export default PintarDatos;
