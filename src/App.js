// src/App.js

import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm';
import SearchAndFilter from './components/SearchAndFilter';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ priority: 'All', status: 'All' });
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Update an existing task
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  // Delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
      />
      <SearchAndFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
      />
      <Dashboard
        tasks={tasks}
        searchQuery={searchQuery}
        filter={filter}
        deleteTask={deleteTask}
        setEditingTask={setEditingTask}
        updateTask={updateTask} 
      />
    </div>
  );
}

export default App;
