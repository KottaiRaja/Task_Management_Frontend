import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../../hooks/useTasks';
import TaskForm from '../TaskForm';

export default function CreateTaskPage() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSave = async (taskData) => {
    await addTask(taskData);
    navigate('/');
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-6">Add New Task</h2>
      <TaskForm onSave={handleSave} />
    </>
  );
}