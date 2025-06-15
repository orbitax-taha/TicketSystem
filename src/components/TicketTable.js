// // import React, { useState, useEffect } from 'react';
// // import Swal from 'sweetalert2';
// // import axiosInstance from '../api/axiosInstance';
// // import { CircularProgress } from '@mui/material';

// // const TicketTable = ({ tickets = [], setTickets, refetchTickets, priorities, statuses, users }) => {
// //   const [filteredTickets, setFilteredTickets] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
// //   const [filterStatus, setFilterStatus] = useState('all');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [editingTicketId, setEditingTicketId] = useState(null);
// //   const [editFormData, setEditFormData] = useState({});
// //   const [originalFormData, setOriginalFormData] = useState({});
// //   const [isLoading, setIsLoading] = useState(false);
// //   const rowsPerPage = 10;

// //   // Dummy logged-in user for assignedBy
// //   const loggedInUser = 'admin'; // Replace with 'sumit' or dynamically fetch if needed

// //   useEffect(() => {
// //     const validTickets = Array.isArray(tickets) ? tickets : [];
// //     let updatedTickets = [...validTickets];

// //     if (searchQuery) {
// //       updatedTickets = updatedTickets.filter(
// //         ticket =>
// //           ticket.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           ticket.description?.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     if (filterStatus !== 'all') {
// //       updatedTickets = updatedTickets.filter(ticket => ticket.status === filterStatus);
// //     }

// //     if (sortConfig.key) {
// //       updatedTickets.sort((a, b) => {
// //         let aValue = sortConfig.key === 'priorityName'
// //           ? a.priorityName || 'Not set'
// //           : sortConfig.key === 'ticketCode'
// //           ? a.ticketCode || 0
// //           : sortConfig.key === 'assignedTo'
// //           ? (users.find(u => u.id === parseInt(a.assignedTo))?.username || 'Unassigned')
// //           : a[sortConfig.key] || '';
// //         let bValue = sortConfig.key === 'priorityName'
// //           ? b.priorityName || 'Not set'
// //           : sortConfig.key === 'ticketCode'
// //           ? b.ticketCode || 0
// //           : sortConfig.key === 'assignedTo'
// //           ? (users.find(u => u.id === parseInt(b.assignedTo))?.username || 'Unassigned')
// //           : b[sortConfig.key] || '';
// //         if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
// //         if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
// //         return 0;
// //       });
// //     }

// //     setFilteredTickets(updatedTickets);
// //     setCurrentPage(1);
// //   }, [tickets, filterStatus, sortConfig, searchQuery, users]);

// //   const handleSort = (key) => {
// //     setSortConfig({
// //       key,
// //       direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
// //     });
// //   };

// //   const handlePageChange = (value) => {
// //     if (value === 'next') {
// //       setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredTickets.length / rowsPerPage)));
// //     } else if (value === 'prev') {
// //       setCurrentPage((prev) => Math.max(prev - 1, 1));
// //     } else if (typeof value === 'number') {
// //       setCurrentPage(value);
// //     }
// //   };

// //   const handleRowClick = (ticket) => {
// //     if (editingTicketId === ticket.id) {
// //       // If clicking the same row, exit edit mode without saving
// //       setEditingTicketId(null);
// //       setEditFormData({});
// //       setOriginalFormData({});
// //     } else {
// //       // Enter edit mode for the new row
// //       setEditingTicketId(ticket.id);
// //       const initialData = {
// //         title: ticket.title,
// //         description: ticket.description,
// //         assignedTo: ticket.assignedTo || '0',
// //         priority: ticket.priority?.toString() || '',
// //         status: ticket.status || 'OPEN'
// //       };
// //       setEditFormData(initialData);
// //       setOriginalFormData(initialData);
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditFormData({ ...editFormData, [name]: value });
// //   };

// //   const handleInputKeyDown = async (e, ticketId) => {
// //     if (e.key === 'Enter') {
// //       const hasChanges = Object.keys(editFormData).some(
// //         key => editFormData[key] !== originalFormData[key]
// //       );

// //       if (!hasChanges) return;

// //       const result = await Swal.fire({
// //         title: 'Confirm Changes',
// //         text: 'Would you like to save changes to this ticket?',
// //         icon: 'question',
// //         showCancelButton: true,
// //         confirmButtonText: 'Yes, Save',
// //         cancelButtonText: 'No, Revert',
// //         buttonsStyling: false,
// //         customClass: {
// //           confirmButton: 'swal-confirm-button',
// //           cancelButton: 'swal-cancel-button'
// //         }
// //       });

// //       if (result.isConfirmed) {
// //         if (!editFormData.title || !editFormData.description || !editFormData.assignedTo || !editFormData.priority || !editFormData.status) {
// //           Swal.fire({
// //             title: 'Validation Error',
// //             icon: 'error',
// //             text: 'All fields are required!'
// //           });
// //           setEditFormData(originalFormData);
// //           return;
// //         }

// //         const selectedUser = users.find(user => user.id === parseInt(editFormData.assignedTo));
// //         if (!selectedUser) {
// //           Swal.fire({
// //             title: 'Validation Error',
// //             icon: 'error',
// //             text: 'Invalid assignee selected.'
// //           });
// //           setEditFormData(originalFormData);
// //           return;
// //         }

// //         setIsLoading(true);
// //         try {
// //           const payload = {
// //             id: ticketId,
// //             title: editFormData.title,
// //             description: editFormData.description,
// //             assignedTo: parseInt(editFormData.assignedTo),
// //             assignedBy: loggedInUser,
// //             priorityId: parseInt(editFormData.priority),
// //             status: editFormData.status
// //           };
// //           console.log('Update ticket payload:', payload);
// //           const response = await axiosInstance.put(`/tickets/${ticketId}`, payload);
// //           setTickets((prevTickets) =>
// //             prevTickets.map((ticket) =>
// //               ticket.id === ticketId
// //                 ? {
// //                     ...ticket,
// //                     title: response.data.title,
// //                     description: response.data.description,
// //                     assignedTo: response.data.assignedTo?.toString() || '0',
// //                     priority: response.data.priorityId?.toString() || '',
// //                     priorityName: priorities.find(p => p.id === response.data.priorityId)?.name || 'Not set',
// //                     status: response.data.status || 'OPEN'
// //                   }
// //                 : ticket
// //             )
// //           );
// //           setOriginalFormData(editFormData);
// //           setEditingTicketId(null);
// //           refetchTickets();
// //         } catch (error) {
// //           console.error('Update error:', error.response?.data || error.message);
// //           if (error.response?.status === 404) {
// //             Swal.fire({
// //               title: 'Ticket Not Found',
// //               icon: 'error',
// //               text: `The ticket with ID ${ticketId} does not exist.`,
// //               confirmButtonText: 'OK'
// //             });
// //             setEditingTicketId(null);
// //             refetchTickets();
// //           } else if (error.message.includes('Network Error')) {
// //             Swal.fire({
// //               title: 'Network Error',
// //               icon: 'error',
// //               text: 'Failed to connect to the server. Please check your network or contact the administrator (CORS issue).'
// //             });
// //           } else {
// //             Swal.fire({
// //               title: 'Error',
// //               icon: 'error',
// //               text: error.response?.data?.message || 'Failed to update ticket.'
// //             });
// //           }
// //           setEditFormData(originalFormData);
// //         } finally {
// //           setIsLoading(false);
// //         }
// //       } else {
// //         setEditFormData(originalFormData);
// //       }
// //     }
// //   };

// //   const handleSelectChange = async (e, ticketId) => {
// //     const { name, value } = e.target;
// //     const updatedData = { ...editFormData, [name]: value };
// //     setEditFormData(updatedData);

// //     const hasChanges = Object.keys(updatedData).some(
// //       key => updatedData[key] !== originalFormData[key]
// //     );

// //     if (!hasChanges) return;

// //     const result = await Swal.fire({
// //       title: 'Confirm Changes',
// //       text: 'Would you like to save changes to this ticket?',
// //       icon: 'question',
// //       showCancelButton: true,
// //       confirmButtonText: 'Yes, Save',
// //       cancelButtonText: 'No, Revert',
// //       buttonsStyling: false,
// //       customClass: {
// //         confirmButton: 'swal-confirm-button',
// //         cancelButton: 'swal-cancel-button'
// //       }
// //     });

// //     if (result.isConfirmed) {
// //       if (!updatedData.title 
        
// //        ) {
// //         Swal.fire({
// //           title: 'Validation Error',
// //           icon: 'error',
// //           text: 'All fields are required!'
// //         });
// //         setEditFormData(originalFormData);
// //         return;
// //       }

// //       const selectedUser = users.find(user => user.id === parseInt(updatedData.assignedTo));
// //       if (!selectedUser) {
// //         Swal.fire({
// //           title: 'Validation Error',
// //           icon: 'error',
// //           text: 'Invalid assignee selected.'
// //         });
// //         setEditFormData(originalFormData);
// //         return;
// //       }

// //       setIsLoading(true);
// //       try {
// //         if (name === 'assignedTo') {
// //           // Handle assignment using /tickets/{id}/assign API
// //           const params = new URLSearchParams({
// //             userId: updatedData.assignedTo,
// //             assignedBy: loggedInUser
// //           });
// //           console.log('Assign ticket params:', params.toString());
// //           const response = await axiosInstance.put(`/tickets/${ticketId}/assign?${params.toString()}`);

// //           // Update the ticket state with the new assignedTo
// //           setTickets((prevTickets) =>
// //             prevTickets.map((ticket) =>
// //               ticket.id === ticketId
// //                 ? {
// //                     ...ticket,
// //                     assignedTo: updatedData.assignedTo
// //                   }
// //                 : ticket
// //             )
// //           );
// //         } else {
// //           // Handle status and priority updates using /api/tickets/tickets/{id}/update-status-priority
// //           const statusId = statuses.find(s => s.statusName === updatedData.status)?.id;
// //           if (!statusId) {
// //             throw new Error('Invalid status selected.');
// //           }

// //           const payload = {
// //             statusId: parseInt(statusId),
// //             priorityId: parseInt(updatedData.priority),
// //             assignedBy: loggedInUser
// //           };
// //           console.log('Update status/priority payload:', payload);
// //           const response = await axiosInstance.put(`/tickets/${ticketId}/updatestatuspriority`, payload);

// //           // Update the ticket state with the new status and priority
// //           setTickets((prevTickets) =>
// //             prevTickets.map((ticket) =>
// //               ticket.id === ticketId
// //                 ? {
// //                     ...ticket,
// //                     priority: updatedData.priority,
// //                     priorityName: priorities.find(p => p.id === parseInt(updatedData.priority))?.name || 'Not set',
// //                     status: updatedData.status
// //                   }
// //                 : ticket
// //             )
// //           );
// //         }

// //         setOriginalFormData(updatedData);
// //         setEditingTicketId(null);
// //         refetchTickets();
// //       } catch (error) {
// //         console.error('Update error:', error.response?.data || error.message);
// //         if (error.response?.status === 404) {
// //           Swal.fire({
// //             title: 'Ticket Not Found',
// //             icon: 'error',
// //             text: `The ticket with ID ${ticketId} does not exist.`,
// //             confirmButtonText: 'OK'
// //           });
// //           setEditingTicketId(null);
// //           refetchTickets();
// //         } else if (error.message.includes('Network Error')) {
// //           Swal.fire({
// //             title: 'Network Error',
// //             icon: 'error',
// //             text: 'Failed to connect to the server. Please check your network or contact the administrator (CORS issue).'
// //           });
// //         } else {
// //           Swal.fire({
// //             title: 'Error',
// //             icon: 'error',
// //             text: error.response?.data?.message || 'Failed to update ticket.'
// //           });
// //         }
// //         setEditFormData(originalFormData);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     } else {
// //       setEditFormData(originalFormData);
// //     }
// //   };

// //   const paginatedData = filteredTickets.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

// //   const headerStyle = {
// //     backgroundColor: '#ffffff',
// //     color: '#172b4d',
// //     textAlign: 'left',
// //     fontWeight: 'bold',
// //     fontSize: '16px',
// //     padding: '8px',
// //     marginBottom: '10px'
// //   };

// //   const filterRowStyle = {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '20px',
// //     marginBottom: '10px'
// //   };

// //   const selectStyle = {
// //     padding: '8px',
// //     border: '1px solid #dfe1e6',
// //     borderRadius: '4px',
// //     fontSize: '14px',
// //     fontWeight: 'bold',
// //     color: '#172b4d',
// //     width: '100%'
// //   };

// //   const inputStyle = {
// //     padding: '8px',
// //     border: '1px solid #dfe1e6',
// //     borderRadius: '4px',
// //     fontSize: '14px',
// //     color: '#172b4d',
// //     width: '100%'
// //   };

// //   const tableContainerStyle = {
// //     overflowX: 'auto',
// //     border: '1px solid #dfe1e6',
// //     backgroundColor: '#ffffff'
// //   };

// //   const tableStyle = {
// //     width: '100%',
// //     borderCollapse: 'collapse',
// //     fontSize: '14px',
// //     minWidth: '1000px'
// //   };

// //   const cellStyle = {
// //     border: '1px solid #dfe1e6',
// //     padding: '8px',
// //     whiteSpace: 'nowrap',
// //     verticalAlign: 'middle',
// //     fontWeight: 'bold',
// //     color: '#172b4d',
// //     textAlign: 'center'
// //   };

// //   const headerCellStyle = {
// //     backgroundColor: '#0052cc',
// //     border: '1px solid #dfe1e6',
// //     padding: '8px',
// //     whiteSpace: 'nowrap',
// //     textAlign: 'center',
// //     fontWeight: 'bold',
// //     color: 'white',
// //     cursor: 'pointer'
// //   };

// //   return (
// //     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '60px', marginLeft: '250px' }}>
// //       <div style={headerStyle}>PROJECTS / ITSM Service Desk / My Tickets</div>
// //       <div style={filterRowStyle}>
// //         <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#172b4d' }}>Search:</label>
// //         <input
// //           type="text"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           placeholder="Search by title or description"
// //           style={inputStyle}
// //         />
// //         <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#172b4d' }}>Filter by Status:</label>
// //         <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={selectStyle}>
// //           <option value="all">All</option>
// //           {statuses.map((status) => (
// //             <option key={status.id} value={status.statusName}>{status.statusName}</option>
// //           ))}
// //         </select>
// //       </div>
// //       <div style={tableContainerStyle}>
// //         <table style={tableStyle}>
// //           <thead>
// //             <tr style={{ backgroundColor: '#f4f5f7' }}>
// //               {['Sr No', 'Ticket Code', 'Priority', 'Title', 'Description', 'Assigned To', 'Status', 'Created At'].map((header, idx) => (
// //                 <th
// //                   key={idx}
// //                   style={headerCellStyle}
// //                   onClick={() => handleSort(header.toLowerCase().replace(/[\s.]/g, ''))}
// //                 >
// //                   {header} {sortConfig.key === header.toLowerCase().replace(/[\s.]/g, '') && (sortConfig.direction === 'asc' ? '↑' : '↓')}
// //                 </th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {paginatedData.length === 0 ? (
// //               <tr>
// //                 <td colSpan={8} style={{ ...cellStyle, textAlign: 'center' }}>
// //                   No Data Available
// //                 </td>
// //               </tr>
// //             ) : (
// //               paginatedData.map((ticket, idx) => (
// //                 <tr
// //                   key={idx}
// //                   style={{ fontWeight: 'bold', pointerEvents: isLoading ? 'none' : 'auto' }}
// //                   onClick={() => handleRowClick(ticket)}
// //                 >
// //                   <td style={cellStyle}>{ticket.srNo}</td>
// //                   <td style={cellStyle}>{ticket.ticketCode}</td>
// //                   <td style={cellStyle}>
// //                     {editingTicketId === ticket.id ? (
// //                       <select
// //                         name="priority"
// //                         value={editFormData.priority}
// //                         onChange={(e) => handleSelectChange(e, ticket.id)}
// //                         style={selectStyle}
// //                         onClick={(e) => e.stopPropagation()}
// //                       >
// //                         <option value="" disabled>Select Priority</option>
// //                         {priorities.map((p) => (
// //                           <option key={p.id} value={p.id}>{p.name}</option>
// //                         ))}
// //                       </select>
// //                     ) : (
// //                       ticket.priorityName
// //                     )}
// //                   </td>
// //                   <td style={cellStyle}>
// //                     {editingTicketId === ticket.id ? (
// //                       <input
// //                         type="text"
// //                         name="title"
// //                         value={editFormData.title}
// //                         onChange={handleInputChange}
// //                         onKeyDown={(e) => handleInputKeyDown(e, ticket.id)}
// //                         style={inputStyle}
// //                         onClick={(e) => e.stopPropagation()}
// //                       />
// //                     ) : (
// //                       ticket.title
// //                     )}
// //                   </td>
// //                   <td style={cellStyle}>
// //                     {editingTicketId === ticket.id ? (
// //                       <input
// //                         type="text"
// //                         name="description"
// //                         value={editFormData.description}
// //                         onChange={handleInputChange}
// //                         onKeyDown={(e) => handleInputKeyDown(e, ticket.id)}
// //                         style={inputStyle}
// //                         onClick={(e) => e.stopPropagation()}
// //                       />
// //                     ) : (
// //                       ticket.description?.slice(0, 20)
// //                     )}
// //                   </td>
// //                   <td style={cellStyle}>
// //                     {editingTicketId === ticket.id ? (
// //                       <select
// //                         name="assignedTo"
// //                         value={editFormData.assignedTo}
// //                         onChange={(e) => handleSelectChange(e, ticket.id)}
// //                         style={selectStyle}
// //                         onClick={(e) => e.stopPropagation()}
// //                       >
// //                         <option value="0" disabled>Select Assignee</option>
// //                         {users.map((user) => (
// //                           <option key={user.id} value={user.id}>{user.username}</option>
// //                         ))}
// //                       </select>
// //                     ) : (
// //                       users.find(user => user.id === parseInt(ticket.assignedTo))?.username || 'Unassigned'
// //                     )}
// //                   </td>
// //                   <td style={cellStyle}>
// //                     {editingTicketId === ticket.id ? (
// //                       <select
// //                         name="status"
// //                         value={editFormData.status}
// //                         onChange={(e) => handleSelectChange(e, ticket.id)}
// //                         style={selectStyle}
// //                         onClick={(e) => e.stopPropagation()}
// //                       >
// //                         <option value="" disabled>Select Status</option>
// //                         {statuses.map((status) => (
// //                           <option key={status.id} value={status.statusName}>{status.statusName}</option>
// //                         ))}
// //                       </select>
// //                     ) : (
// //                       ticket.status
// //                     )}
// //                   </td>
// //                   <td style={cellStyle}>{ticket.createdAt}</td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //       <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
// //         <button
// //           onClick={() => handlePageChange('prev')}
// //           disabled={currentPage === 1 || isLoading}
// //           style={{
// //             margin: '0 5px',
// //             padding: '5px 10px',
// //             color: 'black',
// //             backgroundColor: '#f4f5f7',
// //             border: '1px solid #dfe1e6',
// //             borderRadius: '4px',
// //             cursor: 'pointer'
// //           }}
// //         >
// //           {"<"}
// //         </button>
// //         <span style={{ margin: '0 10px', padding: '5px', color: 'black' }}>
// //           {(currentPage - 1) * rowsPerPage + 1}-
// //           {Math.min(currentPage * rowsPerPage, filteredTickets.length)} of {filteredTickets.length}
// //         </span>
// //         <button
// //           onClick={() => handlePageChange('next')}
// //           disabled={currentPage >= Math.ceil(filteredTickets.length / rowsPerPage) || isLoading}
// //           style={{
// //             margin: '0 5px',
// //             padding: '5px 10px',
// //             color: 'black',
// //             backgroundColor: '#f4f5f7',
// //             border: '1px solid #dfe1e6',
// //             borderRadius: '4px',
// //             cursor: 'pointer'
// //           }}
// //         >
// //           {">"}
// //         </button>
// //       </div>
// //       {isLoading && (
// //         <div style={{
// //           position: 'fixed',
// //           top: 0,
// //           left: 0,
// //           right: 0,
// //           bottom: 0,
// //           backgroundColor: 'rgba(0,0,0,0.5)',
// //           display: 'flex',
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           zIndex: 3000
// //         }}>
// //           <CircularProgress />
// //         </div>
// //       )}
// //       <style>
// //         {`
// //           .swal-confirm-button {
// //             padding: 8px 16px;
// //             font-size: 14px;
// //             font-weight: bold;
// //             color: #ffffff;
// //             background-color: #0052cc;
// //             border: none;
// //             borderRadius: 4px;
// //             cursor: pointer;
// //             margin-right: 10px;
// //           }
// //           .swal-cancel-button {
// //             padding: 8px 16px;
// //             font-size: 14px;
// //             font-weight: bold;
// //             color: #172b4d;
// //             background-color: #d3d3d3;
// //             border: none;
// //             border-radius: 4px;
// //             cursor: pointer;
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default TicketTable;


import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';
import { CircularProgress } from '@mui/material';

const TicketTable = ({ tickets = [], setTickets, refetchTickets, priorities, statuses, users }) => {
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTicketId, setEditingTicketId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [originalFormData, setOriginalFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const rowsPerPage = 10;

  const loggedInUser = localStorage.getItem('username') || 'admin';

  useEffect(() => {
    const validTickets = Array.isArray(tickets) ? tickets : [];
    let updatedTickets = [...validTickets];

    if (searchQuery) {
      updatedTickets = updatedTickets.filter(
        (ticket) =>
          ticket.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ticket.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      updatedTickets = updatedTickets.filter((ticket) => ticket.status === filterStatus);
    }

    if (sortConfig.key) {
      updatedTickets.sort((a, b) => {
        let aValue =
          sortConfig.key === 'priorityName'
            ? a.priorityName || 'Not set'
            : sortConfig.key === 'ticketCode'
            ? a.ticketCode || 0
            : sortConfig.key === 'assignedTo'
            ? users.find((u) => u.id === parseInt(a.assignedTo))?.username || 'Unassigned'
            : a[sortConfig.key] || '';
        let bValue =
          sortConfig.key === 'priorityName'
            ? b.priorityName || 'Not set'
            : sortConfig.key === 'ticketCode'
            ? b.ticketCode || 0
            : sortConfig.key === 'assignedTo'
            ? users.find((u) => u.id === parseInt(b.assignedTo))?.username || 'Unassigned'
            : b[sortConfig.key] || '';
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredTickets(updatedTickets);
    setCurrentPage(1);
  }, [tickets, filterStatus, sortConfig, searchQuery, users]);

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
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

  const handleRowClick = (ticket) => {
    if (editingTicketId === ticket.id) {
      setEditingTicketId(null);
      setEditFormData({});
      setOriginalFormData({});
    } else {
      setEditingTicketId(ticket.id);
      const initialData = {
        title: ticket.title,
        description: ticket.description,
        assignedTo: ticket.assignedTo || '0',
        priority: ticket.priority?.toString() || '',
        status: ticket.status || 'OPEN',
      };
      setEditFormData(initialData);
      setOriginalFormData(initialData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleInputKeyDown = async (e, ticketId) => {
    if (e.key === 'Enter') {
      const hasChanges = Object.keys(editFormData).some(
        (key) => editFormData[key] !== originalFormData[key]
      );

      if (!hasChanges) return;

      const result = await Swal.fire({
        title: 'Confirm Changes',
        text: 'Would you like to save changes to this ticket?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, Save',
        cancelButtonText: 'No, Revert',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'swal-confirm-button',
          cancelButton: 'swal-cancel-button',
        },
      });

      if (result.isConfirmed) {
        if (
          !editFormData.title ||
          !editFormData.description ||
          !editFormData.assignedTo ||
          !editFormData.priority ||
          !editFormData.status
        ) {
          Swal.fire({
            title: 'Validation Error',
            icon: 'error',
            text: 'All fields are required!',
          });
          setEditFormData(originalFormData);
          return;
        }

        const selectedUser = users.find((user) => user.id === parseInt(editFormData.assignedTo));
        if (!selectedUser) {
          Swal.fire({
            title: 'Validation Error',
            icon: 'error',
            text: 'Invalid assignee selected.',
          });
          setEditFormData(originalFormData);
          return;
        }

        setIsLoading(true);
        try {
          const payload = {
            id: ticketId,
            title: editFormData.title,
            description: editFormData.description,
            assignedTo: parseInt(editFormData.assignedTo),
            assignedBy: loggedInUser,
            priorityId: parseInt(editFormData.priority),
            status: editFormData.status,
          };
          console.log('Update ticket payload:', payload);
          const response = await axiosInstance.put(`/tickets/${ticketId}`, payload);
          setTickets((prevTickets) =>
            prevTickets.map((ticket) =>
              ticket.id === ticketId
                ? {
                    ...ticket,
                    title: response.data.title,
                    description: response.data.description,
                    assignedTo: response.data.assignedTo?.toString() || '0',
                    priority: response.data.priorityId?.toString() || '',
                    priorityName:
                      priorities.find((p) => p.id === response.data.priorityId)?.name || 'Not set',
                    status: response.data.status || 'OPEN',
                  }
                : ticket
            )
          );
          setOriginalFormData(editFormData);
          setEditingTicketId(null);
          refetchTickets();
        } catch (error) {
          console.error('Update error:', error.response?.data || error.message);
          if (error.response?.status === 404) {
            Swal.fire({
              title: 'Ticket Not Found',
              icon: 'error',
              text: `The ticket with ID ${ticketId} does not exist.`,
              confirmButtonText: 'OK',
            });
            setEditingTicketId(null);
            refetchTickets();
          } else if (error.message.includes('Network Error')) {
            Swal.fire({
              title: 'Network Error',
              icon: 'error',
              text: 'Failed to connect to the server. Please check your network or contact the administrator.',
            });
          } else {
            Swal.fire({
              title: 'Error',
              icon: 'error',
              text: error.response?.data?.message || 'Failed to update ticket.',
            });
          }
          setEditFormData(originalFormData);
        } finally {
          setIsLoading(false);
        }
      } else {
        setEditFormData(originalFormData);
      }
    }
  };

  const handleSelectChange = async (e, ticketId) => {
    const { name, value } = e.target;
    const updatedData = { ...editFormData, [name]: value };
    setEditFormData(updatedData);

    const hasChanges = Object.keys(updatedData).some(
      (key) => updatedData[key] !== originalFormData[key]
    );

    if (!hasChanges) return;

    const result = await Swal.fire({
      title: 'Confirm Changes',
      text: 'Would you like to save changes to this ticket?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Save',
      cancelButtonText: 'No, Revert',
      buttonsStyling: false | false,
      customClass: {
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button',
      },
    });

    if (result.isConfirmed) {
      if (
        !updatedData.title ||
        !updatedData.description ||
        !updatedData.assignedTo ||
        !updatedData.priority ||
        !updatedData.status
      ) {
        Swal.fire({
          title: 'Validation Error',
          icon: 'error',
          text: 'All fields are required!',
        });
        setEditFormData(originalFormData);
        return;
      }

      const selectedUser = users.find((user) => user.id === parseInt(updatedData.assignedTo));
      if (!selectedUser) {
        Swal.fire({
          title: 'Validation Error',
          icon: 'error',
          text: 'Invalid assignee selected.',
        });
        setEditFormData(originalFormData);
        return;
      }

      setIsLoading(true);
      try {
        if (name === 'assignedTo') {
          // Handle assignment using /tickets/{id}/assign API
          const params = new URLSearchParams({
            userId: updatedData.assignedTo,
            assignedBy: loggedInUser,
          });
          console.log('Assign ticket params:', params.toString());
          const response = await axiosInstance.put(`/tickets/${ticketId}/assign?${params.toString()}`);

          // Update the ticket state with the new assignedTo
          setTickets((prevTickets) =>
            prevTickets.map((ticket) =>
              ticket.id === ticketId
                ? {
                    ...ticket,
                    assignedTo: updatedData.assignedTo,
                  }
                : ticket
            )
          );
        } else {
          // Handle status and priority updates using /tickets/{id}/updatestatuspriority
          const statusId = statuses.find((s) => s.statusName === updatedData.status)?.id;
          if (!statusId) {
            throw new Error('Invalid status selected.');
          }

          const payload = {
            statusId: parseInt(statusId),
            priorityId: parseInt(updatedData.priority),
            assignedBy: loggedInUser,
          };
          console.log('Update status/priority payload:', payload);
          const response = await axiosInstance.put(`/tickets/${ticketId}/updatestatuspriority`, payload);

          // Update the ticket state with the new status and priority
          setTickets((prevTickets) =>
            prevTickets.map((ticket) =>
              ticket.id === ticketId
                ? {
                    ...ticket,
                    priority: updatedData.priority,
                    priorityName:
                      priorities.find((p) => p.id === parseInt(updatedData.priority))?.name ||
                      'Not set',
                    status: updatedData.status,
                  }
                : ticket
            )
          );
        }

        setOriginalFormData(updatedData);
        setEditingTicketId(null);
        refetchTickets();
      } catch (error) {
        console.error('Update error:', error.response?.data || error.message);
        if (error.response?.status === 404) {
          Swal.fire({
            title: 'Ticket Not Found',
            icon: 'error',
            text: `The ticket with ID ${ticketId} does not exist.`,
            confirmButtonText: 'OK',
          });
          setEditingTicketId(null);
          refetchTickets();
        } else if (error.message.includes('Network Error')) {
          Swal.fire({
            title: 'Network Error',
            icon: 'error',
            text: 'Failed to connect to the server. Please check your network or contact the administrator.',
          });
        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: error.response?.data?.message || 'Failed to update ticket.',
          });
        }
        setEditFormData(originalFormData);
      } finally {
        setIsLoading(false);
      }
    } else {
      setEditFormData(originalFormData);
    }
  };

  const paginatedData = filteredTickets.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const headerStyle = {
    backgroundColor: '#ffffff',
    color: '#172b4d',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '8px',
    marginBottom: '10px',
  };

  const filterRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '10px',
  };

  const selectStyle = {
    padding: '8px',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    width: '100%',
  };

  const inputStyle = {
    padding: '6px',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#172b4d',
    width: '600px',
  };

  const tableContainerStyle = {
    overflowX: 'auto',
    border: '1px solid #dfe1e6',
    backgroundColor: '#ffffff',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    minWidth: '1000px',
  };

  const cellStyle = {
    border: '1px solid #dfe1e6',
    padding: '8px',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    color: '#172b4d',
    textAlign: 'center',
  };

  const headerCellStyle = {
    backgroundColor: '#0052cc',
    border: '1px solid #dfe1e6',
    padding: '8px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '60px', marginLeft: '250px' }}>
      <div style={headerStyle}>My Tickets</div>
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
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={selectStyle}
        >
          <option value="all">All</option>
          {statuses.map((status) => (
            <option key={status.id} value={status.statusName}>
              {status.statusName}
            </option>
          ))}
        </select>
      </div>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: '#f4f5f7' }}>
              {['Sr No', 'Ticket Code', 'Priority', 'Title', 'Description', 'Assigned To', 'Status', 'Created At'].map(
                (header, idx) => (
                  <th
                    key={idx}
                    style={headerCellStyle}
                    onClick={() => handleSort(header.toLowerCase().replace(/[\s.]/g, ''))}
                  >
                    {header}{' '}
                    {sortConfig.key === header.toLowerCase().replace(/[\s.]/g, '') &&
                      (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ ...cellStyle, textAlign: 'center' }}>
                  No Data Available
                </td>
              </tr>
            ) : (
              paginatedData.map((ticket, idx) => (
                <tr
                  key={idx}
                  style={{ fontWeight: 'bold', pointerEvents: isLoading ? 'none' : 'auto' }}
                  onClick={() => handleRowClick(ticket)}
                >
                  <td style={cellStyle}>{ticket.srNo}</td>
                  <td style={cellStyle}>{ticket.ticketCode}</td>
                  <td style={cellStyle}>
                    {editingTicketId === ticket.id ? (
                      <select
                        name="priority"
                        value={editFormData.priority}
                        onChange={(e) => handleSelectChange(e, ticket.id)}
                        style={selectStyle}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <option value="" disabled>
                          Select Priority
                        </option>
                        {priorities.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      ticket.priorityName
                    )}
                  </td>
                  <td style={cellStyle}>
                    {editingTicketId === ticket.id ? (
                      <input
                        type="text"
                        name="title"
                        value={editFormData.title}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleInputKeyDown(e, ticket.id)}
                        style={inputStyle}
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      ticket.title
                    )}
                  </td>
                  <td style={cellStyle}>
                    {editingTicketId === ticket.id ? (
                      <input
                        type="text"
                        name="description"
                        value={editFormData.description}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleInputKeyDown(e, ticket.id)}
                        style={inputStyle}
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      ticket.description?.slice(0, 20)
                    )}
                  </td>
                  <td style={cellStyle}>
                    {editingTicketId === ticket.id ? (
                      <select
                        name="assignedTo"
                        value={editFormData.assignedTo}
                        onChange={(e) => handleSelectChange(e, ticket.id)}
                        style={selectStyle}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <option value="0" disabled>
                          Select Assignee
                        </option>
                        {users.map((user) => (
                          <option key={user.id} value={user.id}>
                            {user.username}
                          </option>
                        ))}
                      </select>
                    ) : (
                      users.find((user) => user.id === parseInt(ticket.assignedTo))?.username ||
                      'Unassigned'
                    )}
                  </td>
                  <td style={cellStyle}>
                    {editingTicketId === ticket.id ? (
                      <select
                        name="status"
                        value={editFormData.status}
                        onChange={(e) => handleSelectChange(e, ticket.id)}
                        style={selectStyle}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <option value="" disabled>
                          Select Status
                        </option>
                        {statuses.map((status) => (
                          <option key={status.id} value={status.statusName}>
                            {status.statusName}
                          </option>
                        ))}
                      </select>
                    ) : (
                      ticket.status
                    )}
                  </td>
                  <td style={cellStyle}>{ticket.createdAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1 || isLoading}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            color: 'black',
            backgroundColor: '#f4f5f7',
            border: '1px solid #dfe1e6',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {'<'}
        </button>
        <span style={{ margin: '0 10px', padding: '5px', color: 'black' }}>
          {(currentPage - 1) * rowsPerPage + 1}-
          {Math.min(currentPage * rowsPerPage, filteredTickets.length)} of {filteredTickets.length}
        </span>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage >= Math.ceil(filteredTickets.length / rowsPerPage) || isLoading}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            color: 'black',
            backgroundColor: '#f4f5f7',
            border: '1px solid #dfe1e6',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {'>'}
        </button>
      </div>
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3000,
          }}
        >
          <CircularProgress />
        </div>
      )}
      <style>
        {`
          .swal-confirm-button {
            padding: 8px 16px;
            font-size: 14px;
            font-weight: bold;
            color: #ffffff;
            background-color: #0052cc;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
          }
          .swal-cancel-button {
            padding: 8px 16px;
            font-size: 14px;
            font-weight: bold;
            color: #172b4d;
            background-color: #d3d3d3;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default TicketTable;