// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import TicketForm from '../components/TicketForm';
// import Swal from 'sweetalert2';

// const Dashboard = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const fetchTickets = async () => {
//     try {
//       // Placeholder for API call to fetch tickets
//       // const response = await axiosInstance.get('/tickets');
//       // setTickets(response.data);

//       // Mock data for now
//       const mockTickets = [
//         { id: 'ITSM-1234', type: 'Request', summary: 'Add access to Jira', description: 'User needs access to Jira for project management', reporter: 'Product-Manager', assignee: 'Sammy-ServiceDesk', status: 'WAITING FOR SUPPORT', created: '24/Sep/2020', timeToResolve: '16m' },
//         // { id: 'ITSM-1233', type: 'Report a system problem', summary: "Barclay Inc. is slow", description: 'System performance issues during peak hours', reporter: 'ServiceDesk-Manager', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '3h 44m' },
//         // { id: 'ITSM-1232', type: 'Report a system problem', summary: "Can't access POS System", description: 'POS system inaccessible for sales team', reporter: 'Developer', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '3h 44m' },
//         // { id: 'ITSM-1231', type: 'Broken hardware', summary: "Can't access WEB System", description: 'Hardware failure affecting web access', reporter: 'ServiceDesk-Agent', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '3h 44m' },
//         // { id: 'ITSM-1230', type: 'Request access', summary: "Admin access to Jira", description: 'Requesting admin privileges in Jira', reporter: 'Product-Manager', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1229', type: 'Get a guest wifi account', summary: 'Guest wifi access', description: 'Need wifi access for a guest', reporter: 'Data-Developer', assignee: 'Sammy-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1228', type: 'Request new software', summary: 'Add Office to Mac', description: 'Install Microsoft Office on Mac', reporter: 'Product-Manager', assignee: 'Serena-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1227', type: 'Request new hardware', summary: 'Need new keyboard', description: 'Current keyboard is malfunctioning', reporter: 'ServiceDesk-Agent', assignee: 'Serena-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1226', type: 'Request new hardware', summary: 'Set up VPN', description: 'Need VPN setup for remote access', reporter: 'Christy-ServiceDesk', assignee: 'Serena-ServiceDesk', status: 'WORK IN PROGRESS', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1225', type: 'Request mobile device', summary: 'Need a new iPhone', description: 'Requesting a new iPhone for work', reporter: 'Change-Manager', assignee: 'Sammy-ServiceDesk', status: 'WAITING FOR APPROVAL', created: '23/Sep/2020', timeToResolve: '7h 44m' },
//         // { id: 'ITSM-1224', type: 'Get IT help', summary: 'Investigate website slowness', description: 'Website performance issues reported', reporter: 'Carly-Chief-Exec', assignee: 'Sammy-ServiceDesk', status: 'UNDER REVIEW', created: '23/Sep/2020', timeToResolve: '7h 44m' }
//       ];
//       setTickets(mockTickets);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     setTickets([newTicket, ...tickets]);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <TicketTable tickets={tickets} setTickets={setTickets} />
//         {showTicketForm && (
//           <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import TicketForm from '../components/TicketForm';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';

// const Dashboard = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusCounts, setStatusCounts] = useState({});

//   const fetchTickets = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.get('/tickets');
//       const ticketData = response.data.data || [];
//       const transformedTickets = ticketData.map(ticket => ({
//         type: 'Request',
//         title: ticket.title,
//         id: ticket.id,
//         description: ticket.description,
//         reporter: 'Unknown',
//         assignedTo: ticket.assignedTo || 'Unassigned',
//         status: ticket.status,
//         createdAt: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
//         timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
//       }));
//       setTickets(transformedTickets);

//       // Calculate status counts for the dashboard summary
//       const counts = transformedTickets.reduce((acc, ticket) => {
//         acc[ticket.status] = (acc[ticket.status] || 0) + 1;
//         return acc;
//       }, {});
//       setStatusCounts(counts);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//       setTickets([]);
//       setStatusCounts({});
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     const transformedTicket = {
//       type: 'Request',
//       title: newTicket.title,
//       id: newTicket.id,
//       description: newTicket.description,
//       reporter: 'Unknown',
//       assignedTo: newTicket.assignedTo || 'Unassigned',
//       status: newTicket.status || 'OPEN',
//       createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleDateString('en-GB'),
//       timeToResolve: newTicket.resolvedAt ? 'Resolved' : '0m',
//     };
//     setTickets([transformedTicket, ...tickets]);
//     fetchTickets(); // Refetch to ensure consistency
//   };

//   const summaryStyle = {
//     display: 'flex',
//     gap: '20px',
//     margin: '20px 0',
//     padding: '10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//   };

//   const summaryCardStyle = {


//     padding: '10px',
//     backgroundColor: '#ffffff',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     flex: 1,
//     textAlign: 'center',
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         {isLoading ? (
//           <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
//             Loading tickets...
//           </div>
//         ) : (
//           <>
//             <div style={{ padding: '20px', marginTop: '60px', marginLeft: '250px' }}>
//               <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
//                 Dashboard Summary
//               </h2>
//               <div style={summaryStyle}>
//                 {Object.entries(statusCounts).map(([status, count]) => (
//                   <div key={status} style={summaryCardStyle}>
//                     <div>
//                     <div style={{ fontSize: '14px', color: '#172b4d' }}>{status}</div>
//                     <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#172b4d' }}>{count}</div>
//                     </div>
//                     <div>
//                     <div style={{ fontSize: '14px', color: '#172b4d' }}>Pending</div>
//                     <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#172b4d' }}>10</div>
//                     </div>
                    
//                   </div>
                  
//                 ))}
//               </div>
//             </div>
//             <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
//           </>
//         )}
//         {showTicketForm && (
//           <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import TicketForm from '../components/TicketForm';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';

// const Dashboard = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusCounts, setStatusCounts] = useState({});

//   const fetchTickets = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.get('/tickets');
//       const ticketData = response.data.data || [];
//       const transformedTickets = ticketData.map(ticket => ({
//         type: 'Request',
//         title: ticket.title,
//         id: ticket.id,
//         description: ticket.description,
//         reporter: 'Unknown',
//         assignedTo: ticket.assignedTo || 'Unassigned',
//         status: ticket.status,
//         createdAt: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
//         timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
//       }));
//       setTickets(transformedTickets);

//       // Calculate status counts for the dashboard summary
//       const counts = transformedTickets.reduce((acc, ticket) => {
//         acc[ticket.status] = (acc[ticket.status] || 0) + 1;
//         return acc;
//       }, {});
//       setStatusCounts(counts);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//       setTickets([]);
//       setStatusCounts({});
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     const transformedTicket = {
//       type: 'Request',
//       title: newTicket.title,
//       id: newTicket.id,
//       description: newTicket.description,
//       reporter: 'Unknown',
//       assignedTo: newTicket.assignedTo || 'Unassigned',
//       status: newTicket.status || 'OPEN',
//       createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleDateString('en-GB'),
//       timeToResolve: newTicket.resolvedAt ? 'Resolved' : '0m',
//     };
//     setTickets([transformedTicket, ...tickets]);
//     fetchTickets(); // Refetch to ensure consistency
//   };

//   const summaryStyle = {
//     display: 'flex',
//     gap: '20px',
//     margin: '20px 0',
//     padding: '10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     justifyContent: 'center'
//   };

//   const statusColors = {
//     'OPEN': '#4CAF50',
//     'WORK IN PROGRESS': '#2196F3',
//     'WAITING FOR SUPPORT': '#FFC107',
//     'WAITING FOR APPROVAL': '#F44336',
//     'UNDER REVIEW': '#9C27B0'
//   };

//   const summaryBoxStyle = {
//     width: '150px',
//     height: '150px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '8px',
//     color: '#ffffff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     animation: 'fadeIn 0.5s ease-in-out',
//     cursor: 'pointer'
//   };

//   const keyframesStyle = `
//     @keyframes fadeIn {
//       0% { opacity: 0; transform: scale(0.8); }
//       100% { opacity: 1; transform: scale(1); }
//     }
//   `;

//   // Inject keyframes into the document (since we're using inline styles)
//   useEffect(() => {
//     const styleSheet = document.createElement('style');
//     styleSheet.type = 'text/css';
//     styleSheet.innerText = keyframesStyle;
//     document.head.appendChild(styleSheet);
//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);

//   const statusList = ['OPEN', 'WORK IN PROGRESS', 'WAITING FOR SUPPORT', 'WAITING FOR APPROVAL', 'UNDER REVIEW'];

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         {isLoading ? (
//           <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
//             Loading tickets...
//           </div>
//         ) : (
//           <>
//             <div style={{ padding: '20px', marginTop: '60px', marginLeft: '250px' }}>
//               <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
//                 Dashboard Summary
//               </h2>
//               <div style={summaryStyle}>
//                 {statusList.map((status, idx) => {
//                   const count = statusCounts[status] || 0;
//                   const backgroundColor = statusColors[status] || '#cccccc'; // Fallback color if status not in statusColors
//                   return (
//                     <div
//                       key={idx}
//                       style={{
//                         ...summaryBoxStyle,
//                         backgroundColor,
//                       }}
//                       onMouseOver={(e) => {
//                         e.currentTarget.style.transform = 'scale(1.05)';
//                         e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
//                       }}
//                       onMouseOut={(e) => {
//                         e.currentTarget.style.transform = 'scale(1)';
//                         e.currentTarget.style.boxShadow = 'none';
//                       }}
//                     >
//                       <div style={{ fontSize: '16px', marginBottom: '10px' }}>{status}</div>
//                       <div style={{ fontSize: '32px' }}>{count}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
//           </>
//         )}
//         {showTicketForm && (
//           <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import TicketForm from '../components/TicketForm';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';

// const Dashboard = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusCounts, setStatusCounts] = useState({});

//   const fetchTickets = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.get('/tickets');
//       const ticketData = response.data.data || [];
//       const transformedTickets = ticketData.map(ticket => ({
//         type: 'Request',
//         title: ticket.title,
//         id: ticket.id,
//         description: ticket.description,
//         reporter: 'Unknown',
//         assignedTo: ticket.assignedTo || 'Unassigned',
//         status: ticket.status,
//         createdAt: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
//         timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
//       }));
//       setTickets(transformedTickets);

//       // Calculate status counts for the dashboard summary
//       const counts = transformedTickets.reduce((acc, ticket) => {
//         acc[ticket.status] = (acc[ticket.status] || 0) + 1;
//         return acc;
//       }, {});
//       setStatusCounts(counts);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//       setTickets([]);
//       setStatusCounts({});
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     const transformedTicket = {
//       type: 'Request',
//       title: newTicket.title,
//       id: newTicket.id,
//       description: newTicket.description,
//       reporter: 'Unknown',
//       assignedTo: newTicket.assignedTo || 'Unassigned',
//       status: newTicket.status || 'OPEN',
//       createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleDateString('en-GB'),
//       timeToResolve: newTicket.resolvedAt ? 'Resolved' : '0m',
//     };
//     setTickets([transformedTicket, ...tickets]);
//     fetchTickets(); // Refetch to ensure consistency
//   };

//   const summaryStyle = {
//     display: 'flex',
//     gap: '20px',
//     margin: '20px 0',
//     padding: '10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     overflowX: 'auto', // Allow horizontal scrolling if content overflows
//     flexWrap: 'nowrap'
//   };

//   const statusColumnStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     minWidth: '200px',
//     maxWidth: '250px'
//   };

//   const statusColors = {
//     'OPEN': '#4CAF50',
//     'WORK IN PROGRESS': '#2196F3',
//     'WAITING FOR SUPPORT': '#FFC107',
//     'WAITING FOR APPROVAL': '#F44336',
//     'UNDER REVIEW': '#9C27B0'
//   };

//   const summaryBoxStyle = {
//     width: '150px',
//     height: '150px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '8px',
//     color: '#ffffff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     animation: 'fadeIn 0.5s ease-in-out',
//     cursor: 'pointer',
//     marginBottom: '10px'
//   };

//   const ticketCardStyle = {
//     backgroundColor: '#ffffff',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     padding: '10px',
//     marginBottom: '10px',
//     width: '100%',
//     boxSizing: 'border-box',
//     transition: 'transform 0.2s ease, box-shadow 0.2s ease'
//   };

//   const ticketFieldStyle = {
//     fontSize: '14px',
//     color: '#172b4d',
//     marginBottom: '5px',
//     wordWrap: 'break-word'
//   };

//   const ticketLabelStyle = {
//     fontWeight: 'bold',
//     marginRight: '5px'
//   };

//   const noTicketsStyle = {
//     fontSize: '14px',
//     color: '#5e6c84',
//     textAlign: 'center',
//     padding: '10px'
//   };

//   const keyframesStyle = `
//     @keyframes fadeIn {
//       0% { opacity: 0; transform: scale(0.8); }
//       100% { opacity: 1; transform: scale(1); }
//     }
//   `;

//   // Inject keyframes into the document
//   useEffect(() => {
//     const styleSheet = document.createElement('style');
//     styleSheet.type = 'text/css';
//     styleSheet.innerText = keyframesStyle;
//     document.head.appendChild(styleSheet);
//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);

//   const statusList = ['OPEN', 'WORK IN PROGRESS', 'WAITING FOR SUPPORT', 'WAITING FOR APPROVAL', 'UNDER REVIEW'];

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         {isLoading ? (
//           <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
//             Loading tickets...
//           </div>
//         ) : (
//           <>
//             <div style={{ padding: '20px', marginTop: '60px', marginLeft: '250px' }}>
//               <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
//                 Dashboard Summary
//               </h2>
//               <div style={summaryStyle}>
//                 {statusList.map((status, idx) => {
//                   const count = statusCounts[status] || 0;
//                   const backgroundColor = statusColors[status] || '#cccccc';
//                   const statusTickets = tickets.filter(ticket => ticket.status === status);

//                   return (
//                     <div key={idx} style={statusColumnStyle}>
//                       {/* Status Box */}
//                       <div
//                         style={{
//                           ...summaryBoxStyle,
//                           backgroundColor,
//                         }}
//                         onMouseOver={(e) => {
//                           e.currentTarget.style.transform = 'scale(1.05)';
//                           e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
//                         }}
//                         onMouseOut={(e) => {
//                           e.currentTarget.style.transform = 'scale(1)';
//                           e.currentTarget.style.boxShadow = 'none';
//                         }}
//                       >
//                         <div style={{ fontSize: '16px', marginBottom: '10px' }}>{status}</div>
//                         <div style={{ fontSize: '32px' }}>{count}</div>
//                       </div>

//                       {/* Ticket Details Below */}
//                       <div style={{ width: '100%' }}>
//                         {statusTickets.length === 0 ? (
//                           <div style={noTicketsStyle}>No tickets in this status</div>
//                         ) : (
//                           statusTickets.map((ticket, ticketIdx) => (
//                             <div
//                               key={ticketIdx}
//                               style={ticketCardStyle}
//                               onMouseOver={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1.02)';
//                                 e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
//                               }}
//                               onMouseOut={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1)';
//                                 e.currentTarget.style.boxShadow = 'none';
//                               }}
//                             >
//                               <div style={ticketFieldStyle}>
//                                 <span style={ticketLabelStyle}>Title:</span> {ticket.title || '-'}
//                               </div>
//                               <div style={ticketFieldStyle}>
//                                 <span style={ticketLabelStyle}>Description:</span> {ticket.description || '-'}
//                               </div>
//                               <div style={ticketFieldStyle}>
//                                 <span style={ticketLabelStyle}>Assigned To:</span> {ticket.assignedTo || '-'}
//                               </div>
//                             </div>
//                           ))
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
//           </>
//         )}
//         {showTicketForm && (
//           <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import TicketForm from '../components/TicketForm';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';

// const Dashboard = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusCounts, setStatusCounts] = useState({});

//   const fetchTickets = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.get('/tickets');
//       const ticketData = response.data.data || [];
//       const transformedTickets = ticketData.map(ticket => ({
//         type: 'Request',
//         title: ticket.title,
//         id: ticket.id,
//         description: ticket.description,
//         reporter: 'Unknown',
//         assignedTo: ticket.assignedTo || 'Unassigned',
//         status: ticket.status,
//         createdAt: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
//         timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
//       }));
//       setTickets(transformedTickets);

//       const counts = transformedTickets.reduce((acc, ticket) => {
//         acc[ticket.status] = (acc[ticket.status] || 0) + 1;
//         return acc;
//       }, {});
//       setStatusCounts(counts);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//       setTickets([]);
//       setStatusCounts({});
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     const transformedTicket = {
//       type: 'Request',
//       title: newTicket.title,
//       id: newTicket.id,
//       description: newTicket.description,
//       reporter: 'Unknown',
//       assignedTo: newTicket.assignedTo || 'Unassigned',
//       status: newTicket.status || 'OPEN',
//       createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleDateString('en-GB'),
//       timeToResolve: newTicket.resolvedAt ? 'Resolved' : '0m',
//     };
//     setTickets([transformedTicket, ...tickets]);
//     fetchTickets();
//   };

//   const summaryStyle = {
//     display: 'flex',
//     gap: '20px',
//     margin: '20px 0',
//     padding: '10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     overflowX: 'auto',
//     flexWrap: 'nowrap'
//   };

//   const statusColumnStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     minWidth: '200px',
//     maxWidth: '250px'
//   };

//   const statusGradients = {
//     'OPEN': 'linear-gradient(135deg, #4CAF50, #81C784)',
//     'WORK IN PROGRESS': 'linear-gradient(135deg, #2196F3, #64B5F6)',
//     'WAITING FOR SUPPORT': 'linear-gradient(135deg, #FFC107, #FFD54F)',
//     'WAITING FOR APPROVAL': 'linear-gradient(135deg, #F44336, #EF5350)',
//     'UNDER REVIEW': 'linear-gradient(135deg, #9C27B0, #AB47BC)'
//   };

//   const statusIcons = {
//     'OPEN': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M20 6L9 17l-5-5" />
//       </svg>
//     ),
//     'WORK IN PROGRESS': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z" />
//       </svg>
//     ),
//     'WAITING FOR SUPPORT': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
//       </svg>
//     ),
//     'WAITING FOR APPROVAL': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4 1.5-1.5L11 14l5-5 1.5 1.5L11 17z" />
//       </svg>
//     ),
//     'UNDER REVIEW': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <circle cx="11" cy="11" r="8" />
//         <line x1="21" y1="21" x2="16.65" y2="16.65" />
//       </svg>
//     )
//   };

//   const summaryBoxStyle = {
//     width: '150px',
//     height: '150px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '12px',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glassmorphism effect
//     backdropFilter: 'blur(10px)', // Glassmorphism blur
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     color: '#ffffff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)', // Text shadow for readability
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease, rotate 0.3s ease',
//     animation: 'pulse 1s ease-in-out infinite',
//     cursor: 'pointer',
//     marginBottom: '10px',
//     position: 'relative',
//     overflow: 'hidden'
//   };

//   const ticketCardStyle = {
//     backgroundColor: '#ffffff',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     padding: '10px',
//     marginBottom: '10px',
//     width: '100%',
//     boxSizing: 'border-box',
//     transition: 'transform 0.2s ease, box-shadow 0.2s ease'
//   };

//   const ticketFieldStyle = {
//     fontSize: '14px',
//     color: '#172b4d',
//     marginBottom: '5px',
//     wordWrap: 'break-word'
//   };

//   const ticketLabelStyle = {
//     fontWeight: 'bold',
//     marginRight: '5px'
//   };

//   const noTicketsStyle = {
//     fontSize: '14px',
//     color: '#5e6c84',
//     textAlign: 'center',
//     padding: '10px'
//   };

//   const keyframesStyle = `
//     @keyframes pulse {
//       0% { transform: scale(1); }
//       50% { transform: scale(1.03); }
//       100% { transform: scale(1); }
//     }
//     @keyframes fadeIn {
//       0% { opacity: 0; transform: scale(0.8); }
//       100% { opacity: 1; transform: scale(1); }
//     }
//   `;

//   useEffect(() => {
//     const styleSheet = document.createElement('style');
//     styleSheet.type = 'text/css';
//     styleSheet.innerText = keyframesStyle;
//     document.head.appendChild(styleSheet);
//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);

//   const statusList = ['OPEN', 'WORK IN PROGRESS', 'WAITING FOR SUPPORT', 'WAITING FOR APPROVAL', 'UNDER REVIEW'];

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         {isLoading ? (
//           <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
//             Loading tickets...
//           </div>
//         ) : (
//           <>
//             <div style={{ padding: '20px', marginTop: '60px', marginLeft: '250px' }}>
//               <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
//                 Dashboard Summary
//               </h2>
//               <div style={summaryStyle}>
//                 {statusList.map((status, idx) => {
//                   const count = statusCounts[status] || 0;
//                   const background = statusGradients[status] || 'linear-gradient(135deg, #cccccc, #999999)';
//                   const statusTickets = tickets.filter(ticket => ticket.status === status);

//                   return (
//                     <div key={idx} style={statusColumnStyle}>
//                       {/* Status Box */}
//                       <div
//                         style={{
//                           ...summaryBoxStyle,
//                           background,
//                         }}
//                         onMouseOver={(e) => {
//                           e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
//                           e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
//                         }}
//                         onMouseOut={(e) => {
//                           e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
//                           e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
//                         }}
//                       >
//                         <div style={{ marginBottom: '8px' }}>{statusIcons[status]}</div>
//                         <div style={{ fontSize: '14px', marginBottom: '8px' }}>{status}</div>
//                         <div style={{ fontSize: '28px' }}>{count}</div>
//                       </div>

//                       {/* Ticket Details Below */}
//                       <div style={{ width: '100%' }}>
//                         {statusTickets.length === 0 ? (
//                           <div style={noTicketsStyle}>No tickets in this status</div>
//                         ) : (
//                           statusTickets.map((ticket, ticketIdx) => (
//                             <div
//                               key={ticketIdx}
//                               style={ticketCardStyle}
//                               onMouseOver={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1.02)';
//                                 e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
//                               }}
//                               onMouseOut={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1)';
//                                 e.currentTarget.style.boxShadow = 'none';
//                               }}
//                             >
//                               <div style={ticketFieldStyle}>
//                                 <span style={ticketLabelStyle}>Title:</span> {ticket.title || '-'}
//                               </div>
//                               <div style={ticketFieldStyle}>
//                                 <span style={ticketLabelStyle}>Description:</span> {ticket.description || '-'}
//                               </div>
//                               <div style={ticketFieldStyle}>
//                                 <span style={ticketLabelStyle}>Assigned To:</span> {ticket.assignedTo || '-'}
//                               </div>
//                             </div>
//                           ))
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <TicketTable tickets={tickets} setTickets={setTickets} refetchTickets={fetchTickets} />
//           </>
//         )}
//         {showTicketForm && (
//           <TicketForm onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import TicketTable from '../components/TicketTable';
// import TicketForm from '../components/TicketForm';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';

// const Dashboard = ({ setCurrentPage }) => {
//   const [tickets, setTickets] = useState([]);
//   const [showTicketForm, setShowTicketForm] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusCounts, setStatusCounts] = useState({});

//   const fetchTickets = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.get('/tickets');
//       const ticketData = response.data.data || [];
//       const transformedTickets = ticketData.map(ticket => ({
//         type: 'Request',
//         title: ticket.title,
//         id: ticket.id,
//         description: ticket.description,
//         reporter: 'Unknown',
//         assignedTo: ticket.assignedTo || 'Unassigned',
//         status: ticket.status,
//         createdAt: new Date(ticket.createdAt).toLocaleDateString('en-GB'),
//         timeToResolve: ticket.resolvedAt ? 'Resolved' : '0m',
//       }));
//       setTickets(transformedTickets);

//       const counts = transformedTickets.reduce((acc, ticket) => {
//         acc[ticket.status] = (acc[ticket.status] || 0) + 1;
//         return acc;
//       }, {});
//       setStatusCounts(counts);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error Fetching Tickets',
//         icon: 'error',
//         text: error.message || 'Failed to fetch tickets'
//       });
//       setTickets([]);
//       setStatusCounts({});
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, []);

//   const handleCreateTicket = (newTicket) => {
//     const transformedTicket = {
//       type: 'Request',
//       title: newTicket.title,
//       id: newTicket.id,
//       description: newTicket.description,
//       reporter: 'Unknown',
//       assignedTo: newTicket.assignedTo || 'Unassigned',
//       status: newTicket.status || 'OPEN',
//       createdAt: new Date(newTicket.createdAt || Date.now()).toLocaleDateString('en-GB'),
//       timeToResolve: newTicket.resolvedAt ? 'Resolved' : '0m',
//     };
//     setTickets([transformedTicket, ...tickets]);
//     fetchTickets();
//   };

//   const summaryStyle = {
//     display: 'flex',
//     gap: '20px',
//     margin: '20px 0',
//     padding: '10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     overflowX: 'auto',
//     flexWrap: 'nowrap'
//   };

//   const statusColumnStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     minWidth: '200px',
//     maxWidth: '250px'
//   };

//   const statusGradients = {
//     'OPEN': 'linear-gradient(135deg, #4CAF50, #81C784)',
//     'WORK IN PROGRESS': 'linear-gradient(135deg, #2196F3, #64B5F6)',
//     'WAITING FOR SUPPORT': 'linear-gradient(135deg, #FFC107, #FFD54F)',
//     'WAITING FOR APPROVAL': 'linear-gradient(135deg, #F44336, #EF5350)',
//     'UNDER REVIEW': 'linear-gradient(135deg, #9C27B0, #AB47BC)'
//   };

//   const statusColors = {
//     'OPEN': '#4CAF50',
//     'WORK IN PROGRESS': '#2196F3',
//     'WAITING FOR SUPPORT': '#FFC107',
//     'WAITING FOR APPROVAL': '#F44336',
//     'UNDER REVIEW': '#9C27B0'
//   };

//   const statusIcons = {
//     'OPEN': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M20 6L9 17l-5-5" />
//       </svg>
//     ),
//     'WORK IN PROGRESS': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z" />
//       </svg>
//     ),
//     'WAITING FOR SUPPORT': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
//       </svg>
//     ),
//     'WAITING FOR APPROVAL': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4 1.5-1.5L11 14l5-5 1.5 1.5L11 17z" />
//       </svg>
//     ),
//     'UNDER REVIEW': (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
//         <circle cx="11" cy="11" r="8" />
//         <line x1="21" y1="21" x2="16.65" y2="16.65" />
//       </svg>
//     )
//   };

//   const summaryBoxStyle = {
//     width: '150px',
//     height: '150px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '12px',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     color: '#ffffff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease, rotate 0.3s ease',
//     animation: 'pulse 1s ease-in-out infinite',
//     cursor: 'pointer',
//     marginBottom: '10px',
//     position: 'relative',
//     overflow: 'hidden'
//   };

//   const ticketCardStyle = {
//     background: 'linear-gradient(145deg, #ffffff, #f9f9f9)', // Subtle gradient background
//     borderRadius: '8px',
//     padding: '15px',
//     marginBottom: '10px',
//     width: '100%',
//     boxSizing: 'border-box',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
//     position: 'relative',
//     animation: 'slideIn 0.5s ease-out',
//     border: '2px solid transparent',
//     backgroundClip: 'padding-box',
//     borderImage: 'linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 1'
//   };

//   const ticketFieldStyle = {
//     fontSize: '14px',
//     color: '#172b4d',
//     marginBottom: '8px',
//     wordWrap: 'break-word',
//     display: 'flex',
//     alignItems: 'center',
//     fontFamily: "'Roboto', sans-serif" // Modern font (fallback to sans-serif)
//   };

//   const ticketLabelStyle = {
//     fontWeight: 'bold',
//     marginRight: '5px',
//     color: '#34495e'
//   };

//   const ticketIconStyle = {
//     width: '16px',
//     height: '16px',
//     marginRight: '8px',
//     color: '#5e6c84'
//   };

//   const statusBarStyle = {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     width: '5px',
//     borderRadius: '8px 0 0 8px'
//   };

//   const noTicketsStyle = {
//     fontSize: '14px',
//     color: '#5e6c84',
//     textAlign: 'center',
//     padding: '10px',
//     fontFamily: "'Roboto', sans-serif"
//   };

//   const keyframesStyle = `
//     @keyframes pulse {
//       0% { transform: scale(1); }
//       50% { transform: scale(1.03); }
//       100% { transform: scale(1); }
//     }
//     @keyframes fadeIn {
//       0% { opacity: 0; transform: scale(0.8); }
//       100% { opacity: 1; transform: scale(1); }
//     }
//     @keyframes slideIn {
//       0% { opacity: 0; transform: translateX(-20px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes borderPulse {
//       0% { border-image: linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 1; }
//       50% { border-image: linear-gradient(145deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)) 1; }
//       100% { border-image: linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 1; }
//     }
//   `;

//   useEffect(() => {
//     const styleSheet = document.createElement('style');
//     styleSheet.type = 'text/css';
//     styleSheet.innerText = keyframesStyle;
//     document.head.appendChild(styleSheet);
//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);

//   const statusList = ['OPEN', 'WORK IN PROGRESS', 'WAITING FOR SUPPORT', 'WAITING FOR APPROVAL', 'UNDER REVIEW'];

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         {isLoading ? (
//           <div style={{ padding: '20px', textAlign: 'center', color: '#172b4d' }}>
//             Loading tickets...
//           </div>
//         ) : (
//           <>
//             <div style={{ padding: '20px', marginTop: '60px', marginLeft: '250px' }}>
//               <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
//                 Dashboard Summary
//               </h2>
//               <div style={summaryStyle}>
//                 {statusList.map((status, idx) => {
//                   const count = statusCounts[status] || 0;
//                   const background = statusGradients[status] || 'linear-gradient(145deg, #cccccc, #999999)';
//                   const statusTickets = tickets.filter(ticket => ticket.status === status);
//                   const statusColor = statusColors[status] || '#cccccc';

//                   return (
//                     <div key={idx} style={statusColumnStyle}>
//                       {/* Status Box */}
//                       <div
//                         style={{
//                           ...summaryBoxStyle,
//                           background,
//                         }}
//                         onMouseOver={(e) => {
//                           e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
//                           e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
//                         }}
//                         onMouseOut={(e) => {
//                           e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
//                           e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
//                         }}
//                       >
//                         <div style={{ marginBottom: '8px' }}>{statusIcons[status]}</div>
//                         <div style={{ fontSize: '14px', marginBottom: '8px' }}>{status}</div>
//                         <div style={{ fontSize: '28px' }}>{count}</div>
//                       </div>
//                       <hr></hr>
//                       {/* Ticket Details Below */}
//                       <div style={{ width: '100%' }}>
//                         {statusTickets.length === 0 ? (
//                           <div style={noTicketsStyle}>No tickets in this status</div>
//                         ) : (
//                           statusTickets.map((ticket, ticketIdx) => (
//                             <div
//                               key={ticketIdx}
//                               style={{
//                                 ...ticketCardStyle,
//                                 borderImage: `linear-gradient(145deg, ${statusColor}, transparent) 1`,
//                                 animation: `${ticketCardStyle.animation}, borderPulse 2s ease-in-out infinite`
//                               }}
//                               onMouseOver={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1.03)';
//                                 e.currentTarget.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 3px ${statusColor}80`;
//                               }}
//                               onMouseOut={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1)';
//                                 e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
//                               }}
//                             >
//                               <div style={{ ...statusBarStyle, backgroundColor: statusColor }} />
//                               <div style={ticketFieldStyle}>
//                                 <svg style={ticketIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                   <path d="M3 9h18M9 3v18" />
//                                 </svg>
//                                 <span style={ticketLabelStyle}>Title:</span> {ticket.title.slice(0,15) || '-'}
//                               </div>
//                               <div style={ticketFieldStyle}>
//                                 <svg style={ticketIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                   <path d="M3 7h18M3 12h18M3 17h18" />
//                                 </svg>
//                                 <span style={ticketLabelStyle}>Description:</span> {ticket.description.slice(0,6) || '-'}
//                               </div>
//                               <div style={ticketFieldStyle}>
//                                 <svg style={ticketIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
//                                   <path d="M9 12l2 2l4 -4" />
//                                 </svg>
//                                 <span style={ticketLabelStyle}>Assigned:</span> {ticket.assignedTo || '-'}
//                               </div>
//                             </div>
//                           ))
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
            
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketTable from '../components/TicketTable';
import TicketForm from '../components/TicketForm';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';

const Dashboard = ({ setCurrentPage }) => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusCounts, setStatusCounts] = useState({});

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

  const summaryStyle = {
    display: 'flex',
    gap: '10px', // Reduced gap to save space
    margin: '10px 0',
    padding: '20px',
    backgroundColor: '#f4f5f7',
    borderRadius: '4px',
    flexWrap: 'wrap', // Allow wrapping if viewport is too small
    justifyContent: 'space-between' // Distribute space evenly
  };

  const statusColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '180px', // Reduced to fit within viewport
    maxWidth: '200px', // Reduced to fit within viewport
    flex: '1 1 auto' // Allow columns to grow/shrink evenly
  };

  const statusGradients = {
    'OPEN': 'linear-gradient(135deg, #4CAF50, #81C784)',
    'WORK IN PROGRESS': 'linear-gradient(135deg, #2196F3, #64B5F6)',
    'WAITING FOR SUPPORT': 'linear-gradient(135deg, #FFC107, #FFD54F)',
    'WAITING FOR APPROVAL': 'linear-gradient(135deg, #F44336, #EF5350)',
    'UNDER REVIEW': 'linear-gradient(135deg, #9C27B0, #AB47BC)'
  };

  const statusColors = {
    'OPEN': '#4CAF50',
    'WORK IN PROGRESS': '#2196F3',
    'WAITING FOR SUPPORT': '#FFC107',
    'WAITING FOR APPROVAL': '#F44336',
    'UNDER REVIEW': '#9C27B0'
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
    'WAITING FOR APPROVAL': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4 1.5-1.5L11 14l5-5 1.5 1.5L11 17z" />
      </svg>
    ),
    'UNDER REVIEW': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  };

  const summaryBoxStyle = {
    width: '150px', // Reduced size to fit
    height: '120px', // Reduced size to fit
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
    padding: '10px', // Reduced padding to save space
    marginBottom: '8px', // Reduced margin to save space
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
    position: 'relative',
    animation: 'slideIn 0.5s ease-out',
    border: '2px solid transparent',
    backgroundClip: 'padding-box',
    borderImage: 'linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)) 1'
  };

  const ticketFieldStyle = {
    fontSize: '12px', // Reduced font size to save space
    color: '#172b4d',
    marginBottom: '5px', // Reduced margin to save space
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
    width: '14px', // Reduced icon size to save space
    height: '14px',
    marginRight: '6px', // Reduced margin to save space
    color: '#5e6c84'
  };

  const statusBarStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px', // Reduced width to save space
    borderRadius: '8px 0 0 8px'
  };

  const noTicketsStyle = {
    fontSize: '12px', // Reduced font size to save space
    color: '#5e6c84',
    textAlign: 'center',
    padding: '8px', // Reduced padding to save space
    fontFamily: "'Roboto', sans-serif"
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

  const statusList = ['OPEN', 'WORK IN PROGRESS', 'WAITING FOR SUPPORT', 'WAITING FOR APPROVAL', 'UNDER REVIEW'];

  return (
    <div style={{ display: 'flex', width: '100%', overflowX: 'hidden' }}>
      <Sidebar setCurrentPage={setCurrentPage} currentPage="dashboard" />
      <div style={{ 
        flex: 1, 
        paddingLeft: '250px', // Use padding instead of margin to respect sidebar width
        boxSizing: 'border-box', // Ensure padding is included in width calculation
        overflowX: 'hidden' // Prevent horizontal scrolling
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
              marginLeft: '0', // Remove marginLeft since paddingLeft on parent handles it
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
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;