
import './App.css'
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MyMain from './components/myMain';


const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Header/>
        <main className="flex-1 overflow-y-auto p-4">
          <MyMain/>
        </main>
      </div>
    </div>
  );
};

export default App
