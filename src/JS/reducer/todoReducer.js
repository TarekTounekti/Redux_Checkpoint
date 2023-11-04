import { ADD_TODO, DELETE_TODO, EDIT_TODO, FILTER_TODOS, TOGGLE_TODO } from '../constants/actions-types';

// Define the initial state of the todo reducer
const initialState = {
  todos: [
    {
      id: 1,
      description: "redux check point",
      isDone: true
    },
    {
      id: 2,
      description: "face to face router",
      isDone: false
    }
  ],
  nextId: 3,
};

// Define the todo reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // Create a new todo object with the provided description and isDone status
      const newTodo = {
        id: state.nextId,
        description: action.payload.description,
        isDone: action.payload.isDone
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        nextId: state.nextId + 1,
      };

    // { id:, description }

    case EDIT_TODO:
      // Update the description of the todo with the matching id
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.description }
            : todo
        ),
      };

    case DELETE_TODO:
      // Remove the todo with the matching id from the todos array
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      
    case TOGGLE_TODO:
      // Toggle the isDone status of the todo with the matching id
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
      
    case FILTER_TODOS:
      // Update the filter value in the state
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;