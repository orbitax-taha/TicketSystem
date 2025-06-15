// import React, { useState } from 'react';
// import Dashboard from '../src/pages/Projects/Dashboard'
// import MyTickets from '../src/pages/Projects/MyTickets';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('dashboard');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'dashboard':
//         return <Dashboard setCurrentPage={setCurrentPage} />;
//       case 'myTickets':
//         return <MyTickets setCurrentPage={setCurrentPage} />;
//       default:
//         return <Dashboard setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
//       {renderPage()}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import Dashboard from '../src/pages/Projects/Dashboard';
// import MyTickets from '../src/pages/Projects/MyTickets';
// import Queues from '../src/pages/Projects/Queues'; // Import the Queues component
// import Incident from '../src/pages/Projects/Incident';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('dashboard');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'dashboard':
//         return <Dashboard setCurrentPage={setCurrentPage} />;
//       case 'myTickets':
//         return <MyTickets setCurrentPage={setCurrentPage} />;
//       case 'queues':
//         return <Queues setCurrentPage={setCurrentPage} />; // Add Queues case
//       case 'incidents':
//         return <Incident setCurrentPage={setCurrentPage} />;  
//       default:
//         return <Dashboard setCurrentPage={setCurrentPage} />;
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
//       {renderPage()}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import Dashboard from '../src/pages/Projects/Dashboard';
import MyTickets from '../src/pages/Projects/MyTickets';
import Queues from '../src/pages/Projects/Queues';
import Incident from '../src/pages/Projects/Incident';
import Problems from '../src/pages/Projects/Problems';
import Changes from '../src/pages/Projects/Changes';

import Alerts from '../src/pages/Operation/Alerts';
import Oncall from "../src/pages/Operation/Oncall";

import Reports from "../src/pages/Reports/Reports"

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'myTickets':
        return <MyTickets setCurrentPage={setCurrentPage} />;
      case 'queues':
        return <Queues setCurrentPage={setCurrentPage} />;
      case 'incident':
        return <Incident setCurrentPage={setCurrentPage} />;
      case 'problems':
        return <Problems setCurrentPage={setCurrentPage} />;  
      case 'changes':
        return <Changes setCurrentPage={setCurrentPage} />; 
      case 'alerts':
        return <Alerts setCurrentPage={setCurrentPage} />; 
      case 'oncall':
        return <Oncall setCurrentPage={setCurrentPage} />; 
      case 'reports':
        return <Reports setCurrentPage={setCurrentPage} />;     
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