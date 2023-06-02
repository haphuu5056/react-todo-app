import React from "react";
import TodoItem from "./TodoItem";

export const Todos = ({ todos, CompletedTodos, deleteTodo }) => {
  return (
    <ul className="todos-container">
      {todos.length <=0 && ''}
      {todos.map((todo) => {
        return (
          <TodoItem
           deleteTodo={deleteTodo}
           {...todo} key={todo.id} CompletedTodos={CompletedTodos} />
        );
      })}
    </ul>
  );
};
