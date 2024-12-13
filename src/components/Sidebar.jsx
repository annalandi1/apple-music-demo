import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-6">Music</h1>
      <nav>
        <ul>
          <li className="mb-4 hover:text-red-500 cursor-pointer">Home</li>
          <li className="mb-4 hover:text-red-500 cursor-pointer">Novità</li>
          <li className="hover:text-red-500 cursor-pointer">Radio</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;