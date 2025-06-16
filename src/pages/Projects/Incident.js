

import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CreateTicket from '../../components/CreateTicket';
import IssueModal from '../../components/Issuemodal'; // ✅ Import the modal
import axiosInstance from '../../api/axiosInstance';

const Incident = ({ setCurrentPage }) => {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [userInitials, setUserInitials] = useState('');
  const [selectedTicketId, setSelectedTicketId] = useState(null); // ✅ Track selected card

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const userName = localStorage.getItem('username') || '';
        const initials = userName.substring(0, 2).toUpperCase();
        setUserInitials(initials);

        const response = await axiosInstance.get(`/tickets/assignee/username/${userName}`);
        const ticketData = response.data?.data || [];

        const groups = {};
        ticketData.forEach(ticket => {
          const company = ticket.company || 'Unknown';
          if (!groups[company]) groups[company] = [];
          groups[company].push(ticket);
        });

        setGroupedTickets(groups);
      } catch (err) {
        console.error('Error fetching tickets:', err);
      }
    };

    fetchTickets();
  }, []);

  const handleCardClick = (ticketId) => {
    setSelectedTicketId(ticketId); // ✅ Set selected ticket ID
  };

  const renderTicket = (ticket, index) => (
    <div key={index} style={styles.ticketItem} onClick={() => handleCardClick(ticket.id)}>
      <div style={styles.icon}>✔️</div>
      <div style={{ flex: 1 }}>
        <div style={styles.title}>{ticket.title}</div>
        <div style={styles.subtitle}>
          {ticket.ticketCode}
        </div>
        <div style={styles.detailsRow}>
          <span style={styles.badge}>Status: {ticket.status}</span>
          <span style={styles.badge}>Priority: {ticket.priorityName}</span>
          <span style={styles.badge}>Company: {ticket.company}</span>
        </div>
      </div>
      <div style={styles.statusColumn}>
        <div>Created</div>
        <div style={styles.avatar}>{userInitials}</div>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', marginLeft: '200px' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="incident" />
      <div style={{ flex: 1 }}>
        <Header setShowTicketForm={setShowTicketForm} />

        <div style={styles.content}>
          {/* <h2 style={styles.heading}>Ticket Issues</h2> */}

          {Object.entries(groupedTickets).map(([company, tickets]) => (
            <div key={company} style={{ marginBottom: '30px' }}>
              <h3 style={styles.companyHeader}>{company}</h3>
              {tickets.map(renderTicket)}
            </div>
          ))}

          {Object.keys(groupedTickets).length === 0 && (
            <p style={{ color: '#888', marginTop: 20 }}>No issues found.</p>
          )}
        </div>

        {showTicketForm && (
          <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={() => setShowTicketForm(false)} />
        )}

        {/* ✅ Render IssueModal when a card is clicked */}
        {selectedTicketId && (
          <IssueModal
            ticketId={selectedTicketId}
            onClose={() => setSelectedTicketId(null)} // Allow closing the modal
          />
        )}
      </div>
    </div>
  );
};

const styles = {
  content: {
    padding: '20px 60px',
    marginTop: '20px',
  },
  heading: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#172b4d',
  },
  companyHeader: {
    marginTop:'50px',
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#344563',
    marginBottom: '10px',
    marginTop: '20px'
  },
  ticketItem: {
    display: 'flex',
    alignItems: 'flex-start',
    background: '#fff',
    padding: '16px 20px',
    marginBottom: '10px',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    justifyContent: 'space-between',
    gap: '15px',
    cursor: 'pointer' // ✅ Makes it look clickable
  },
  icon: {
    fontSize: '20px',
    color: '#0052cc',
    marginTop: '5px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#172b4d',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '13px',
    color: '#5e6c84',
    marginBottom: '6px',
  },
  detailsRow: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    fontSize: '13px',
  },
  badge: {
    backgroundColor: '#e4f0f6',
    color: '#0747a6',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  statusColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '13px',
    color: '#5e6c84',
  },
  avatar: {
    background: '#00875a',
    color: 'white',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: '5px'
  },
};

export default Incident;
