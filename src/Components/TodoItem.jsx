import {TiDelete} from 'react-icons/ti';
import {FaEdit} from 'react-icons/fa'
import { useState } from 'react';
const TodoItem = ({id,title,completed, CompletedTodos, deleteTodo,editTodos,}) => {
  const [edititing, setEditing] = useState(false);

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <li className="todo-item">
      <label htmlFor="" className={`formLabel ${completed ? "completed" : ""}`}>
        <input
          type="checkBox"
          className="inputCheck"
          checked={completed}
          onChange={(e) => CompletedTodos(id, e.target.checked)}
        />
        {edititing ? (
          <div className="edit-box">
            <input 
            type="text" 
            value={title}
            autoFocus
            onChange={(e)=> editTodos(e.target.value, id)}
            onKeyDown={handleUpdatedDone}
            className="textInput" />
          </div>
        ) : 
          title
        }
      </label>

      <div className="actions">
        <FaEdit className="edit-btn" onClick={(e) => setEditing(!edititing)} />
        <TiDelete
          className="delete-btn"
          onClick={() => deleteTodo(id)}
        />
      </div>
    </li>
  );
}

export default TodoItem