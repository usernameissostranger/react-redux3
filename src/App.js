import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from './store/actions';
import './style.css'

function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Enter a new task" 
          className="input"
        />
        <button onClick={handleAddTask} className='add-btn'>Add Tusk</button>
      </div>
      <ul className="list">
        {tasks.map(task => (
          <li key={task.id} className="item"> 
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggleTask(task.id)} 
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.description}
            </span>
            <button onClick={() => handleDeleteTask(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;