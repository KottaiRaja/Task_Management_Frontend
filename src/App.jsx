import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import AllTasksPage from './components/pages/AllTasks';
import CreateTaskPage from './components/pages/CreateTask';
import EditTaskPage from './components/pages/EditTask';
import { TaskProvider } from './context/TaskProvider';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEditTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // --- DEFINE THE DELETE HANDLER FUNCTION ---
  const handleDeleteTask = (taskId) => {
    // I've added a confirmation dialog for better UX
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }
  };

  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Pass all handlers to the AllTasksPage */}
            <Route
              index
              element={<AllTasksPage
                tasks={tasks}
                handleEditTask={handleEditTask}
                handleDeleteTask={handleDeleteTask}
              />}
            />
            <Route path="create" element={<CreateTaskPage handleAddTask={handleAddTask} />} />
            <Route
              path="/edit/:taskId"
              element={<EditTaskPage tasks={tasks} handleEditTask={handleEditTask} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}