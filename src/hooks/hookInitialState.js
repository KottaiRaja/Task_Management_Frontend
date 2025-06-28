import {createContext } from 'react';

const initialState = {
  tasks: [],
  loading: true,
  error: null,
};

export const TaskContext = createContext(initialState);