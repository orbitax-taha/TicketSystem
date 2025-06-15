import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TicketTable from '../../components/TicketTable';
import CreateTicket from '../../components/CreateTicket';
import Swal from 'sweetalert2';
import axiosInstance from '../../api/axiosInstance';

const Dashboard = ({ setCurrentPage }) => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusCounts, setStatusCounts] = useState({});
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedTicket, setSelectedTicket] = useState(null); // State for selected ticket

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
    fetchTickets();
  };

  // Handle ticket card click to show modal
  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTicket(null);
  };

  const summaryStyle = {
    display: 'flex',
    gap: '10px',
    margin: '10px 0',
    padding: '20px',
    backgroundColor: '#f4f5f7',
    borderRadius: '4px',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  };

  const statusColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '180px',
    maxWidth: '200px',
    flex: '1 1 auto'
  };

  const statusGradients = {
    'OPEN': 'linear-gradient(135deg, #4CAF50, #81C784)',
    'WORK IN PROGRESS': 'linear-gradient(135deg, #2196F3, #64B5F6)',
    'WAITING FOR SUPPORT': 'linear-gradient(135deg, #FFC107, #FFD54F)',
    'UNDER REVIEW': 'linear-gradient(135deg, #F44336, #EF5350)',
    'COMPLETED': 'linear-gradient(135deg, #9C27B0, #AB47BC)'
  };

  const statusColors = {
    'OPEN': '#4CAF50',
    'WORK IN PROGRESS': '#2196F3',
    'WAITING FOR SUPPORT': '#FFC107',
    'UNDER REVIEW': '#F44336',
    'COMPLETED': '#9C27B0'
  };

  const statusIcons = {
    'OPEN': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    'WORK IN PROGRESS': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z" />
      </svg>
    ),
    'WAITING FOR SUPPORT': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      </svg>
    ),
    'UNDER REVIEW': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4 1.5-1.5L11 14l5-5 1.5 1.5L11 17z" />
      </svg>
    ),
    'COMPLETED': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  };

  const summaryBoxStyle = {
    width: '150px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, rotate 0.3s ease',
    animation: 'pulse 1s ease-in-out infinite',
    cursor: 'pointer',
    marginBottom: '10px',
    position: 'relative',
    overflow: 'hidden'
  };

  const ticketCardStyle = {
    background: 'linear-gradient(145deg, #ffffff, #f9f9f9)',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '8px',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
    position: 'relative',
    animation: 'slideIn 0.5s ease-out',
    border: '2px solid transparent',
    backgroundClip: 'padding-box',
    borderImage: 'linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 1',
    cursor: 'pointer' // Indicate clickability
  };

  const ticketFieldStyle = {
    fontSize: '12px',
    color: '#172b4d',
    marginBottom: '5px',
    wordWrap: 'break-word',
    display: 'flex',
    alignItems: 'center',
    fontFamily: "'Roboto', sans-serif"
  };

  const ticketLabelStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
    color: '#34495e'
  };

  const ticketIconStyle = {
    width: '14px',
    height: '14px',
    marginRight: '6px',
    color: '#5e6c84'
  };

  const statusBarStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    borderRadius: '8px 0 0 8px'
  };

  const noTicketsStyle = {
    fontSize: '12px',
    color: '#5e6c84',
    textAlign: 'center',
    padding: '8px',
    fontFamily: "'Roboto', sans-serif"
  };

  // Modal styles
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalContentStyle = {
    backgroundColor: 'rgb(255, 255, 255)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '20px',
    width: '400px',
    maxWidth: '90%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    border: '2px solid transparent',
    borderImage: `linear-gradient(145deg, ${selectedTicket ? statusColors[selectedTicket.status] : '#cccccc'}, transparent) 1`,
    animation: 'fadeInScale 0.3s ease-out',
    position: 'relative',
    color: '#172b4d',
    fontFamily: "'Roboto', sans-serif"
  };

  const modalHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const modalTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#34495e'
  };

  const modalCloseButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#5e6c84',
    transition: 'color 0.3s ease'
  };

  const modalFieldStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    fontSize: '14px',
    color: '#172b4d'
  };

  const modalLabelStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
    color: '#34495e',
    minWidth: '100px'
  };

  const modalIconStyle = {
    width: '18px',
    height: '18px',
    marginRight: '10px',
    color: selectedTicket ? statusColors[selectedTicket.status] : '#5e6c84'
  };

  const modalStatusBarStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '6px',
    borderRadius: '12px 0 0 12px',
    backgroundColor: selectedTicket ? statusColors[selectedTicket.status] : '#cccccc'
  };

  const keyframesStyle = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }
    @keyframes fadeIn {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
    }
    @keyframes slideIn {
      0% { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes borderPulse {
      0% { border-image: linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 1; }
      50% { border-image: linear-gradient(145deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)) 1; }
      100% { border-image: linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 1; }
    }
    @keyframes fadeInScale {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
  `;

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframesStyle;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const statusList = ['OPEN', 'WORK IN PROGRESS', 'WAITING FOR SUPPORT', 'UNDER REVIEW', 'COMPLETED'];

  return (
    <div style={{ display: 'flex', width: '100%', overflowX: 'hidden' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
      <div style={{ 
        flex: 1, 
        paddingLeft: '250px',
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}>
        <Header setShowTicketForm={setShowTicketForm} />
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
            Loading tickets...
          </div>
        ) : (
          <>
            <div style={{ 
              padding: '20px', 
              marginTop: '60px', 
              marginLeft: '0',
              boxSizing: 'border-box'
            }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
                Dashboard Summary
              </h2>
              <div style={summaryStyle}>
                {statusList.map((status, idx) => {
                  const count = statusCounts[status] || 0;
                  const background = statusGradients[status] || 'linear-gradient(145deg, #cccccc, #999999)';
                  const statusTickets = tickets.filter(ticket => ticket.status === status);
                  const statusColor = statusColors[status] || '#cccccc';

                  return (
                    <div key={idx} style={statusColumnStyle}>
                      {/* Status Box */}
                      <div
                        style={{
                          ...summaryBoxStyle,
                          background,
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                        }}
                      >
                        <div style={{ marginBottom: '8px' }}>{statusIcons[status]}</div>
                        <div style={{ fontSize: '12px', marginBottom: '8px' }}>{status}</div>
                        <div style={{ fontSize: '24px' }}>{count}</div>
                      </div>
                      <hr />
                      {/* Ticket Details Below */}
                      <div style={{ width: '100%' }}>
                        {statusTickets.length === 0 ? (
                          <div style={noTicketsStyle}>No tickets in this status</div>
                        ) : (
                          statusTickets.map((ticket, ticketIdx) => (
                            <div
                              key={ticketIdx}
                              style={{
                                ...ticketCardStyle,
                                borderImage: `linear-gradient(145deg, ${statusColor}, transparent) 1`,
                                animation: `${ticketCardStyle.animation}, borderPulse 2s ease-in-out infinite`
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 3px ${statusColor}80`;
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                              }}
                              onClick={() => handleTicketClick(ticket)} // Add onClick to show modal
                            >
                              <div style={{ ...statusBarStyle, backgroundColor: statusColor }} />
                              <div style={ticketFieldStyle}>
                                <svg style={ticketIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M3 9h18M9 3v18" />
                                </svg>
                                <span style={ticketLabelStyle}>Title:</span> {ticket.title.slice(0, 15) || '-'}
                              </div>
                              <div style={ticketFieldStyle}>
                                <svg style={ticketIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M3 7h18M3 12h18M3 17h18" />
                                </svg>
                                <span style={ticketLabelStyle}>Desc:</span> {ticket.description.slice(0, 6) || '-'}
                              </div>
                              <div style={ticketFieldStyle}>
                                <svg style={ticketIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                  <path d="M9 12l2 2l4 -4" />
                                </svg>
                                <span style={ticketLabelStyle}>Assigned:</span> {ticket.assignedTo || '-'}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} /> */}
          </>
        )}
        {/* {showTicketForm && (
          <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )} */}
        {/* Modal for Ticket Details */}
        {showModal && selectedTicket && (
          <div style={modalOverlayStyle} onClick={handleCloseModal}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
              <div style={modalStatusBarStyle} />
              <div style={modalHeaderStyle}>
                <h3 style={modalTitleStyle}>Ticket Details</h3>
                <button
                  style={modalCloseButtonStyle}
                  onClick={handleCloseModal}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#e74c3c')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#5e6c84')}
                >
                  ×
                </button>
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9h18M9 3v18" />
                </svg>
                <span style={modalLabelStyle}>ID:</span> {selectedTicket.id || '-'}
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9h18M9 3v18" />
                </svg>
                <span style={modalLabelStyle}>Title:</span> {selectedTicket.title || '-'}
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                <span style={modalLabelStyle}>Description:</span> {selectedTicket.description || '-'}
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <span style={modalLabelStyle}>Assigned To:</span> {selectedTicket.assignedTo || '-'}
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z" />
                </svg>
                <span style={modalLabelStyle}>Status:</span> {selectedTicket.status || '-'}
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                </svg>
                <span style={modalLabelStyle}>Reporter:</span> {selectedTicket.reporter || '-'}
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4 1.5-1.5L11 14l5-5 1.5 1.5L11 17z" />
                </svg>
                <span style={modalLabelStyle}>Created At:</span> {selectedTicket.createdAt || '-'}
              </div>
              <div style={modalFieldStyle}>
                <svg style={modalIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span style={modalLabelStyle}>Time to Resolve:</span> {selectedTicket.timeToResolve || '-'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;