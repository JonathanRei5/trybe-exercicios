export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_SELECTED_TASK = 'TOGGLE_SELECTED_TASK';
export const TOGGLE_DONE_TASK = 'TOGGLE_DONE_TASK';
export const TOGGLE_INPROGRESS_TASK = 'TOGGLE_INPROGRESS_TASK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const actionAddTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const actionRemoveTask = (task) => ({
  type: REMOVE_TASK,
  task,
});

export const actionToggleSelectedTask = (task) => ({
  type: TOGGLE_SELECTED_TASK,
  task,
});

export const actionToggleDoneTask = (task) => ({
  type: TOGGLE_DONE_TASK,
  task,
});

export const actionToggleInProgressTask = (task) => ({
  type: TOGGLE_INPROGRESS_TASK,
  task,
});

export const actionChangeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
