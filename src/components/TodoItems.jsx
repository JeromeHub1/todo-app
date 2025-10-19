import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../todoSlice";


export default function TodoItems() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <h1 className="before-todos">Click + to add tasks.</h1>
      ) : todos.map((todo) => (
        <div className="todos-wrapper">
        <li>
          <div className="left-side">
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="checkbox"
            />
            {todo.text} 
          </div>
          <button 
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="delete-btn"
          >
            <i class="ri-delete-bin-2-line"></i>
          </button>
        </li>
        </div>
      ))}
    </ul>
  );
}