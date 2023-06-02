import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { NewTodoForm } from "./Components/NewTodoForm";
import { Todos } from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []);
  const [filtredTodos, setFiltredTodos] = useState([]);
  const items = todos.filter((todo) => todo.completed === false).length;
  const itemsCount = items == 1 ? ' item' : ' items';

  useEffect(() => {
    filterTodos();
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (title) => {
    if (!title) return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: nanoid(),
          title,
          completed: false,
        },
      ];
    });
  };
  
  const CompletedTodos = (id, completed) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  const clearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.completed === false))
  }
  const filterTodos = (type) => {
    switch (type) {
      case "active":
         setFiltredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "completed":
         setFiltredTodos(todos.filter((todo) => todo.completed === true));
        break;
      default:
         setFiltredTodos(todos);
      break;
    }
  };
  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <div className="container">
        <NewTodoForm addTodos={addTodos} />
        <Todos
          todos={filtredTodos}
          CompletedTodos={CompletedTodos}
          deleteTodo={deleteTodo} />
        {todos.length ? (<div className="selections-container">
          <span className="items-left">{ items + itemsCount} left</span>
          <div className="buttons">
            <button className="btn" onClick={() => filterTodos("all")}>All</button>
            <button className="btn" onClick={() => filterTodos("active")}>Active</button>
            <button className="btn" onClick={() => filterTodos("completed")}>Completed</button>
          </div>
          <button onClick={clearCompletedTodos} className="clear-btn">Clear Completed</button>
        </div>): ''}
      </div>
    </div>
  );
}

export default App;
