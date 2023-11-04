import { useState } from "react";
import { editTodo, deleteTodo, toggleTodo } from "../JS/actions/actions";
import { useDispatch } from "react-redux";

const Task = ({ id, description, isDone }) => {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newDescription.trim()) {
      // Dispatch the editTodo action with the updated todo information
      dispatch(editTodo({ id: id, description: newDescription, isDone: false }));
      setEditing(false);
    }
  };

  const handleDelete = () => {
    // Dispatch the deleteTodo action with the todo id
    dispatch(deleteTodo(id));
  };

  const handleDoubleClick = () => {
    // Dispatch the toggleTodo action with the todo id
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      {editing ? (
        // Form to edit the task description
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            Save
          </button>
        </div>
      ) : (
        // Task item display
        <li className="list-group-item">
          <p
            style={{ textDecoration: isDone ? "line-through" : "none" }}
            onDoubleClick={handleDoubleClick}
          >
            {description}
          </p>
          <div className="actions">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Del
            </button>
          </div>
        </li>
      )}
    </div>
  );
};

export default Task;