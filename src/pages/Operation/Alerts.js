// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
// import CreateTicket from '../../components/CreateTicket';

// const Alerts = ({ setCurrentPage }) => {
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const handleCreateTicket = (newTicket) => {
//     // Since this page is for upcoming features, we won't handle ticket creation logic here
//     // But we'll keep the function to maintain consistency with CreateTicket component
//     setShowTicketForm(false);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="alerts" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <div style={{ 
//           padding: '20px', 
//           textAlign: 'center', 
//           color: '#172b4d',
//           marginTop: '60px' // To account for the fixed header
//         }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' , marginLeft:"200px" }}>
//             Alert Management - Upcoming Features
//           </h2>
//           <p style={{ fontSize: '16px', color: '#5e6c84' , marginLeft:"200px"}}>
//             This section is under development. Stay tuned for alert monitoring and management features!
//           </p>
//         </div>
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Alerts;

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CreateTicket from '../../components/CreateTicket';

const Alerts = () => {
  const [showTicketForm, setShowTicketForm] = useState(false);

  const handleCreateTicket = (newTicket) => {
    setShowTicketForm(false);
  };

  // Placeholder data for CreateTicket
  const priorities = [
    { id: 1, name: 'Low' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'High' },
  ];

  const users = [
    { id: 1, username: 'Sumit Kumar' },
    { id: 2, username: 'John Doe' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header setShowTicketForm={setShowTicketForm} />
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            color: '#172b4d',
            marginTop: '60px',
            marginLeft: '210px',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            Alert Management - Upcoming Features
          </h2>
          <p style={{ fontSize: '16px', color: '#5e6c84' }}>
            This section is under development. Stay tuned for alert monitoring and management features!
          </p>
        </div>
        {showTicketForm && (
          <CreateTicket
            onClose={() => setShowTicketForm(false)}
            onCreate={handleCreateTicket}
            priorities={priorities}
            users={users}
          />
        )}
      </div>
    </div>
  );
};

export default Alerts;