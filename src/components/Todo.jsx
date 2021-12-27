const Todo = ({ todo, eliminarTodo, editarTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {todo.todoName} ({todo.todoEstado ? "Pendiente" : "Finalizado"})
        </div>
        {todo.todoDescripcion}
        <div>
          <button
            className="btn btn-danger me-2"
            onClick={() => eliminarTodo(todo.id)}
          >
            Eliminar
          </button>
          <button className="btn btn-warning" onClick={() => editarTodo(todo.id)}>
            Editar
          </button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {todo.todoPrioridad ? "Prioritario" : "No Prioritario"}
      </span>
    </li>
  );
};

export default Todo;
