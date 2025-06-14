// import React, { useState, useEffect } from 'react';
// import TicketDetails from './TicketDetails';

// const TicketTable = ({ tickets, setTickets }) => {
//   const [filteredTickets, setFilteredTickets] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const rowsPerPage = 10;

//   useEffect(() => {
//     let updatedTickets = [...tickets];
//     if (filterStatus !== 'all') {
//       updatedTickets = updatedTickets.filter(ticket => ticket.status === filterStatus);
//     }
//     if (sortConfig.key) {
//       updatedTickets.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
//         if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
//         return 0;
//       });
//     }
//     setFilteredTickets(updatedTickets);
//     setCurrentPage(1);
//   }, [tickets, filterStatus, sortConfig]);

//   const handleSort = (key) => {
//     setSortConfig({
//       key,
//       direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
//     });
//   };

//   const handlePageChange = (value) => {
//     if (value === 'next') {
//       setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredTickets.length / rowsPerPage)));
//     } else if (value === 'prev') {
//       setCurrentPage((prev) => Math.max(prev - 1, 1));
//     } else if (typeof value === 'number') {
//       setCurrentPage(value);
//     }
//   };

//   const paginatedData = filteredTickets.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

//   const headerStyle = {
//     backgroundColor: '#ffffff',
//     color: '#172b4d',
//     textAlign: 'left',
//     fontWeight: 'bold',
//     fontSize: '16px',
//     padding: '8px',
//     marginBottom: '10px'
//   };

//   const filterRowStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     marginBottom: '10px'
//   };

//   const selectStyle = {
//     padding: '8px',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d'
//   };

//   const tableContainerStyle = {
//     overflowX: 'auto',
//     border: '1px solid #dfe1e6',
//     backgroundColor: '#ffffff'
//   };

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     fontSize: '14px',
//     minWidth: '1000px'
//   };

//   const cellStyle = {
//     border: '1px solid #dfe1e6',
//     padding: '8px',
//     whiteSpace: 'nowrap',
//     verticalAlign: 'middle',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     cursor: 'pointer'
//   };

//   const headerCellStyle = {
//     backgroundColor: '#fafbfc',
//     border: '1px solid #dfe1e6',
//     padding: '8px',
//     whiteSpace: 'nowrap',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     cursor: 'pointer'
//   };

//   const navButtonStyle = {
//     margin: '0 5px',
//     padding: '5px 10px',
//     color: 'black',
//     backgroundColor: '#f4f5f7',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '60px', marginLeft: '250px' }}>
//       {/* <div style={headerStyle}></div> */}
//       <div style={filterRowStyle}>
//         <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#172b4d' }}>Filter by Status:</label>
//         <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={selectStyle}>
//           <option value="all">All</option>
//           <option value="WAITING FOR SUPPORT">WAITING FOR SUPPORT</option>
//           <option value="WORK IN PROGRESS">WORK IN PROGRESS</option>
//           <option value="WAITING FOR APPROVAL">WAITING FOR APPROVAL</option>
//           <option value="UNDER REVIEW">UNDER REVIEW</option>
//         </select>
//       </div>
//       <div style={tableContainerStyle}>
//         <table style={tableStyle}>
//           <thead>
//             <tr style={{ backgroundColor: '#f4f5f7' }}>
//               {['Type', 'Key', 'Summary', 'Reporter', 'Assignee', 'Status', 'Created', 'Time to resolve'].map((header, idx) => (
//                 <th key={idx} style={headerCellStyle} onClick={() => handleSort(header.toLowerCase().replace(' ', ''))}>
//                   {header} {sortConfig.key === header.toLowerCase().replace(' ', '') && (sortConfig.direction === 'asc' ? '↑' : '↓')}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.length === 0 ? (
//               <tr>
//                 <td colSpan={8} style={{ ...cellStyle, textAlign: 'center' }}>
//                   No Data Available
//                 </td>
//               </tr>
//             ) : (
//               paginatedData.map((ticket, idx) => (
//                 <tr key={idx} style={{ textAlign: 'center', fontWeight: 'bold' }} onClick={() => setSelectedTicket(ticket)}>
//                   <td style={cellStyle}>{ticket.type}</td>
//                   <td style={cellStyle}>{ticket.id}</td>
//                   <td style={cellStyle}>{ticket.summary}</td>
//                   <td style={cellStyle}>{ticket.reporter}</td>
//                   <td style={cellStyle}>{ticket.assignee}</td>
//                   <td style={cellStyle}>{ticket.status}</td>
//                   <td style={cellStyle}>{ticket.created}</td>
//                   <td style={cellStyle}>{ticket.timeToResolve}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'left', marginTop: '10px' }}>
//         <button
//           onClick={() => handlePageChange('prev')}
//           disabled={currentPage === 1}
//           style={navButtonStyle}
//         >
//           {"<"}
//         </button>
//         <span style={{ margin: '0 10px', padding: '5px', color: 'black' }}>
//           {(currentPage - 1) * rowsPerPage + 1}-
//           {Math.min(currentPage * rowsPerPage, filteredTickets.length)} of {filteredTickets.length}
//         </span>
//         <button
//           onClick={() => handlePageChange('next')}
//           disabled={currentPage >= Math.ceil(filteredTickets.length / rowsPerPage)}
//           style={navButtonStyle}
//         >
//           {">"}
//         </button>
//       </div>
//       {selectedTicket && (
//         <TicketDetails ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
//       )}
//     </div>
//   );
// };

// export default TicketTable;
import React, { useState, useEffect } from 'react';
import TicketDetails from './TicketDetails';

const TicketTable = ({ tickets = [], setTickets, refetchTickets }) => {
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const rowsPerPage = 10;

  useEffect(() => {
    const validTickets = Array.isArray(tickets) ? tickets : [];
    let updatedTickets = [...validTickets];

    // Apply search filter
    if (searchQuery) {
      updatedTickets = updatedTickets.filter(
        ticket =>
          ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      updatedTickets = updatedTickets.filter(ticket => ticket.status === filterStatus);
    }

    // Apply sorting
    if (sortConfig.key) {
      updatedTickets.sort((a, b) => {
        const aValue = a[sortConfig.key] || '';
        const bValue = b[sortConfig.key] || '';
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredTickets(updatedTickets);
    setCurrentPage(1);
  }, [tickets, filterStatus, sortConfig, searchQuery]);

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const handlePageChange = (value) => {
    if (value === 'next') {
      setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredTickets.length / rowsPerPage)));
    } else if (value === 'prev') {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    } else if (typeof value === 'number') {
      setCurrentPage(value);
    }
  };

  const paginatedData = filteredTickets.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const headerStyle = {
    backgroundColor: '#ffffff',
    color: '#172b4d',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '8px',
    marginBottom: '10px'
  };

  const filterRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '10px'
  };

  const selectStyle = {
    padding: '8px',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d'
  };

  const inputStyle = {
    padding: '8px',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#172b4d',
    width: '200px'
  };

  const tableContainerStyle = {
    overflowX: 'auto',
    border: '1px solid #dfe1e6',
    backgroundColor: '#ffffff'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    minWidth: '1000px'
  };

  const cellStyle = {
    border: '1px solid #dfe1e6',
    padding: '8px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    color: '#172b4d',
    cursor: 'pointer'
  };

  const headerCellStyle = {
    backgroundColor: '#fafbfc',
    border: '1px solid #dfe1e6',
    padding: '8px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#172b4d',
    cursor: 'pointer'
  };

  const navButtonStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    color: 'black',
    backgroundColor: '#f4f5f7',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '60px', marginLeft: '250px' }}>
      <div style={headerStyle}>PROJECTS / ITSM Service Desk / My Tickets</div>
      <div style={filterRowStyle}>
        <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#172b4d' }}>Search:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title or description"
          style={inputStyle}
        />
        <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#172b4d' }}>Filter by Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={selectStyle}>
          <option value="all">All</option>
          <option value="OPEN">OPEN</option>
          <option value="WORK IN PROGRESS">WORK IN PROGRESS</option>
          <option value="WAITING FOR APPROVAL">WAITING FOR APPROVAL</option>
          <option value="UNDER REVIEW">UNDER REVIEW</option>
        </select>
      </div>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: '#f4f5f7' }}>
              {['Type', 'Title', 'Description', 'Assigned To', 'Status', 'Created At', 'Key'].map((header, idx) => (
                <th key={idx} style={headerCellStyle} onClick={() => handleSort(header.toLowerCase().replace(' ', ''))}>
                  {header} {sortConfig.key === header.toLowerCase().replace(' ', '') && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ ...cellStyle, textAlign: 'center' }}>
                  No Data Available
                </td>
              </tr>
            ) : (
              paginatedData.map((ticket, idx) => (
                <tr key={idx} style={{ textAlign: 'center', fontWeight: 'bold' }} onClick={() => setSelectedTicket(ticket)}>
                  <td style={cellStyle}>{ticket.type}</td>
                  <td style={cellStyle}>{ticket.title}</td>
                  <td style={cellStyle}>{ticket.description.slice(0,20)}</td>
                  <td style={cellStyle}>{ticket.assignedTo}</td>
                  <td style={cellStyle}>{ticket.status}</td>
                  <td style={cellStyle}>{ticket.createdAt}</td>
                  <td style={cellStyle}>{ticket.id}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          style={navButtonStyle}
        >
          {"<"}
        </button>
        <span style={{ margin: '0 10px', padding: '5px', color: 'black' }}>
          {(currentPage - 1) * rowsPerPage + 1}-
          {Math.min(currentPage * rowsPerPage, filteredTickets.length)} of {filteredTickets.length}
        </span>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage >= Math.ceil(filteredTickets.length / rowsPerPage)}
          style={navButtonStyle}
        >
          {">"}
        </button>
      </div>
      {selectedTicket && (
        <TicketDetails ticket={selectedTicket} onClose={() => { setSelectedTicket(null); refetchTickets(); }} />
      )}
    </div>
  );
};

export default TicketTable;