
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TicketTable from '../../components/TicketTable';
import TicketDetails from '../../components/TicketDetails';
import CreateTicket from '../../components/CreateTicket';
import ErrorBoundary from '../../components/ErrorBoundary';
import Swal from 'sweetalert2';
import axiosInstance from '../../api/axiosInstance';

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTickets] = useState([]); // Note: Unused, consider removing
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [priorities, setPriorities] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [users, setUsers] = useState([]);

  const userName = localStorage.getItem('username') || 'admin';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prioritiesResponse = await axiosInstance.get('/priorities');
        const normalizedPriorities = (prioritiesResponse.data || []).map((p) => ({
          id: p.id,
          name: p.name.replace('Heigh', 'High'),
        }));
        setPriorities(normalizedPriorities);

        const statusesResponse = await axiosInstance.get('/statuses');
        setStatuses(statusesResponse.data || []);

        const usersResponse = await axiosInstance.get('/users');
        setUsers(usersResponse.data || []);
      } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Failed to load priorities, statuses, or users.',
        });
      }
    };

    fetchData();
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/tickets/assignee/username/${userName}`);
      const ticketData = response.data.data || [];
      const transformedTickets = ticketData.map((ticket, index) => ({
        srNo: index + 1,
        ticketCode: ticket.ticketCode,
        id: ticket.id,
        title: ticket.title,
        description: ticket.description,
        assignedTo: ticket.assignedTo?.toString() || '0',
        status: ticket.status || 'OPEN',
        priority: ticket.priorityId?.toString() || '',
        priorityName: ticket.priorityName || 'Not set',
        createdAt: new Date(ticket.createdAt).toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        images: ticket.images || [],
      }));
      setTickets(transformedTickets);
    } catch (error) {
      console.error('Fetch tickets error:', error.response?.data || error.message);
      Swal.fire({
        title: 'Error Fetching Tickets',
        icon: 'error',
        text: error.response?.data?.message || 'Failed to fetch tickets for the user.',
      });
      setTickets([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTicket = (newTicket) => {
    const transformedTicket = {
      srNo: tickets.length + 1,
      ticketCode: newTicket.ticketCode,
      id: newTicket.id,
      title: newTicket.title,
      description: newTicket.description,
      assignedTo: newTicket.assignedTo?.toString() || '0',
      status: newTicket.status || 'OPEN',
      priority: newTicket.priorityId?.toString() || '',
      priorityName: newTicket.priorityName || 'Not set',
      createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
      images: newTicket.images || [],
    };
    setTickets([transformedTicket, ...tickets]);
    fetchTickets();
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header setShowTicketForm={setShowTicketForm} />
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '60px' }}>
            Loading tickets...
          </div>
        ) : (
          <ErrorBoundary>
            <TicketTable
              tickets={tickets}
              setTickets={setTickets}
              refetchTickets={fetchTickets}
              priorities={priorities}
              statuses={statuses}
              users={users}
              setSelectedTicket={setSelectedTicket}
            />
          </ErrorBoundary>
        )}

        {showTicketForm && (
          <CreateTicket
            onClose={() => setShowTicketForm(false)}
            onCreate={handleCreateTicket}
            priorities={priorities}
            users={users}
          />
        )}

        {selectedTicket && (
          <TicketDetails
            ticket={selectedTicket}
            onClose={() => setSelectedTicket(null)}
            priorities={priorities}
            users={users}
          />
        )}
      </div>
    </div>
  );
};

export default MyTickets;