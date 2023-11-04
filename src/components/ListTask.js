import { useSelector } from "react-redux";
import Task from "./Task";
import { filterTodos } from "../JS/actions/actions";
import { useDispatch } from "react-redux";

const ListTask = () => {
  // Get the todos and filter from the Redux store
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // Function to handle filter selection
  const handleFilter = (filterType) => {
    dispatch(filterTodos(filterType));
  };

  // Filter the todos based on the selected filter
  const todosFiltered = todos.filter((todo) => {
    if (filter === "done") {
      return todo.isDone;
    } else if (filter === "notDone") {
      return !todo.isDone;
    } else {
      return true;
    }
  });

  return (
    <>
      {/* Filter buttons */}
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleFilter("done")}
        >
          Done
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleFilter("notDone")}
        >
          Not Done
        </button>
      </div>

      {/* List of filtered tasks */}
      <ul className="list-group mt-4">
        {todosFiltered.map((todo) => (
          <Task
            key={todo.id}
            id={todo.id}
            description={todo.description}
            isDone={todo.isDone}
          />
        ))}
      </ul>
    </>
  );
};

export default ListTask;