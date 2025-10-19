import Navbar from "./components/Navbar"
import './App.css'
import TodoItems from "./components/TodoItems";
import { useMemo, useState } from "react";
import AddTodoModal from "./AddTodoModal";
import { useSelector } from "react-redux";
import QuoteGen from "./QuoteGen";
import Footer from "./components/Footer";


function App() {
  const [isModalOn, setIsModalOn] = useState(false);
  const todos = useSelector((state) => state.todos);

  const toggleModal = () => {
    setIsModalOn(!isModalOn);
  };

  const completedTodoCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const totalTodoCount = todos.length;

  return (
    <div className="app">
      <Navbar onToggle={toggleModal} isModalOn={isModalOn} />
      <QuoteGen />
      <div className="progress-bar"></div>
      <p className="todo-count">Completed tasks: {completedTodoCount} / {totalTodoCount}</p>
      <TodoItems />

      <AddTodoModal 
        isModalOn={isModalOn}
      />
    </div>
  );
}

export default App