
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';
import './Task.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {//When a task is deleted it is used to handle that task
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id) => {//When a task is edited it is used to handle that task
    const updatedTask = prompt('Edit Task');
    if (updatedTask) {
      dispatch(editTask(id, updatedTask));
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));//used to toggle the task
  };

  return (
    //returning tasks as a unordered list
    <ul>     
      {tasks.map((task) => (
  <li  className='bg2' key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span className="heading" onClick={() => handleToggleTask(task.id)}>{task.text}</span>
          <div>
          <button onClick={() => handleEditTask(task.id)} className='button1'>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)} className='button1'>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
