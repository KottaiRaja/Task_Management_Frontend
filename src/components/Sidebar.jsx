import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTasks, FaClock, FaCheckCircle, FaPlus } from 'react-icons/fa';

export default function Sidebar() {
  
  const getLinkClass = ({ isActive }) => 
    `flex items-center gap-2 w-full px-3 py-2 rounded-lg transition-colors ${
      isActive ? 'bg-[#2b2644]' : 'hover:bg-[#2b2644]'
    }`;

  return (
    <aside className="w-64 p-4 bg-[#151321] text-white min-h-screen shrink-0">
      <h1 className="text-xl font-bold mb-6">Task Master</h1>
      <nav className="space-y-2">
        <NavLink to="/" className={getLinkClass}>
          <FaTasks /> All Tasks
        </NavLink>
        <NavLink to="/create" className={getLinkClass}>
          <FaPlus /> Create Task
        </NavLink>
      </nav>
    </aside>
  );
}