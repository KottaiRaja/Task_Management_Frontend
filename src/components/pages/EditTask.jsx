import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTasks } from '../../hooks/useTasks';
import TaskForm from '../TaskForm';

export default function EditTaskPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const taskToEdit = tasks.find(task => task.id === parseInt(taskId));

  const handleSave = async (taskData) => {

    const updatedTaskData = { ...taskData, id: parseInt(taskId) };
    await updateTask(updatedTaskData);
    navigate('/'); 
  };

  if (!taskToEdit) {
    return (
      <div className="text-white text-center p-10">
        <h2 className="text-2xl font-bold">Task Not Found</h2>
        <Link to="/" className="text-purple-400 hover:underline mt-4 inline-block">
          Go back to All Tasks
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-6">Edit Task</h2>
      <TaskForm onSave={handleSave} initialTask={taskToEdit} />
    </>
  );
}