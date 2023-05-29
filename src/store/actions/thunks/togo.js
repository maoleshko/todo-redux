import axios from "axios";

import {
  fetchTodosStarted,
  fetchTodosSuccess,
  fetchTodosFailure,
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