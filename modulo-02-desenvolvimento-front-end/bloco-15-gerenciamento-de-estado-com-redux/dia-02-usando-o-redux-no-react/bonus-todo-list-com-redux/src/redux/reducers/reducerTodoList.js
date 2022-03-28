import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_SELECTED_TASK,
  TOGGLE_DONE_TASK,
} from '../actions';

const INICIAL_STATE = {
  todoList: [],
  selectedTask: '',
}

const reducerTodoList = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (!action.task) return state;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            task: action.task,
            inProgress: false,
            done: false,
          }
        ]
      };
    }

    case REMOVE_TASK: {
      return {
        ...state,
        todoList: [
          ...state.todoList
            .filter((todo) => todo.task !== action.task)
        ]
      };
    }

    case TOGGLE_SELECTED_TASK: {
      const { selectedTask } = state;
      return {
        ...state,
        selectedTask: action.task === selectedTask ? '' : action.task
      };
    }

    case TOGGLE_DONE_TASK: {
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) => {
            if (todo.task === action.task) {
              return {
                ...todo,
                done: !todo.done,
              }
            }
            return todo;
          })
        ]
      };
    }

    default:
      return state;
  }
}

export default reducerTodoList;
