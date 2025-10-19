import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export default function AddTodoModal({ isModalOn }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = useCallback(() => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  }, [dispatch, text]);

  return (
    <>
      {isModalOn && (
        <div className='add-todo-container'>
          <input 
            type="text" 
            value={text}
            placeholder="Add a new task"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd()
            }}
            className="add-todo-input"
          />
          
          <button 
            onClick={handleAdd}
            className="add-todo-btn"
          >Add Task</button>
        </div>
      )}
    </>
  );
}