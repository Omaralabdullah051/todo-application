import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import { allCompleted, clearCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

export default function Heading() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText) {
      dispatch(addTodo(todoText));
    } else {
      alert("Please write a todo first");
    }
    setTodoText("");
  };

  const handleCompleteAllTask = () => {
    dispatch(allCompleted());
  };

  const handleClearAllCompletedTask = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleAddTodo}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={todoText}
          onChange={handleTodoText}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button type="submit" className={`w-8 h-8`}>
          ADD
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span onClick={handleCompleteAllTask}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearAllCompletedTask}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
