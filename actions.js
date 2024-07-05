export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
// ITt is used to delete the particular task with unique id
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
//used to update the particular task
export const editTask = (id, updatedTask) => ({
  type: EDIT_TASK,
  payload: { id, updatedTask },
});
//after completing the task u can click on task to toggle
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});
