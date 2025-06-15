import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import MyTickets from './pages/MyTickets';
// import Queues from './pages/Queues';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'myTickets':
        return <MyTickets setCurrentPage={setCurrentPage} />;
        //   case 'queues':
        // return <Queues setCurrentPage={setCurrentPage} />;
      default:
        return <Dashboard setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {renderPage()}
    </div>
  );
};

export default App;