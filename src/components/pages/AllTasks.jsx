import React, { useState, useMemo } from 'react';
import { useTasks } from '../../hooks/useTasks';
import Search from '../Search';
import TaskTable from '../TaskTable';

export default function AllTasksPage() {

  const { tasks, loading, error, updateTask, deleteTask } = useTasks();

  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'dueDate', direction: 'ascending' });
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');


  const processedTasks = useMemo(() => {
    let processableTasks = [...tasks];

    if (searchQuery) {
      processableTasks = processableTasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'All') {
      processableTasks = processableTasks.filter(task => task.status === statusFilter);
    }

    if (priorityFilter !== 'All') {
      processableTasks = processableTasks.filter(task => task.priority === priorityFilter);
    }

    if (sortConfig.key) {
      processableTasks.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return processableTasks;
  }, [tasks, searchQuery, statusFilter, priorityFilter, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  if (loading) {
    return <div className="text-white text-center p-10 text-xl">Loading tasks...</div>;
  }
  if (error) {
    return <div className="text-white text-center p-10 text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-4">All Tasks</h2>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex-1 overflow-auto">
        <TaskTable
          tasks={processedTasks}
          requestSort={requestSort}
          sortConfig={sortConfig}
          handleDeleteTask={deleteTask}
          handleEditTask={updateTask}
          setStatusFilter={setStatusFilter}
          setPriorityFilter={setPriorityFilter}
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
        />
      </div>
    </>
  );
}