import React from 'react';
import { FaBars } from 'react-icons/fa'; 
export default function MobileHeader({ onMenuClick }) {
  return (
    <header className="bg-[#1e1c2f] p-4 flex items-center justify-between md:hidden">
      <h1 className="text-xl font-bold text-white">TaskMaster</h1>
      <button onClick={onMenuClick} className="text-white p-2">
        <FaBars size={22} />
      </button>
    </header>
  );
}