import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ title, tasks, deleteTask, setEditingTask, updateTask }) => { // Receive updateTask
  return (
    <div className="task-list">
      <h3>{title} ({tasks.length})</h3>
      {tasks.length === 0 ? (
        <p>No tasks in this category.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setEditingTask={setEditingTask}
            updateTask={updateTask} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
