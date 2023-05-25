import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/types/todo";

// 1.
const initialState = {
  allIds: [],
  byIds: {},
};

// 2.
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case ADD_TODO: {
      // 4.
      const { id, content } = action.payload;

      // 5.
      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };

    }

    case DELETE_TODO: {
      const { id } = action.payload

      const filteredTodo = [...state.allIds].filter((todoItemId) => {
        return todoItemId !== id
    })

    return {
        ...state,

        allIds: filteredTodo,

        byIds: {
            ...state.byIds,
        },
    }
}

default:
    return state
}
  }
