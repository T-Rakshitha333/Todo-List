import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TASK:
      newState.tasks = [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
      break;
    case DELETE_TASK:
      newState.tasks = state.tasks.filter(task => task.id !== action.payload);
      break;
    case EDIT_TASK:
      newState.tasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
      );
      break;
    case TOGGLE_TASK:
      newState.tasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      break;
    default:
      return state;
  }
  localStorage.setItem('tasks', JSON.stringify(newState.tasks));
  return newState;
};

export default taskReducer;
