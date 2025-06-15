import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TicketTable from '../../components/TicketTable';
import CreateTicket from '../../components/CreateTicket';
import ErrorBoundary from '../../components/ErrorBoundary';
import Swal from 'sweetalert2';
import axiosInstance from '../../api/axiosInstance';

const MyTickets = ({ setCurrentPage }) => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTickets = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get('/tickets');
      const ticketData = response.data.data || [];
      const transformedTickets = ticketData.map(ticket => ({
        type: 'Request', // Default since API doesn't provide this
        title: ticket.title,
        description: ticket.description,
        // reporter: 'Unknown', // Default since API doesn't provide this
        assignedTo: ticket.assignedToDep || 'Unassigned',
        status: ticket.status,
        createdAt: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
        // timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
        id: ticket.id,
      }));
      setTickets(transformedTickets);
    } catch (error) {
      Swal.fire({
        title: 'Error Fetching Tickets',
        icon: 'error',
        text: error.message || 'Failed to fetch tickets'
      });
      setTickets([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = (newTicket) => {
    // Transform the new ticket to match the table structure
    const transformedTicket = {
      type: 'Request',
      title: newTicket.title,
      id: newTicket.id,
      description: newTicket.description,
      // reporter: 'Unknown',
      assignedTo: newTicket.assignedToDep || 'Unassigned',
      status: newTicket.status || 'OPEN',
      createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleDateString('en-GB'),
      timeToResolve: newTicket.resolvedAt ? 'Resolved' : '0m',
    };
    setTickets([transformedTicket, ...tickets]);
    fetchTickets(); // Refetch to ensure consistency with backend
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