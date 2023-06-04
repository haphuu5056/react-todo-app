import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { NewTodoForm } from "./Components/NewTodoForm";
import { Todos } from "./Components/Todos";
import FilteringSelections from "./Components/FilteringSelections";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []);
  const [filtredTodos, setFiltredTodos] = useState([]);
 
  const items = todos.filter((todo) => todo.completed === false).length;
  const itemsCount = items === 1 ? ' item' : ' items';

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
  const editTodos =(editedTodo, id)=>{
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.title = editedTodo;
          }
          return todo;
        })
      );
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
        <NewTodoForm addTodos={addTodos}/>
        <Todos
          todos={filtredTodos}
          CompletedTodos={CompletedTodos}
          deleteTodo={deleteTodo}
          editTodos={editTodos}/>

        {todos.length ? <div className="selections-container">
          <span className="items-left">{ items + itemsCount} left</span>
          <FilteringSelections 
          clearCompletedTodos={clearCompletedTodos}
          filterTodos={filterTodos}
          />
          </div>: ''}
      </div>
    </div>
  );
}

export default App;
