import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from "./actions";

const initState = [];
export const todos = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = { text, isCompleted: false };

      return state.concat(newTodo);
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }

    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;

      return state.map(td => {
        console.log(td);
        if (td.text === text) return { ...td, isCompleted: true };
        return td;
      });
    }

    default:
      return state;
  }
};
