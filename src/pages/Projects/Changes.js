// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
// import CreateTicket from '../../components/CreateTicket';

// const Changes = ({ setCurrentPage }) => {
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const handleCreateTicket = (newTicket) => {
//     // Since this page is for upcoming features, we won't handle ticket creation logic here
//     // But we'll keep the function to maintain consistency with CreateTicket component
//     setShowTicketForm(false);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="changes" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <div style={{ 
//           padding: '20px', 
//           textAlign: 'center', 
//           color: '#172b4d',
//           marginTop: '60px' // To account for the fixed header
//         }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' , marginLeft:"200px" }}>
//             Change Management - Upcoming Features
//           </h2>
//           <p style={{ fontSize: '16px', color: '#5e6c84' , marginLeft:"200px" }}>
//             This section is under development. Stay tuned for change tracking and management features!
//           </p>
//         </div>
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Changes;

import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CreateTicket from '../../components/CreateTicket';
import axiosInstance from '../../api/axiosInstance'; // Assuming axiosInstance is configured

const Changes = ({ setCurrentPage }) => {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [tickets, setTickets] = useState([]); // Ensure tickets is always an array
  const [selectedTicketId, setSelectedTicketId] = useState('');
  const [assignmentHistory, setAssignmentHistory] = useState([]);
  const [loadingTickets, setLoadingTickets] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Fetch tickets on component mount
  useEffect(() => {
    const fetchTickets = async () => {
      setLoadingTickets(true);
      try {
        const response = await axiosInstance.get('/tickets');
        console.log('API Response for /tickets:', response.data); // Debug log
        // Extract the 'data' array from response.data, fallback to empty array
        const ticketData = Array.isArray(response.data.data) ? response.data.data : [];
        setTickets(ticketData);
        console.log('Tickets state set:', ticketData); // Debug log
        setError('');
      } catch (err) {
        setError('Failed to fetch tickets. Please try again.');
        setTickets([]); // Reset to empty array on error
        console.error('Error fetching tickets:', err);
      } finally {
        setLoadingTickets(false);
      }
    };
    fetchTickets();
  }, []);

  // Fetch assignment history when a ticket is selected
  useEffect(() => {
    if (selectedTicketId) {
      const fetchAssignmentHistory = async () => {
        setLoadingHistory(true);
        try {
          const response = await axiosInstance.get(`/tickets/${selectedTicketId}/assignment-history`);
          console.log('API Response for /assignment-history:', response.data); // Debug log
          // Ensure response.data is an array, fallback to empty array if not
          const historyData = Array.isArray(response.data) ? response.data : [];
          setAssignmentHistory(historyData);
          setError('');
        } catch (err) {
          setError('Failed to fetch assignment history. Please try again.');
          setAssignmentHistory([]); // Reset to empty array on error
          console.error('Error fetching assignment history:', err);
        } finally {
          setLoadingHistory(false);
        }
      };
      fetchAssignmentHistory();
    } else {
      setAssignmentHistory([]);
      setSearchTerm(''); // Reset search term when no ticket is selected
    }
  }, [selectedTicketId]);

  const handleCreateTicket = (newTicket) => {
    setShowTicketForm(false);
  };

  // Filter assignment history based on search term
  const filteredHistory = assignmentHistory.filter((entry) =>
    ['assignedTo', 'assignedBy', 'action', 'assignedAt'].some((field) =>
      entry[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Debug log to check tickets state before rendering
  console.log('Rendering with tickets:', tickets);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="changes" />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Header setShowTicketForm={setShowTicketForm} />
        <div style={{ 
          padding: '20px', 
          fontFamily: 'Arial, sans-serif',
          marginTop: '60px',
          marginLeft: '240px' // Adjusted to match Sidebar width
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>
            History Management 
          </h2>
          {/* <p style={{ fontSize: '16px', color: '#5e6c84', marginBottom: '20px' }}>
            This section is under development. Stay tuned for change tracking and management features!
          </p> */}
          <div style={styles.dropdownContainer}>
            <select
              value={selectedTicketId}
              onChange={(e) => setSelectedTicketId(e.target.value)}
              style={styles.dropdown}
              disabled={loadingTickets}
            >
              <option value="">Select a Ticket</option>
              {Array.isArray(tickets) && tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <option key={ticket.id} value={ticket.id}>
                    {ticket.ticketCode || `Ticket ${ticket.id}`}
                  </option>
                ))
              ) : (
                <option value="" disabled>No tickets available</option>
              )}
            </select>
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search assignment history..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
                disabled={!selectedTicketId || loadingHistory} // Disable if no ticket selected or loading
              />
            </div>
          </div>
          {loadingTickets && <p style={styles.loading}>Loading tickets...</p>}
          {error && <p style={styles.error}>{error}</p>}
          {tickets.length === 0 && !loadingTickets && !error && (
            <p style={styles.noData}>No tickets available.</p>
          )}
          {selectedTicketId && (
            <div style={styles.tableContainer}>
              <h3 style={styles.tableTitle}>Assignment History</h3>
              {loadingHistory ? (
                <p style={styles.loading}>Loading assignment history...</p>
              ) : Array.isArray(filteredHistory) && filteredHistory.length > 0 ? (
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Assigned To</th>
                      <th style={styles.th}>Assigned By</th>
                      <th style={styles.th}>Action</th>
                      <th style={styles.th}>Assigned At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHistory.map((entry, index) => (
                      <tr key={index}>
                        <td style={styles.td}>{entry.assignedTo || 'N/A'}</td>
                        <td style={styles.td}>{entry.assignedBy || 'N/A'}</td>
                        <td style={styles.td}>{entry.action || 'N/A'}</td>
                        <td style={styles.td}>{entry.assignedAt || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p style={styles.noData}>
                  {searchTerm
                    ? 'No results found for your search.'
                    : 'No assignment history available.'}
                </p>
              )}
            </div>
          )}
        </div>
        {showTicketForm && (
          <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
        )}
      </div>
    </div>
  );
};

const styles = {
  dropdownContainer: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    alignItems: 'center',
  },
  dropdown: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px',
    backgroundColor: '#fff',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px',
  },
  tableContainer: {
    marginTop: '20px',
  },
  tableTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  table: {
    width: '100%',
    maxWidth: '1400px',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  th: {
    border: '1px solid #dee2e6',
    padding: '10px',
    color:'white',
    backgroundColor: '#8B3A94',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #dee2e6',
    padding: '10px',
    textAlign: 'left',
  },
  loading: {
    fontSize: '14px',
    color: '#5e6c84',
  },
  error: {
    fontSize: '14px',
    color: '#dc3545',
  },
  noData: {
    fontSize: '14px',
    color: '#5e6c84',
  },
};

export default Changes;