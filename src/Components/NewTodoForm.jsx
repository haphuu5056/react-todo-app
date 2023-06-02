import React,{useState} from "react";

export const NewTodoForm = ({addTodos}) => {
 const [inputText, setInputText] = useState('');

   const handleSubmit = e =>{
    e.preventDefault();
    addTodos(inputText)
    setInputText('');
   }

     return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
  );
};
