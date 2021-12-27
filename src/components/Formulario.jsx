import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {
  const initState = {
    todoName: "",
    todoDescripcion: "",
    todoEstado: "Pendiente",
    todoPrioridad: false,
  };

  const [inputs, handleChange, resetInput] = useFormulario(initState);

  const { todoName, todoDescripcion, todoEstado, todoPrioridad } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoName.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error",
        text: "Coloque un Todo",
        icon: "error",
      });
      return;
    }
    if (!todoDescripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error",
        text: "Coloque una Descripcion",
        icon: "error",
      });
      return;
    }

    agregarTodo({
      todoName,
      todoDescripcion,
      todoEstado: todoEstado === "Pendiente" ? true : false,
      todoPrioridad,
      id: Date.now(),
    });

    Swal.fire({
      title: "Exito",
      text: "Tarea Agregada",
      icon: "success",
    });

    resetInput();
  };

  return (
    <>
      <h3>Agregar Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          className="form-control mb-2"
          name="todoName"
          value={todoName}
          onChange={handleChange}
        />
        <textarea
          name="todoDescripcion"
          placeholder="Ingrese Descripcion"
          className="form-control mb-2"
          value={todoDescripcion}
          onChange={handleChange}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          value={todoEstado}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <div className="form-check mb-2">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="todoPrioridad"
              checked={todoPrioridad}
              onChange={handleChange}
            />
            Dar prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
