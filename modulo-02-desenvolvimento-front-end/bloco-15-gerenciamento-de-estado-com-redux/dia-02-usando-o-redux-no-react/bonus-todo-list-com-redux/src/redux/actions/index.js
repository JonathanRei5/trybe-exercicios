export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_SELECTED_TASK = 'TOGGLE_SELECTED_TASK';

export const actionAddTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const actionRemoveTask = (task) => ({
  type: REMOVE_TASK,
  task,
});

export const actionToggleSelectedTask = (task) => ({
  type: REMOVE_TASK,
  task,
});
