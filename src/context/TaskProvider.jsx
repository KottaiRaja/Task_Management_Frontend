import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { TaskContext, initialState } from './task-context';

// Define the API base URL
const API_URL = 'http://localhost:5000/api/tasks';


// 3. Create the reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload, loading: false, error: null };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === action.payload.id ? action.payload : task)),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

// 4. Create and EXPORT the Provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // --- API Functions ---
  const fetchTasks = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: 'SET_TASKS', payload: response.data });
    } catch (err) {
      console.error("Failed to fetch tasks:", err); // Add more detailed logging
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      dispatch({ type: 'ADD_TASK', payload: response.data });
    } catch (err) {
      console.error("Failed to add task:", err);
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  };

  const updateTask = async (taskData) => {
    try {
      await axios.put(`${API_URL}/${taskData.id}`, taskData);
      dispatch({ type: 'UPDATE_TASK', payload: taskData });
    } catch (err) {
      console.error("Failed to update task:", err);
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  };

  const deleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`${API_URL}/${taskId}`);
        dispatch({ type: 'DELETE_TASK', payload: taskId });
      } catch (err) {
        console.error("Failed to delete task:", err);
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    }
  };

  // Fetch tasks on initial component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        ...state,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};