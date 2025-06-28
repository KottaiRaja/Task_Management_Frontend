import { createContext } from 'react';

// 1. Define the initial state for the context
export const initialState = {
  tasks: [],
  loading: true,
  error: null,
};

// 2. Create and EXPORT the context itself
export const TaskContext = createContext(initialState);