import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

export default function TaskTable({tasks, requestSort, sortConfig, handleDeleteTask, setStatusFilter, setPriorityFilter, statusFilter, priorityFilter,}) {

  const [openDropdown, setOpenDropdown] = useState(null); 

  const SortableHeader = ({ children, name }) => {
    const isSorted = sortConfig.key === name;
    const Icon = isSorted ? (sortConfig.direction === 'ascending' ? FaSortUp : FaSortDown) : FaSort;
    return (
      <th className="p-3 font-semibold">
        <button onClick={() => requestSort(name)} className="flex items-center gap-2 hover:text-white transition-colors">
          {children}
          <Icon className={isSorted ? 'text-white' : 'text-gray-500'} />
        </button>
      </th>
    );
  };
  

  const FilterableHeader = ({ children, name, options, onFilterChange, currentFilter }) => {
    const isFilterActive = currentFilter !== 'All';
    const toggleDropdown = () => {
      setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
      <th className="p-3 font-semibold relative">
        <button onClick={toggleDropdown} className="flex items-center gap-2 hover:text-white transition-colors">
          {children}
          <div className={`w-2 h-2 rounded-full ${isFilterActive ? 'bg-purple-400' : 'bg-transparent'}`}></div>
        </button>
        {openDropdown === name && (
          <div className="absolute top-full mt-2 bg-[#2b2644] rounded-md shadow-lg z-10 w-32">
            {options.map(option => (
              <button
                key={option}
                onClick={() => {
                  onFilterChange(option);
                  setOpenDropdown(null);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-purple-600"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </th>
    );
  };

  return (
    <div className="rounded-lg">
      <table className="min-w-full bg-[#1e1c2f] text-white text-sm rounded-lg">
        <thead>
          <tr className="text-left text-gray-300 border-b border-gray-700">
            <SortableHeader name="title">Task</SortableHeader>
            <SortableHeader name="dueDate">Due Date</SortableHeader>

            <FilterableHeader
              name="status"
              options={['All', 'Pending', 'Completed']}
              onFilterChange={setStatusFilter}
              currentFilter={statusFilter}
            >
              Status
            </FilterableHeader>
            <FilterableHeader
              name="priority"
              options={['All', 'High', 'Medium', 'Low']}
              onFilterChange={setPriorityFilter}
              currentFilter={priorityFilter}
            >
              Priority
            </FilterableHeader>
            <th className="p-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>

          {tasks.length > 0 ? (
            tasks.map(task => (
              <tr key={task.id} className="border-t border-gray-700">
                <td className="p-3 font-medium">{task.title}</td>
                <td className="p-3 text-gray-300">{new Date(task.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                <td className="p-3"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${task.status === 'Pending' ? 'bg-yellow-600 text-white' : 'bg-green-600 text-white'}`}>{task.status}</span></td>
                <td className="p-3"><span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">{task.priority}</span></td>
                <td className="p-3">
                  <div className="flex gap-4 items-center">
                    <Link to={`/edit/${task.id}`} className="text-purple-400 hover:underline">Edit</Link>
                    <button onClick={() => handleDeleteTask(task.id)} className="text-red-500 hover:underline">Delete</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="text-center p-6 text-gray-400">No tasks found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}