import axios from "axios";

import {
  fetchTodosStarted,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoStarted,
  addTodoSuccess,
  addTodoFailure
} from "../creators/todo";

const BASE_URL = "https://629470d963b5d108c18b87da.mockapi.io/todos";

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosStarted());

  try {
    const { data } = await axios.get(BASE_URL);

    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};


export const createTodo = (title) => async (dispatch) => {
  dispatch(addTodoStarted());

  try {
    const { data } = await axios.post(BASE_URL, {
      title,
      completed: false,
    });

    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoFailure(error));
  }
};