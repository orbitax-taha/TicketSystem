import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketTable from '../components/TicketTable';
import TicketForm from '../components/TicketForm';
import ErrorBoundary from '../components/ErrorBoundary';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';

const MyTickets = ({ setCurrentPage }) => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);

  const fetchTickets = async () => {
    try {
      const response = await axiosInstance.get('/tickets');
      const ticketData = response.data.data || [];
      const transformedTickets = ticketData.map(ticket => ({
        type: 'Request',
        title: ticket.title,
        id: ticket.id,
        description: ticket.description,
        reporter: 'Unknown',
        assignee: ticket.assignedTo || 'Unassigned',
        status: ticket.status,
        created: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
        timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
      }));
      setTickets(transformedTickets);
    } catch (error) {
      Swal.fire({
        title: 'Error Fetching Tickets',
        icon: 'error',
        text: error.message || 'Failed to fetch tickets'
      });
      setTickets([]);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = (newTicket) => {
    if (newTicket.assignee === 'Sammy-ServiceDesk') {
      setTickets([newTicket, ...tickets]);
      fetchTickets();
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="myTickets" />
      <div style={{ flex: 1 }}>
        <Header setShowTicketForm={setShowTicketForm} />
        <ErrorBoundary>
          <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
        </ErrorBoundary>
        {showTicketForm && (
          <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )}
      </div>
    </div>
  );
};

export default MyTickets;