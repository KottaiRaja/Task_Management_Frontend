import { useContext } from 'react';
// We will export TaskContext from its original file in the next step
import { TaskContext } from '../context/task-context';

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};