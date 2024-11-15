import React from 'react';
import TaskList from './TaskList';

const Dashboard = ({
  tasks,
  searchQuery,
  filter,
  deleteTask,
  setEditingTask,
  updateTask, // Receive updateTask here
}) => {
  const today = new Date().toISOString().split('T')[0];

  // Filter tasks based on search and filter criteria
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPriority =
      filter.priority === 'All' || task.priority === filter.priority;

    const matchesStatus =
      filter.status === 'All' ||
      (filter.status === 'Completed' && task.completed) ||
      (filter.status === 'Pending' && !task.completed);

    return matchesSearch && matchesPriority && matchesStatus;
  });

  // Categorize tasks
  const upcomingTasks = filteredTasks.filter(
    (task) => !task.completed && task.dueDate >= today
  );
  const overdueTasks = filteredTasks.filter(
    (task) => !task.completed && task.dueDate < today
  );
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div className="dashboard">
      <TaskList
        title="Upcoming Tasks"
        tasks={upcomingTasks}
        deleteTask={deleteTask}
        setEditingTask={setEditingTask}
        updateTask={updateTask} 
      />
      <TaskList
        title="Overdue Tasks"
        tasks={overdueTasks}
        deleteTask={deleteTask}
        setEditingTask={setEditingTask}
        updateTask={updateTask} 
      />
      <TaskList
        title="Completed Tasks"
        tasks={completedTasks}
        deleteTask={deleteTask}
        setEditingTask={setEditingTask}
        updateTask={updateTask} 
      />
    </div>
  );
};

export default Dashboard;
