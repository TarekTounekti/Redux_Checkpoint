import { ADD_TODO, DELETE_TODO, EDIT_TODO, FILTER_TODOS, SET_FILTER, TOGGLE_TODO } from '../constants/actions-types';

// Action creator to add a new todo
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

// Action creator to edit an existing todo
export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo
  };
};

// Action creator to delete a todo by its id
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

// Action creator to toggle the completion status of a todo by its id
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

// Action creator to filter the todos based on a filter type
export const filterTodos = (filterType) => {
  return {
    type: FILTER_TODOS,
    payload: filterType
  };
};

// Action creator to set the current filter
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter }
  };
};