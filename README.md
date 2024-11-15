# Task Manager Application
Live Demo link: https://satyamsinghelitefitai.netlify.app/
## Overview

The **Task Manager Application** is a simple yet powerful tool designed to help users organize, manage, and prioritize their daily tasks efficiently. Built with **React.js**, this application emphasizes core functionality and a user-friendly interface, ensuring that users can effortlessly add, edit, delete, search, and filter tasks. With features like task prioritization and categorization into upcoming, overdue, and completed tasks, the application provides a comprehensive overview of your to-do list.

## Features

- **Dashboard**: 
  - Displays a categorized list of tasks including Upcoming, Overdue, and Completed tasks.
- **Task Management**:
  - **Add Tasks**: Create new tasks with a title, description, due date, and priority level.
  - **Edit Tasks**: Modify existing tasks to update their details.
  - **Delete Tasks**: Remove tasks that are no longer needed.
- **Priority Levels**:
  - Assign tasks with **High**, **Medium**, or **Low** priority to effectively manage workload.
- **Search and Filter**:
  - **Search**: Quickly find tasks using keywords.
  - **Filter**: Narrow down tasks based on priority and completion status.
- **Local Storage**:
  - All tasks are stored locally in the browser, ensuring data persistence across sessions without the need for a backend server.

## Technologies Used

- **Frontend**:
  - [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- **State Management**:
  - React's built-in `useState` and `useEffect` hooks.
- **Styling**:
  - CSS for styling components and ensuring a responsive design.
- **Storage**:
  - Browser's `localStorage` for data persistence.

## Setup Instructions

Follow the steps below to set up and run the Task Manager Application on your local machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/task-manager.git

2. **Navigate to the Project Directory**

   ```bash
   cd task-manager
3. **Install Dependencies**
   using npm:
   ```bash
   npm install

### Running the Application
Start the development server with the following command:
  ```bash
    npm start
```
This will launch the application in your default browser at http://localhost:3000. If it doesn't open automatically, you can manually navigate to the URL.

### Usage
1. **Adding a Task**: Fill in the Title, Description, Due Date, and Priority in the Add New Task form. Click the Add Task button to save the task.
2. **Editing a Task**:Click the Edit button on the task you wish to modify. The task details will populate the form at the top. Make the necessary changes and click Update Task.
3. **Deleting a Task**: Click the Delete button on the task you want to remove. Confirm the deletion in the prompt.
4.  **Toggling Task Completion**: Click the checkbox next to a task to mark it as completed or pending.
5. **Searching and Filtering**: Use the Search bar to find tasks by keywords. Use the Priority and Status dropdowns to filter tasks based on their priority level and completion status.

### Assumptions Made
During the development of the Task Manager Application, the following assumptions were made:

1. **Single-User Application**: The application is designed for individual use without user authentication. All tasks are stored locally in the browser's localStorage.
2. **Local Storage for Data Persistence**: Chose localStorage for simplicity and to avoid the complexity of setting up a backend server. This means tasks are only accessible on the device where they were created.
3. **Unique Task Identification**:Used Date.now() to generate unique IDs for tasks. This approach assumes that tasks are not created simultaneously within the same millisecond.
4. **Basic Styling**: Implemented a clean and simple UI using CSS without relying on external UI libraries to keep the project lightweight.
