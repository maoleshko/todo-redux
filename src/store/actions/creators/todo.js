import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../types/todo";
import { FETCH_TODOS_STARTED, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from "../types/todo";

let nextTodoId = 0;

export const fetchTodosStarted = () => ({
  type: FETCH_TODOS_STARTED,
});

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: {
    todos,
  },
});

export const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: {
    error,
  },
})

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});


export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
})
