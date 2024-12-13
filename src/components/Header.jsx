import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="p-2 bg-gray-700 rounded">⏮</button>
        <button className="p-2 bg-gray-700 rounded">⏯</button>
        <button className="p-2 bg-gray-700 rounded">⏭</button>
      </div>
      <input
        type="text"
        placeholder="Cerca"
        className="bg-gray-700 p-2 rounded w-64"
      />
      <button className="text-red-500">Accedi</button>
    </header>
  );
}

export default Header