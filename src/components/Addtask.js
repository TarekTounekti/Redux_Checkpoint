import { useDispatch } from "react-redux";
import { addTodo } from "../JS/actions/actions";
import { useState } from "react";

const AddTask = () => {
  const dispatch = useDispatch();

  const [todoDescription, setTodoDescription] = useState("");

  const handleTodo = () => {
    if (todoDescription.trim()) {
      // Create a new todo object with the inputted description
      const newTodo = {
        description: todoDescription,
      };

      // Dispatch the addTodo action with the newTodo object
      dispatch(addTodo(newTodo));

      // Clear the input field by resetting the todoDescription state
      setTodoDescription("");
    }
  };

  return (
    <div className="input-group">
      {/* Input field for the todo description */}
      <input
        type="text"
        className="form-control"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />

      {/* Button to add the todo */}
      <button className="btn btn-primary" onClick={() => handleTodo()}>
        Add
      </button>
    </div>
  );
};

export default AddTask;