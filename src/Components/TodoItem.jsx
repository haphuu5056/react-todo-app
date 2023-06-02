import React from 'react'
import {TiDelete} from 'react-icons/ti'
const TodoItem = ({id,title,completed, CompletedTodos, deleteTodo}) => {
  return (
    <li className='todo-item'>
      <label htmlFor="" className={`formLabel ${completed ? 'completed': ''}`}>
        <input 
          type="checkBox"
          className='inputCheck'
          checked={completed}
          onChange={(e) => CompletedTodos(id, e.target.checked)}
        />
        {title}
      </label>
      <TiDelete size={30} className='delete-btn' onClick={()=>deleteTodo(id)}/>
    </li>
  );
}

export default TodoItem