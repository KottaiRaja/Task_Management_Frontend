import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full max-w-md mb-6">
      <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-[#2b2644] text-white placeholder-gray-400 border-none rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}