import { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(formulario.current);
    const objetoDatos = Object.fromEntries([...datos]);
    const { todoName, todoDescripcion } = objetoDatos;

    if (!todoName.trim() || !todoDescripcion.trim())
      return console.log("Esta vacio :v");

    console.log("Enviando datos");
  };

  return (
    <div>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea 1"
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Descripcion del todo"
          defaultValue="Descripcion 1"
        />
        <select name="todoEstado" className="form-control mb-2">
          <option value="Pendiente">Pendiente</option>
          <option value="Completada">Completada</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FormNoControlado;
