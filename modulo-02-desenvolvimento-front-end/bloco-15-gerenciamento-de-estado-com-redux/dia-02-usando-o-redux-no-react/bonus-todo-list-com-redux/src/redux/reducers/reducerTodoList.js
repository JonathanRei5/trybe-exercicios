import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_SELECTED_TASK
} from '../actions';

const INICIAL_STATE = {
  todoList: [],
  selectedTask: '',
}

const reducerTodoList = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      if (!action.task) return state;
      return { ...state, todoList: [...state.todoList, action.task] };

    case REMOVE_TASK:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((taskInList) => action.task !== taskInList)
        ]
      };

    case TOGGLE_SELECTED_TASK:
      const { selectedTask } = state;
      return {
        ...state,
        selectedTask: action.task === selectedTask ? '' : action.task
      };

    default:
      return state;
  }
}

export default reducerTodoList;
