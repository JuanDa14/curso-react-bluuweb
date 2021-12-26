import { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "Pendiente",
    todoCheck: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <h2>controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          value={todo.todoName}
          onChange={handleChange}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Descripcion del todo"
          value={todo.todoDescripcion}
          onChange={handleChange}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          value={todo.todoEstado}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completada">Completada</option>
        </select>

        <div className="form-check">
          <input
            type="checkbox"
            name="todoCheck"
            className="form-check-input"
            name="todoCheck"
            checked={todo.todoCheck}
            onChange={handleChange}
          />
          <label htmlFor="">Dar Prioridad</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
