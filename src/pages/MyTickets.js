import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketTable from '../components/TicketTable';
import TicketForm from '../components/TicketForm';
import Swal from 'sweetalert2';

const MyTickets = ({ setCurrentPage }) => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);

  const fetchTickets = async () => {
    try {
      // Placeholder for API call to fetch user's tickets
      // const response = await axiosInstance.get('/my-tickets');
      // setTickets(response.data);

      // Mock data for now (filtered for a specific assignee)
      const mockTickets = [
        { id: 'ITSM-1234', type: 'Request', summary: 'Add access to Jira', description: 'User needs access to Jira for project management', reporter: 'Product-Manager', assignee: 'Sammy-ServiceDesk', status: 'WAITING FOR SUPPORT', created: '24/Sep/2020', timeToResolve: '16m' },
        { id: 'ITSM-1233', type: 'Report a system problem', summary: "Barclay Inc. is slow", description: 'System performance issues during peak hours', reporter: 'ServiceDesk-Manager', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '3h 44m' },
        { id: 'ITSM-1230', type: 'Request access', summary: "Admin access to Jira", description: 'Requesting admin privileges in Jira', reporter: 'Product-Manager', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
        { id: 'ITSM-1229', type: 'Get a guest wifi account', summary: 'Guest wifi access', description: 'Need wifi access for a guest', reporter: 'Data-Developer', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
        { id: 'ITSM-1225', type: 'Request mobile device', summary: 'Need a new iPhone', description: 'Requesting a new iPhone for work', reporter: 'Change-Manager', assignee: 'Sammy-ServiceDesk', status: 'WAITING FOR APPROVAL', created: '23/Sep/2020', timeToResolve: '7h 44m' },
        { id: 'ITSM-1224', type: 'Get IT help', summary: 'Investigate website slowness', description: 'Website performance issues reported', reporter: 'Carly-Chief-Exec', assignee: 'Sammy-ServiceDesk', status: 'UNDER REVIEW', created: '23/Sep/2020', timeToResolve: '7h 44m' }
      ];
      setTickets(mockTickets);
    } catch (error) {
      Swal.fire({
        title: 'Error Fetching Tickets',
        icon: 'error',
        text: error.message || 'Failed to fetch tickets'
      });
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = (newTicket) => {
    if (newTicket.assignee === 'Sammy-ServiceDesk') {
      setTickets([newTicket, ...tickets]);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="myTickets" />
      <div style={{ flex: 1 }}>
        <Header setShowTicketForm={setShowTicketForm} />
        <TicketTable tickets={tickets} setTickets={setTickets} />
        {showTicketForm && (
          <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )}
      </div>
    </div>
  );
};

export default MyTickets;