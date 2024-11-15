import React from 'react';

const TaskItem = ({ task, deleteTask, setEditingTask, updateTask }) => { // Receive updateTask
  const { title, description, dueDate, priority, completed } = task;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  const handleEdit = () => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCompletion = () => {
    const updatedTask = { ...task, completed: !task.completed };
    updateTask(updatedTask); // Use updateTask here
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleCompletion}
        />
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <strong>Due:</strong> {dueDate}
        </p>
        <p>
          <strong>Priority:</strong> {priority}
        </p>
      </div>
      <div className="task-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
