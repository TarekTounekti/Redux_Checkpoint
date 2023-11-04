import { createStore } from "redux";
import todoReducer from "../reducer/todoReducer";

// Create the Redux store with the todoReducer as the reducer
const store = createStore(todoReducer);

export default store;