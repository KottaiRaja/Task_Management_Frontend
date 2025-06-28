import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaTasks, FaPlus, FaTimes } from 'react-icons/fa';

export default function Sidebar({ isOpen, onClose }) {
  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-2 w-full px-3 py-2 rounded-lg transition-colors ${
      isActive ? 'bg-[#2b2644]' : 'hover:bg-[#2b2644]'
    }`;

  return (
    <>

      {isOpen && (<div onClick={onClose} className="fixed inset-0 bg-black/60 z-10 md:hidden" aria-hidden="true"></div>
      )}
      <aside className={`fixed top-0 left-0 w-64 h-full p-4 bg-[#151321] text-white transform transition-transform duration-300 ease-in-out z-20
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:h-screen md:shrink-0`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">TaskMaster</h1>
          <button onClick={onClose} className="text-white p-2 md:hidden">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="space-y-2">
          <NavLink to="/" className={getLinkClass} onClick={onClose} end>
            <FaTasks /> All Tasks
          </NavLink>
          <NavLink to="/create" className={getLinkClass} onClick={onClose}>
            <FaPlus /> Create Task
          </NavLink>
        </nav>
      </aside>
    </>
  );
}