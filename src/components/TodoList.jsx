import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const agregarTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const eliminarTodo = (id) => {
    const nuevoTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nuevoTodos);
  };

  const editarTodo = (id) => {
    const todoEditados = todos.map((todo) => {
      if (todo.id === id) todo.todoEstado = todo.todoEstado ? false : true;
      return todo;
    });
    setTodos(todoEditados);
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h2>TodoList</h2>
      <Formulario agregarTodo={agregarTodo} />
      <ul className="list-group list-group-numbered mt-3">
        {todos.map((res) => (
          <Todo
            todo={res}
            key={res.id}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
