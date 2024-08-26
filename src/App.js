import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmployeeOverview from './components/EmployeeOverview';
import EmployeeTable from './components/EmployeeTable';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <div className="main-content">
          <EmployeeOverview />
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
}

export default App;
