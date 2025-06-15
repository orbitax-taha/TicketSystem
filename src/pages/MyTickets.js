// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import CreateTicket from '../components/CreateTicket';
// import ErrorBoundary from '../components/ErrorBoundary';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';

// const MyTickets = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchTickets = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.get('/tickets');
//       const ticketData = response.data.data || [];
//       const transformedTickets = ticketData.map((ticket, index) => ({
//         srNo: index + 1, // Add serial number (1-based index)
//         id: ticket.id,
//         title: ticket.title,
//         description: ticket.description,
//         assignedTo: ticket.assignedToDep || 'Unassigned', // Use assignedToDep for display
//         status: ticket.status,
//         priorityName: ticket.priorityName || 'Not set', // Include priorityName
//         createdAt: new Date(ticket.createdAt).toLocaleString('en-GB', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit',
//           hour12: false // 24-hour format
//         }) // Format as DD/MM/YYYY HH:MM
//       }));
//       setTickets(transformedTickets);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//       setTickets([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     const transformedTicket = {
//       srNo: tickets.length + 1, // Assign next serial number
//       id: newTicket.id,
//       title: newTicket.title,
//       description: newTicket.description,
//       assignedTo: newTicket.assignedToDep || 'Unassigned', // Use assignedToDep
//       status: newTicket.status || 'OPEN',
//       priorityName: newTicket.priorityName || 'Not set', // Include priorityName
//       createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false // 24-hour format
//       }) // Format as DD/MM/YYYY HH:MM
//     };
//     setTickets([transformedTicket, ...tickets]);
//     fetchTickets(); // Refetch to ensure consistency with backend
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="myTickets" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         {isLoading ? (
//           <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
//             Loading tickets...
//           </div>
//         ) : (
//           <ErrorBoundary>
//             <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
//           </ErrorBoundary>
//         )}
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyTickets;

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketTable from '../components/TicketTable';
import CreateTicket from '../components/CreateTicket';
import ErrorBoundary from '../components/ErrorBoundary';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';

const MyTickets = ({ setCurrentPage }) => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchPriorities = async () => {
      try {
        const response = await axiosInstance.get('/priorities');
        const normalizedPriorities = (response.data || []).map(p => ({
          id: p.id,
          name: p.name.replace('Heigh', 'High')
        }));
        setPriorities(normalizedPriorities);
      } catch (error) {
        console.error('Error fetching priorities:', error);
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Failed to load priorities.'
        });
      }
    };
    fetchPriorities();
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get('/tickets');
      const ticketData = response.data.data || [];
      const transformedTickets = ticketData.map((ticket, index) => ({
        srNo: index + 1,
        id: ticket.id,
        title: ticket.title,
        description: ticket.description,
        assignedTo: ticket.assignedToDep || 'Unassigned',
        status: ticket.status,
        priority: ticket.priority?.toString() || '',
        priorityName: priorities.find(p => p.id === ticket.priority)?.name || 'Not set',
        createdAt: new Date(ticket.createdAt).toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      }));
      setTickets(transformedTickets);
    } catch (error) {
      console.error('Fetch tickets error:', error.response?.data || error.message);
      Swal.fire({
        title: 'Error Fetching Tickets',
        icon: 'error',
        text: error.response?.data?.message || 'Failed to fetch tickets'
      });
      setTickets([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTicket = (newTicket) => {
    const priorityName = priorities.find(p => p.id === newTicket.priority)?.name || 'Not set';
    const transformedTicket = {
      srNo: tickets.length + 1,
      id: newTicket.id,
      title: newTicket.title,
      description: newTicket.description,
      assignedTo: newTicket.assignedToDep || 'Unassigned',
      status: newTicket.status || 'OPEN',
      priority: newTicket.priority?.toString() || '',
      priorityName,
      createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    };
    setTickets([transformedTicket, ...tickets]);
    fetchTickets();
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="myTickets" />
      <div style={{ flex: 1 }}>
        <Header setShowTicketForm={setShowTicketForm} />
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
            Loading tickets...
          </div>
        ) : (
          <ErrorBoundary>
            <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
          </ErrorBoundary>
        )}
        {showTicketForm && (
          <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )}
      </div>
    </div>
  );
};

export default MyTickets;