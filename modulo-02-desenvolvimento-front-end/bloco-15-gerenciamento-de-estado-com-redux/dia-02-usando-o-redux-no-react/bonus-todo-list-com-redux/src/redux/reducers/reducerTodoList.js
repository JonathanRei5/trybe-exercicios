import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_SELECTED_TASK,
  TOGGLE_DONE_TASK,
  TOGGLE_INPROGRESS_TASK,
  CHANGE_FILTER,
} from '../actions';

const INICIAL_STATE = {
  todoList: [],
  selectedTask: '',
  lastID: 0,
  filter: 'all',
}

const reducerTodoList = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (!action.task) return state;
      if (state.todoList.some(({ task }) => task === action.task)) return state;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.lastID,
            task: action.task,
            inProgress: false,
            done: false,
          }
        ],
        lastID: state.lastID + 1,
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
                inProgress: todo.done ? todo.inProgress : false,
              }
            }
            return todo;
          })
        ]
      };
    }

    case TOGGLE_INPROGRESS_TASK: {
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) => {
            if (todo.task === action.task) {
              return {
                ...todo,
                inProgress: !todo.inProgress,
                done: todo.inProgress ? todo.done : false,
              }
            }
            return todo;
          })
        ]
      };
    }

    case CHANGE_FILTER: {
      return {
        ...state,
        filter: action.filter,
      }
    }

    default:
      return state;
  }
}

export default reducerTodoList;
