// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import TicketForm from '../components/TicketForm';
// import Swal from 'sweetalert2';

// const Dashboard = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const fetchTickets = async () => {
//     try {
//       // Placeholder for API call to fetch tickets
//       // const response = await axiosInstance.get('/tickets');
//       // setTickets(response.data);

//       // Mock data for now
//       const mockTickets = [
//         { id: 'ITSM-1234', type: 'Request', summary: 'Add access to Jira', description: 'User needs access to Jira for project management', reporter: 'Product-Manager', assignee: 'Sammy-ServiceDesk', status: 'WAITING FOR SUPPORT', created: '24/Sep/2020', timeToResolve: '16m' },
//         // { id: 'ITSM-1233', type: 'Report a system problem', summary: "Barclay Inc. is slow", description: 'System performance issues during peak hours', reporter: 'ServiceDesk-Manager', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '3h 44m' },
//         // { id: 'ITSM-1232', type: 'Report a system problem', summary: "Can't access POS System", description: 'POS system inaccessible for sales team', reporter: 'Developer', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '3h 44m' },
//         // { id: 'ITSM-1231', type: 'Broken hardware', summary: "Can't access WEB System", description: 'Hardware failure affecting web access', reporter: 'ServiceDesk-Agent', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '3h 44m' },
//         // { id: 'ITSM-1230', type: 'Request access', summary: "Admin access to Jira", description: 'Requesting admin privileges in Jira', reporter: 'Product-Manager', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1229', type: 'Get a guest wifi account', summary: 'Guest wifi access', description: 'Need wifi access for a guest', reporter: 'Data-Developer', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1228', type: 'Request new software', summary: 'Add Office to Mac', description: 'Install Microsoft Office on Mac', reporter: 'Product-Manager', assignee: 'Serena-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1227', type: 'Request new hardware', summary: 'Need new keyboard', description: 'Current keyboard is malfunctioning', reporter: 'ServiceDesk-Agent', assignee: 'Serena-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1226', type: 'Request new hardware', summary: 'Set up VPN', description: 'Need VPN setup for remote access', reporter: 'Christy-ServiceDesk', assignee: 'Serena-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1225', type: 'Request mobile device', summary: 'Need a new iPhone', description: 'Requesting a new iPhone for work', reporter: 'Change-Manager', assignee: 'Sammy-ServiceDesk', status: 'WAITING FOR APPROVAL', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1224', type: 'Get IT help', summary: 'Investigate website slowness', description: 'Website performance issues reported', reporter: 'Carly-Chief-Exec', assignee: 'Sammy-ServiceDesk', status: 'UNDER REVIEW', created: '23/Sep/2020', timeToResolve: '7h 44m' }
//       ];
//       setTickets(mockTickets);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     setTickets([newTicket, ...tickets]);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <TicketTable tickets={tickets} setTickets={setTickets} />
//         {showTicketForm && (
//           <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketTable from '../components/TicketTable';
import TicketForm from '../components/TicketForm';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';

const Dashboard = ({ setCurrentPage }) => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusCounts, setStatusCounts] = useState({});

  const fetchTickets = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get('/tickets');
      const ticketData = response.data.data || [];
      const transformedTickets = ticketData.map(ticket => ({
        type: 'Request',
        title: ticket.title,
        id: ticket.id,
        description: ticket.description,
        reporter: 'Unknown',
        assignedTo: ticket.assignedTo || 'Unassigned',
        status: ticket.status,
        createdAt: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
        timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
      }));
      setTickets(transformedTickets);

      // Calculate status counts for the dashboard summary
      const counts = transformedTickets.reduce((acc, ticket) => {
        acc[ticket.status] = (acc[ticket.status] || 0) + 1;
        return acc;
      }, {});
      setStatusCounts(counts);
    } catch (error) {
      Swal.fire({
        title: 'Error Fetching Tickets',
        icon: 'error',
        text: error.message || 'Failed to fetch tickets'
      });
      setTickets([]);
      setStatusCounts({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = (newTicket) => {
    const transformedTicket = {
      type: 'Request',
      title: newTicket.title,
      id: newTicket.id,
      description: newTicket.description,
      reporter: 'Unknown',
      assignedTo: newTicket.assignedTo || 'Unassigned',
      status: newTicket.status || 'OPEN',
      createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleDateString('en-GB'),
      timeToResolve: newTicket.resolvedAt ? 'Resolved' : '0m',
    };
    setTickets([transformedTicket, ...tickets]);
    fetchTickets(); // Refetch to ensure consistency
  };

  const summaryStyle = {
    display: 'flex',
    gap: '20px',
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#f4f5f7',
    borderRadius: '4px',
  };

  const summaryCardStyle = {
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    flex: 1,
    textAlign: 'center',
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
      <div style={{ flex: 1 }}>
        <Header setShowTicketForm={setShowTicketForm} />
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
            Loading tickets...
          </div>
        ) : (
          <>
            <div style={{ padding: '20px', marginTop: '60px', marginLeft: '250px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
                Dashboard Summary
              </h2>
              <div style={summaryStyle}>
                {Object.entries(statusCounts).map(([status, count]) => (
                  <div key={status} style={summaryCardStyle}>
                    <div style={{ fontSize: '14px', color: '#172b4d' }}>{status}</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#172b4d' }}>{count}</div>
                  </div>
                ))}
              </div>
            </div>
            <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
          </>
        )}
        {showTicketForm && (
          <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;