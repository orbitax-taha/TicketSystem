// import React, { useState } from 'react';
// import Logo from './LOGO.png'; // Import the logo image

// const Sidebar = ({ setCurrentPage, currentPage }) => {
//   const [openSections, setOpenSections] = useState({
//     projects: true, // Ensures "PROJECTS" is open by default
//     operations: false,
//     knowledgeBase: false,
//     reports: false,
//     channelsPeople: false
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const sidebarStyle = {
//     width: '210px',
//     backgroundColor: '#f4f5f7',
//     borderRight: '1px solid #dfe1e6',
//     height: '100vh',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif'
//   };

//   const logoStyle = {
//     width: '180px',
//     height: '40px',
//     marginBottom: '20px'
//   };

//   const titleStyle = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '10px',
//     padding: '8px 10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s'
//   };

//   const menuItemStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     cursor: 'pointer',
//     borderRadius: '4px',
//     marginBottom: '5px',
//     transition: 'background-color 0.2s, transform 0.2s'
//   };

//   const activeMenuItemStyle = {
//     ...menuItemStyle,
//     backgroundColor: '#091e420f'
//   };

//   const iconStyle = {
//     width: '16px',
//     height: '16px',
//     marginRight: '10px'
//   };

//   const userSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '20px',
//     cursor: 'pointer',
//     transition: 'transform 0.2s'
//   };

//   const userLogoStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#172b4d',
//     color: '#ffffff',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     transition: 'box-shadow 0.2s'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     flexDirection: 'column'
//   };

//   const userNameStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d'
//   };

//   const userRoleStyle = {
//     fontSize: '12px',
//     color: '#5e6c84'
//   };

//   return (
//     <div style={sidebarStyle}>
//       <div>
//         <img src={Logo} style={logoStyle} alt="Orbitax System Private Limited" />
//       </div>
//       <div style={userSectionStyle}>
//         <div style={userLogoStyle} className="user-logo">A</div>
//         <div style={userInfoStyle}>
//           <div style={userNameStyle}>Sumit Kumar</div>
//           <div style={userRoleStyle}>Admin</div>
//         </div>
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('projects')}>
//           PROJECTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.projects ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.projects && (
//           <div>
//             <div
//               style={currentPage === 'dashboard' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('dashboard')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'dashboard' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"/>
//               </svg>
//               Status
//             </div>
//             <div
//               style={currentPage === 'myTickets' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('myTickets')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'myTickets' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
//               </svg>
//               My Tickets
//             </div>
//             <div
//               style={currentPage === 'queues' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('queues')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'queues' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20V10M5 15l7-7 7 7M4 20h16"/>
//               </svg>
//               Queues
//             </div>
//             <div
//               style={currentPage === 'incident' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('incident')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'incident' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="12" cy="12" r="10"/>
//                 <path d="M12 6v6h6"/>
//               </svg>
//               Incidents
//             </div>
//             <div
//               style={currentPage === 'problems' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('problems')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'problems' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2v20M2 12h20"/>
//               </svg>
//               Problems
//             </div>
//             <div
//               style={currentPage === 'changes' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('changes')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'changes' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Changes
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('operations')}>
//           OPERATIONS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.operations ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.operations && (
//           <div>
//             <div
//               style={currentPage === 'alerts' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('alerts')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'alerts' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 15a3 3 0 100-6 3 3 0 000 6z"/>
//               </svg>
//               Alerts
//             </div>
//             <div
//               style={currentPage === 'oncall' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('oncall')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'oncall' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 20c0-4 4-7 8-7s8 3 8 7"/>
//               </svg>
//               On-call
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('reports')}>
//           REPORTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.reports ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.reports && (
//           <div>
//             <div
//               style={currentPage === 'reports' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('reports')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'reports' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Reports
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import Logo from './LOGO.png'; // Import the logo image

// const Sidebar = ({ setCurrentPage, currentPage }) => {
//   const [openSections, setOpenSections] = useState({
//     projects: true, // Ensures "PROJECTS" is open by default
//     operations: false,
//     knowledgeBase: false,
//     reports: false,
//     channelsPeople: false
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const sidebarStyle = {
//     width: '210px',
//     backgroundColor: '#f4f5f7',
//     borderRight: '1px solid #dfe1e6',
//     height: '100vh',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif'
//   };

//   const logoStyle = {
//     width: '180px',
//     height: '40px',
//     marginBottom: '20px'
//   };

//   const titleStyle = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '10px',
//     padding: '8px 10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s'
//   };

//   const menuItemStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     cursor: 'pointer',
//     borderRadius: '4px',
//     marginBottom: '5px',
//     transition: 'background-color 0.2s, transform 0.2s'
//   };

//   const activeMenuItemStyle = {
//     ...menuItemStyle,
//     backgroundColor: '#091e420f'
//   };

//   const iconStyle = {
//     width: '16px',
//     height: '16px',
//     marginRight: '10px'
//   };

//   const userSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '20px',
//     cursor: 'pointer',
//     transition: 'transform 0.2s'
//   };

//   const userLogoStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#172b4d',
//     color: '#ffffff',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     transition: 'box-shadow 0.2s'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     flexDirection: 'column'
//   };

//   const userNameStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d'
//   };

//   const userRoleStyle = {
//     fontSize: '12px',
//     color: '#5e6c84'
//   };

//   return (
//     <div style={sidebarStyle}>
//       <div>
//         <img src={Logo} style={logoStyle} alt="Orbitax System Private Limited" />
//       </div>
//       <div style={userSectionStyle}>
//         <div style={userLogoStyle} className="user-logo">A</div>
//         <div style={userInfoStyle}>
//           <div style={userNameStyle}>Sumit Kumar</div>
//           <div style={userRoleStyle}>Admin</div>
//         </div>
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('projects')}>
//           PROJECTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.projects ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.projects && (
//           <div>
//             <div
//               style={currentPage === 'dashboard' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('dashboard')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'dashboard' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"/>
//               </svg>
//               Status
//             </div>
//             <div
//               style={currentPage === 'myTickets' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('myTickets')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'myTickets' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
//               </svg>
//               My Tickets
//             </div>
//             <div
//               style={currentPage === 'queues' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('queues')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'queues' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20V10M5 15l7-7 7 7M4 20h16"/>
//               </svg>
//               Queues
//             </div>
//             <div
//               style={currentPage === 'incident' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('incident')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'incident' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="12" cy="12" r="10"/>
//                 <path d="M12 6v6h6"/>
//               </svg>
//               Incidents
//             </div>
//             <div
//               style={currentPage === 'problems' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('problems')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'problems' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2v20M2 12h20"/>
//               </svg>
//               Problems
//             </div>
//             <div
//               style={currentPage === 'changes' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('changes')}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'changes' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Changes
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('operations')}>
//           OPERATIONS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.operations ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.operations && (
//           <div>
//             <div
//               style={currentPage === 'alerts' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('alerts')} // Clicking an item does not toggle the section
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'alerts' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 15a3 3 0 100-6 3 3 0 000 6z"/>
//               </svg>
//               Alerts
//             </div>
//             <div
//               style={currentPage === 'oncall' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('oncall')} // Clicking an item does not toggle the section
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'oncall' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 20c0-4 4-7 8-7s8 3 8 7"/>
//               </svg>
//               On-call
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('reports')}>
//           REPORTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.reports ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.reports && (
//           <div>
//             <div
//               style={currentPage === 'reports' ? activeMenuItemStyle : menuItemStyle}
//               onClick={() => setCurrentPage('reports')} // Clicking an item does not toggle the section
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'reports' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Reports
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import Logo from './LOGO.png'; // Import the logo image

// const Sidebar = ({ setCurrentPage, currentPage }) => {
//   const [openSections, setOpenSections] = useState({
//     projects: true, // Ensures "PROJECTS" is open by default
//     operations: false,
//     knowledgeBase: false,
//     reports: false,
//     channelsPeople: false
//   });

//   const toggleSection = (section) => {
//     // When opening a section, close all others
//     setOpenSections((prev) => {
//       const newState = {
//         projects: false,
//         operations: false,
//         knowledgeBase: false,
//         reports: false,
//         channelsPeople: false
//       };
//       newState[section] = !prev[section]; // Toggle the clicked section
//       return newState;
//     });
//   };

//   const sidebarStyle = {
//     width: '210px',
//     backgroundColor: '#f4f5f7',
//     borderRight: '1px solid #dfe1e6',
//     height: '100vh',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif'
//   };

//   const logoStyle = {
//     width: '180px',
//     height: '40px',
//     marginBottom: '20px'
//   };

//   const titleStyle = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '10px',
//     padding: '8px 10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s'
//   };

//   const menuItemStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     cursor: 'pointer',
//     borderRadius: '4px',
//     marginBottom: '5px',
//     transition: 'background-color 0.2s, transform 0.2s'
//   };

//   const activeMenuItemStyle = {
//     ...menuItemStyle,
//     backgroundColor: '#091e420f'
//   };

//   const iconStyle = {
//     width: '16px',
//     height: '16px',
//     marginRight: '10px'
//   };

//   const userSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '20px',
//     cursor: 'pointer',
//     transition: 'transform 0.2s'
//   };

//   const userLogoStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#172b4d',
//     color: '#ffffff',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     transition: 'box-shadow 0.2s'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     flexDirection: 'column'
//   };

//   const userNameStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d'
//   };

//   const userRoleStyle = {
//     fontSize: '12px',
//     color: '#5e6c84'
//   };

//   return (
//     <div style={sidebarStyle}>
//       <div>
//         <img src={Logo} style={logoStyle} alt="Orbitax System Private Limited" />
//       </div>
//       <div style={userSectionStyle}>
//         <div style={userLogoStyle} className="user-logo">A</div>
//         <div style={userInfoStyle}>
//           <div style={userNameStyle}>Sumit Kumar</div>
//           <div style={userRoleStyle}>Admin</div>
//         </div>
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('projects')}>
//           PROJECTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.projects ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.projects && (
//           <div>
//             <div
//               style={currentPage === 'dashboard' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('dashboard');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'dashboard' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"/>
//               </svg>
//               Status
//             </div>
//             <div
//               style={currentPage === 'myTickets' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('myTickets');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'myTickets' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
//               </svg>
//               My Tickets
//             </div>
//             <div
//               style={currentPage === 'queues' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('queues');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'queues' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20V10M5 15l7-7 7 7M4 20h16"/>
//               </svg>
//               Queues
//             </div>
//             <div
//               style={currentPage === 'incident' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('incident');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'incident' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="12" cy="12" r="10"/>
//                 <path d="M12 6v6h6"/>
//               </svg>
//               Incidents
//             </div>
//             <div
//               style={currentPage === 'problems' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('problems');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'problems' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2v20M2 12h20"/>
//               </svg>
//               Problems
//             </div>
//             <div
//               style={currentPage === 'changes' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('changes');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'changes' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Changes
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('operations')}>
//           OPERATIONS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.operations ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.operations && (
//           <div>
//             <div
//               style={currentPage === 'alerts' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('alerts');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'alerts' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 15a3 3 0 100-6 3 3 0 000 6z"/>
//               </svg>
//               Alerts
//             </div>
//             <div
//               style={currentPage === 'oncall' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('oncall');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'oncall' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 20c0-4 4-7 8-7s8 3 8 7"/>
//               </svg>
//               On-call
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('reports')}>
//           REPORTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.reports ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.reports && (
//           <div>
//             <div
//               style={currentPage === 'reports' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('reports');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'reports' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Reports
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// import React, { useState } from 'react';
// import Logo from './LOGO.png'; // Import the logo image

// const Sidebar = ({ setCurrentPage, currentPage }) => {
//   const [openSections, setOpenSections] = useState({
//     projects: true, // "PROJECTS" open by default
//     operations: true, // "OPERATIONS" open by default
//     knowledgeBase: false,
//     reports: true, // "REPORTS" open by default
//     channelsPeople: false
//   });

//   const toggleSection = (section) => {
//     // When opening a section, close all others
//     setOpenSections((prev) => {
//       const newState = {
//         projects: false,
//         operations: false,
//         knowledgeBase: false,
//         reports: false,
//         channelsPeople: false
//       };
//       newState[section] = !prev[section]; // Toggle the clicked section
//       return newState;
//     });
//   };

//   const sidebarStyle = {
//     width: '210px',
//     backgroundColor: '#f4f5f7',
//     borderRight: '1px solid #dfe1e6',
//     height: '100vh',
//     position: 'fixed',
//     left: 0,
//     top: 0,
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif'
//   };

//   const logoStyle = {
//     width: '180px',
//     height: '40px',
//     marginBottom: '20px'
//   };

//   const titleStyle = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '10px',
//     padding: '8px 10px',
//     backgroundColor: '#f4f5f7',
//     borderRadius: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s'
//   };

//   const menuItemStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     cursor: 'pointer',
//     borderRadius: '4px',
//     marginBottom: '5px',
//     transition: 'background-color 0.2s, transform 0.2s'
//   };

//   const activeMenuItemStyle = {
//     ...menuItemStyle,
//     backgroundColor: '#091e420f'
//   };

//   const iconStyle = {
//     width: '16px',
//     height: '16px',
//     marginRight: '10px'
//   };

//   const userSectionStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '20px',
//     cursor: 'pointer',
//     transition: 'transform 0.2s'
//   };

//   const userLogoStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#172b4d',
//     color: '#ffffff',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     transition: 'box-shadow 0.2s'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     flexDirection: 'column'
//   };

//   const userNameStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d'
//   };

//   const userRoleStyle = {
//     fontSize: '12px',
//     color: '#5e6c84'
//   };

//   return (
//     <div style={sidebarStyle}>
//       <div>
//         <img src={Logo} style={logoStyle} alt="Orbitax System Private Limited" />
//       </div>
//       <div style={userSectionStyle}>
//         <div style={userLogoStyle} className="user-logo">A</div>
//         <div style={userInfoStyle}>
//           <div style={userNameStyle}>Sumit Kumar</div>
//           <div style={userRoleStyle}>Admin</div>
//         </div>
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('projects')}>
//           PROJECTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.projects ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.projects && (
//           <div>
//             <div
//               style={currentPage === 'dashboard' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('dashboard');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'dashboard' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"/>
//               </svg>
//               Status
//             </div>
//             <div
//               style={currentPage === 'myTickets' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('myTickets');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'myTickets' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
//               </svg>
//               My Tickets
//             </div>
//             <div
//               style={currentPage === 'queues' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('queues');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'queues' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20V10M5 15l7-7 7 7M4 20h16"/>
//               </svg>
//               Queues
//             </div>
//             <div
//               style={currentPage === 'incident' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('incident');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'incident' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="12" cy="12" r="10"/>
//                 <path d="M12 6v6h6"/>
//               </svg>
//               Incidents
//             </div>
//             <div
//               style={currentPage === 'problems' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('problems');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'problems' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 2v20M2 12h20"/>
//               </svg>
//               Problems
//             </div>
//             <div
//               style={currentPage === 'changes' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('changes');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'changes' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Changes
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('operations')}>
//           OPERATIONS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.operations ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.operations && (
//           <div>
//             <div
//               style={currentPage === 'alerts' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('alerts');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'alerts' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 15a3 3 0 100-6 3 3 0 000 6z"/>
//               </svg>
//               Alerts
//             </div>
//             <div
//               style={currentPage === 'oncall' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('oncall');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'oncall' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 20c0-4 4-7 8-7s8 3 8 7"/>
//               </svg>
//               On-call
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <div style={titleStyle} onClick={() => toggleSection('reports')}>
//           REPORTS
//           <svg style={{ width: '16px', height: '16px', transform: openSections.reports ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </div>
//         {openSections.reports && (
//           <div>
//             <div
//               style={currentPage === 'reports' ? activeMenuItemStyle : menuItemStyle}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling to parent
//                 setCurrentPage('reports');
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#dfe1e6';
//                 e.currentTarget.style.transform = 'scale(1.02)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.backgroundColor = currentPage === 'reports' ? '#091e420f' : 'transparent';
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
//               </svg>
//               Reports
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import Logo from './LOGO.png'; // Import the logo image

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const [openSections, setOpenSections] = useState({
    projects: true, // "PROJECTS" open by default
    operations: true, // "OPERATIONS" open by default
    knowledgeBase: false,
    reports: true, // "REPORTS" open by default
    channelsPeople: false
  });

  const toggleSection = (section) => {
    // Only toggle the clicked section, do not affect others
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sidebarStyle = {
    width: '210px',
    backgroundColor: '#f4f5f7',
    borderRight: '1px solid #dfe1e6',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxHeight: '100vh', // Ensure sidebar fits within viewport
    overflowY: 'auto' // Allow scrolling if content overflows
  };

  const logoStyle = {
    width: '180px',
    height: '40px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '10px',
    padding: '8px 10px',
    backgroundColor: '#f4f5f7',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    cursor: 'pointer',
    borderRadius: '4px',
    marginBottom: '5px',
    transition: 'background-color 0.2s, transform 0.2s'
  };

  const activeMenuItemStyle = {
    ...menuItemStyle,
    backgroundColor: '#091e420f'
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    marginRight: '10px'
  };

  const userSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  };

  const userLogoStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#172b4d',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'box-shadow 0.2s'
  };

  const userInfoStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const userNameStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d'
  };

  const userRoleStyle = {
    fontSize: '12px',
    color: '#5e6c84'
  };

  return (
    <div style={sidebarStyle}>
      <div>
        <img src={Logo} style={logoStyle} alt="Orbitax System Private Limited" />
      </div>
      <div style={userSectionStyle}>
        <div style={userLogoStyle} className="user-logo">A</div>
        <div style={userInfoStyle}>
          <div style={userNameStyle}>Sumit Kumar</div>
          <div style={userRoleStyle}>Admin</div>
        </div>
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('projects')}>
          PROJECTS
          <svg style={{ width: '16px', height: '16px', transform: openSections.projects ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.projects && (
          <div>
            <div
              style={currentPage === 'dashboard' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('dashboard');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'dashboard' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"/>
              </svg>
              Status
            </div>
            <div
              style={currentPage === 'myTickets' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('myTickets');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'myTickets' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 14l-4-4h8l-4 4z"/>
              </svg>
              My Tickets
            </div>
            <div
              style={currentPage === 'queues' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('queues');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'queues' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20V10M5 15l7-7 7 7M4 20h16"/>
              </svg>
              Queues
            </div>
            <div
              style={currentPage === 'incident' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('incident');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'incident' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6h6"/>
              </svg>
              Incidents
            </div>
            <div
              style={currentPage === 'problems' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('problems');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'problems' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20"/>
              </svg>
              Problems
            </div>
            <div
              style={currentPage === 'changes' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('changes');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'changes' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
              </svg>
              Changes
            </div>
          </div>
        )}
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('operations')}>
          OPERATIONS
          <svg style={{ width: '16px', height: '16px', transform: openSections.operations ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.operations && (
          <div>
            <div
              style={currentPage === 'alerts' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('alerts');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'alerts' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 15a3 3 0 100-6 3 3 0 000 6z"/>
              </svg>
              Alerts
            </div>
            <div
              style={currentPage === 'oncall' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('oncall');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'oncall' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 20c0-4 4-7 8-7s8 3 8 7"/>
              </svg>
              On-call
            </div>
          </div>
        )}
      </div>
      <div>
        <div style={titleStyle} onClick={() => toggleSection('reports')}>
          REPORTS
          <svg style={{ width: '16px', height: '16px', transform: openSections.reports ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {openSections.reports && (
          <div>
            <div
              style={currentPage === 'reports' ? activeMenuItemStyle : menuItemStyle}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling to parent
                setCurrentPage('reports');
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#dfe1e6';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = currentPage === 'reports' ? '#091e420f' : 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>
              </svg>
              Reports
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

