import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({ setPersonaje }) => {
  const [inputs, handleChange, resetInput] = useFormulario({
    personaje: "",
  });

  const { personaje } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!personaje.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Escriba un personaje",
        icon: "error",
      });
    }
    setPersonaje(personaje.trim().toLowerCase());
    resetInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario</h2>
      <input
        type="text"
        placeholder="Ingrese personaje"
        className="form-control"
        value={personaje}
        onChange={handleChange}
        name="personaje"
      />
      <button type="submit" className="btn btn-primary mt-3">
        Buscar
      </button>
    </form>
  );
};

export default Formulario;
