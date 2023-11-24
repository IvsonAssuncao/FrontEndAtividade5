// TaskList.js
import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleEditTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="form-list" class="">
      <h1 class="" >Lista de Tarefas</h1>
      <div className='row'>
        <div className='col-8'> 
          <input className='form-control'         
            type="text"
            placeholder="Digite uma tarefa..."
            value={newTask}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleAddTask();
            }}
          />
        </div>
        <div className='col-2'>
          <button class="btn btn-outline-primary" onClick={handleAddTask}>Adicionar</button>
        </div>
        
      </div>
      <div >
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
