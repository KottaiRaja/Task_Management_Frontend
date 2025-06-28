import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskForm({ initialTask, onSave }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description || '');
      setEmail(initialTask.email || '');
      setDueDate(initialTask.due_date ? initialTask.due_date.split('T')[0] : '');
      setPriority(initialTask.priority);
      setStatus(initialTask.status);
    }
  }, [initialTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !dueDate || !email.trim()) {
      alert('Please fill in all required fields: Title, Email, and Due Date.');
      return;
    }

    const taskData = {
      title,
      description,
      email,
      status,
      priority,
      due_date: dueDate,
    };
    
    await onSave(taskData);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-white max-w-xl">
      <div>
        <label className="block mb-1">Title</label>
        <input
          className="w-full p-3 bg-[#2b2644] rounded-md"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="w-full p-3 bg-[#2b2644] rounded-md"
          placeholder="Enter assignee's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea
          className="w-full p-3 bg-[#2b2644] rounded-md"
          rows={3}
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Due Date</label>
        <input
          type="date"
          className="w-full p-3 bg-[#2b2644] rounded-md"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          min={!initialTask ? today : undefined}
          required
        />
      </div>
      <div>
        <label className="block mb-1">Status</label>
        <select
          className="w-full p-3 bg-[#2b2644] rounded-md"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Priority</label>
        <select
          className="w-full p-3 bg-[#2b2644] rounded-md"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="flex gap-4 pt-4">
        <button type="button" onClick={() => navigate(-1)} className="px-6 py-2 bg-gray-600 rounded-md hover:bg-gray-500">
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-purple-600 rounded-md hover:bg-purple-500">
          {initialTask ? 'Update Task' : 'Save Task'}
        </button>
      </div>
    </form>
  );
}