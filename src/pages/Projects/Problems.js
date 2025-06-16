// import React, { useState } from 'react';
// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
// import CreateTicket from '../../components/CreateTicket';

// const Problems = ({ setCurrentPage }) => {
//   const [showTicketForm, setShowTicketForm] = useState(false);

//   const handleCreateTicket = (newTicket) => {
//     // Since this page is for upcoming features, we won't handle ticket creation logic here
//     // But we'll keep the function to maintain consistency with CreateTicket component
//     setShowTicketForm(false);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar setCurrentPage={setCurrentPage} currentPage="problems" />
//       <div style={{ flex: 1 }}>
//         <Header setShowTicketForm={setShowTicketForm} />
//         <div style={{ 
//           padding: '20px', 
//           textAlign: 'center', 
//           color: '#172b4d',
//           marginTop: '60px' // To account for the fixed header
//         }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' , marginLeft:"200px"}}>
//             Problem Management - Upcoming Features
//           </h2>
//           <p style={{ fontSize: '16px', color: '#5e6c84' , marginLeft:"200px"}}>
//             This section is under development. Stay tuned for problem tracking and resolution features!
//           </p>
//         </div>
//         {showTicketForm && (
//           <CreateTicket onClose={() => setShowTicketForm(false)} onCreate={handleCreateTicket} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Problems;

// import React from 'react';

// const IssueModal = ({ onClose }) => {
//   return (
//     <>
//       <div style={styles.overlay}>
//         <div style={styles.modal}>
//           {/* Close Button */}
//           <button style={styles.closeButton} onClick={onClose}>
//             &times;
//           </button>

//           {/* Header */}
//           <div style={{ marginBottom: '1rem' }}>
//             <div style={styles.subHeader}>BTS-2 / BTS-5</div>
//             <h2 style={styles.title}>(Sample) Fix Database Connection Errors</h2>
//           </div>

//           <div style={styles.contentWrapper}>
//             {/* Left Section */}
//             <div style={styles.leftSection}>
//               <div style={{ marginBottom: '1.5rem' }}>
//                 <h3 style={styles.sectionTitle}>Description</h3>
//                 <p style={styles.text}>Users are experiencing database connection errors.</p>
//               </div>

//               <div>
//                 <h3 style={styles.sectionTitle}>Activity</h3>
//                 <div style={styles.tabBar}>
//                   <span style={{ ...styles.tabItem, ...styles.activeTab }}>Comments</span>
//                   <span style={styles.tabItem}>History</span>
//                   <span style={styles.tabItem}>Work log</span>
//                 </div>

//                 {/* Comment Box */}
//                 <div style={styles.commentWrapper}>
//                   <div style={styles.avatar}>AK</div>
//                   <textarea
//                     style={styles.textArea}
//                     rows={4}
//                     placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                   />
//                 </div>
//                 <div style={styles.buttonRow}>
//                   <button style={styles.primaryButton}>Save</button>
//                   <button style={styles.secondaryButton}>Cancel</button>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section */}
//             {/* <div style={styles.rightSection}>
//               <div style={styles.card}>
//                 <h4 style={styles.cardTitle}>Details</h4>
//                 <div style={styles.detailText}><strong>Team:</strong> None</div>
//                 <div style={styles.detailText}><strong>Start date:</strong> None</div>
//                 <div style={styles.detailText}><strong>Development:</strong></div>
//                 <div style={styles.link}>Create branch</div>
//                 <div style={styles.link}>Create commit</div>
//                 <div style={styles.detailText}><strong>Reporter:</strong> AYAZ KHAN</div>
//               </div>

//               <div style={styles.card}>
//                 <h4 style={styles.cardTitle}>Automation</h4>
//                 <p style={styles.detailText}>Rule executions</p>
//               </div>

//               <div style={styles.timestamp}>
//                 Created 2 days ago<br />
//                 Updated 2 days ago
//               </div>
//             </div> */}

//             {/* Right Section */}
// <div style={styles.rightSection}>
//   <div style={styles.card}>
//     <h4 style={styles.cardTitle}>Details</h4>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>👤</span>
//       <span><strong>Assignee:</strong> Unassigned <span style={styles.link}>Assign to me</span></span>
//     </div>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>🏷️</span>
//       <span><strong>Labels:</strong> None</span>
//     </div>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>🧩</span>
//       <span><strong>Parent:</strong> <span style={{ backgroundColor: '#eae6ff', padding: '2px 6px', borderRadius: '4px', color: '#5243aa' }}>BTS-2 (Sample) Backend Bug</span></span>
//     </div>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>📅</span>
//       <span><strong>Due date:</strong> None</span>
//     </div>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>👥</span>
//       <span><strong>Team:</strong> None</span>
//     </div>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>⏳</span>
//       <span><strong>Start date:</strong> None</span>
//     </div>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>🌿</span>
//       <span><strong>Development:</strong></span>
//     </div>
//     <div style={{ marginLeft: '24px', marginTop: '-8px' }}>
//       <div style={styles.link}>🔀 Create branch</div>
//       <div style={styles.link}>✅ Create commit</div>
//     </div>

//     <div style={styles.detailRow}>
//       <span style={styles.icon}>🧑‍💼</span>
//       <span><strong>Reporter:</strong> AYAZ KHAN</span>
//     </div>
//   </div>

//   <div style={styles.card}>
//     <h4 style={styles.cardTitle}>Automation</h4>
//     <p style={styles.detailText}>⚡ Rule executions</p>
//   </div>

//   <div style={styles.timestamp}>
//     Created 2 days ago<br />
//     Updated 2 days ago
//   </div>
// </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // ✅ Inline Styles
// const styles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 9999,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     padding: '40px',
//     overflowY: 'auto',
//   },
//   modal: {
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     width: '90%',
//     maxWidth: '1200px',
//     padding: '24px',
//     position: 'relative',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '12px',
//     right: '16px',
//     background: 'none',
//     border: 'none',
//     fontSize: '24px',
//     cursor: 'pointer',
//   },
//   subHeader: {
//     fontSize: '14px',
//     color: '#888',
//     marginBottom: '4px',
//   },
//   title: {
//     fontSize: '20px',
//     fontWeight: 600,
//     margin: 0,
//   },
//   contentWrapper: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: '32px',
//     flexWrap: 'wrap',
//   },
//   leftSection: {
//     flex: 1,
//     minWidth: '400px',
//   },
//   sectionTitle: {
//     fontSize: '14px',
//     fontWeight: '600',
//     marginBottom: '8px',
//   },
//   text: {
//     fontSize: '14px',
//     color: '#333',
//   },
//   tabBar: {
//     display: 'flex',
//     gap: '16px',
//     borderBottom: '1px solid #ccc',
//     marginBottom: '12px',
//     paddingBottom: '4px',
//   },
//   tabItem: {
//     fontSize: '14px',
//     color: '#555',
//     cursor: 'pointer',
//   },
//   activeTab: {
//     color: '#0b66e4',
//     fontWeight: '600',
//   },
//   commentWrapper: {
//     display: 'flex',
//     gap: '8px',
//   },
//   avatar: {
//     width: '32px',
//     height: '32px',
//     borderRadius: '50%',
//     backgroundColor: '#4caf50',
//     color: '#fff',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontWeight: 'bold',
//     fontSize: '14px',
//   },
//   textArea: {
//     flex: 1,
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     padding: '8px',
//     fontSize: '14px',
//     resize: 'none',
//   },
//   buttonRow: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     gap: '8px',
//     marginTop: '8px',
//   },
//   primaryButton: {
//     backgroundColor: '#0b66e4',
//     color: 'white',
//     border: 'none',
//     padding: '6px 16px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   secondaryButton: {
//     backgroundColor: '#f0f0f0',
//     color: '#000',
//     border: '1px solid #ccc',
//     padding: '6px 16px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   rightSection: {
//     width: '250px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//   },
//   card: {
//     border: '1px solid #ddd',
//     borderRadius: '6px',
//     padding: '12px',
//   },
//   cardTitle: {
//     fontSize: '14px',
//     fontWeight: '600',
//     marginBottom: '8px',
//   },
//   detailText: {
//     fontSize: '13px',
//     color: '#444',
//     marginBottom: '4px',
//   },
//   link: {
//     fontSize: '13px',
//     color: '#0b66e4',
//     textDecoration: 'underline',
//     marginLeft: '12px',
//     cursor: 'pointer',
//     marginBottom: '4px',
//   },
//   timestamp: {
//     fontSize: '12px',
//     color: '#999',
//   },
//   detailRow: {
//   display: 'flex',
//   alignItems: 'flex-start',
//   gap: '8px',
//   marginBottom: '10px',
//   fontSize: '13px',
//   color: '#444',
//   lineHeight: '1.4',
// },

// icon: {
//   width: '20px',
//   textAlign: 'center',
//   fontSize: '16px',
//   color: '#888',
// },

// };

// export default IssueModal;


// import React from 'react';

// const IssueModal = () => {
//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>
//         {/* Left Scrollable Section */}
//         <div style={styles.scrollWrapper}>
//           <div style={styles.leftSection}>
//             <h2 style={styles.title}>(Sample) Fix Database Connection Errors</h2>
//             <p style={styles.description}>Users are experiencing database connection errors.</p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 <button style={styles.tab}>All</button>
//                 <button style={{ ...styles.tab, ...styles.activeTab }}>Comments</button>
//                 <button style={styles.tab}>History</button>
//                 <button style={styles.tab}>Work log</button>
//               </div>
//               <div style={styles.commentBox}>
//                 <div style={styles.userIcon}>AK</div>
//                 <div style={styles.editorArea}>
//                   <div style={styles.toolbar}>
//                     <button style={styles.toolBtn}>Tt ▼</button>
//                     <button style={styles.toolBtn}><b>B</b></button>
//                     <button style={styles.toolBtn}><i>I</i></button>
//                     <button style={styles.toolBtn}>A ▼</button>
//                     <button style={styles.toolBtn}>• List</button>
//                     <button style={styles.toolBtn}>1. List</button>
//                     <button style={styles.toolBtn}>☑</button>
//                     <button style={styles.toolBtn}>🔗</button>
//                     <button style={styles.toolBtn}>🖼️</button>
//                     <button style={styles.toolBtn}>📎</button>
//                     <button style={styles.toolBtn}>😊</button>
//                     <button style={styles.toolBtn}>🧩</button>
//                     <button style={styles.toolBtn}>+ ▼</button>
//                     <button style={styles.toolBtn}>✨</button>
//                   </div>
//                   <textarea
//                     placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                     style={styles.textarea}
//                   />
//                 </div>
//               </div>
//               <div style={styles.buttonRow}>
//                 <button style={styles.saveButton}>Save</button>
//                 <button style={styles.cancelButton}>Cancel</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Scrollable Section */}
//         <div style={styles.scrollWrapper}>
//           <div style={styles.rightSection}>
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle}>Details</h4>
//               <div style={styles.detailRow}><span>👤</span> Unassigned <span style={styles.link}>Assign to me</span></div>
//               <div style={styles.detailRow}><span>🏷️</span> Labels: None</div>
//               <div style={styles.detailRow}><span>🧩</span> Parent: <span style={styles.parentTag}>BTS-2 (Sample) Backend Bug</span></div>
//               <div style={styles.detailRow}><span>📅</span> Due date: None</div>
//               <div style={styles.detailRow}><span>👥</span> Team: None</div>
//               <div style={styles.detailRow}><span>⏳</span> Start date: None</div>
//               <div style={styles.detailRow}><span>🌿</span> Development:</div>
//               <div style={{ marginLeft: 24 }}>
//                 <div style={styles.link}>🔀 Create branch</div>
//                 <div style={styles.link}>✅ Create commit</div>
//               </div>
//               <div style={styles.detailRow}><span>🧑‍💼</span> Reporter: AYAZ KHAN</div>
//             </div>
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle}>Automation</h4>
//               <div style={styles.detailRow}>⚡ Rule executions</div>
//             </div>
//             <div style={styles.timestamp}>Created 2 days ago<br />Updated 2 days ago</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 20,
//     left: '5%',
//     width: '90%',
//     height: '90vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     overflow: 'hidden',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//   },
//   scrollWrapper: {
//     flex: 1,
//     overflowX: 'auto',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   leftSection: { minWidth: '600px' },
//   rightSection: { minWidth: '400px' },
//   title: { marginBottom: 10, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10 },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42' },
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { fontSize: 12, color: '#666' },
// };

// export default IssueModal;


// import React from 'react';

// const IssueModal = () => {
//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>
//         {/* Left Scrollable Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>
//             <h2 style={styles.title}>(Sample) Fix Database Connection Errors</h2>
//             <p style={styles.description}>Users are experiencing database connection errors.</p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 <button style={styles.tab}>All</button>
//                 <button style={{ ...styles.tab, ...styles.activeTab }}>Comments</button>
//                 <button style={styles.tab}>History</button>
//                 <button style={styles.tab}>Work log</button>
//               </div>
//               <div style={styles.commentBox}>
//                 <div style={styles.userIcon}>AK</div>
//                 <div style={styles.editorArea}>
//                   <div style={styles.toolbar}>
//                     <button style={styles.toolBtn}>Tt ▼</button>
//                     <button style={styles.toolBtn}><b>B</b></button>
//                     <button style={styles.toolBtn}><i>I</i></button>
//                     <button style={styles.toolBtn}>A ▼</button>
//                     <button style={styles.toolBtn}>• List</button>
//                     <button style={styles.toolBtn}>1. List</button>
//                     <button style={styles.toolBtn}>☑</button>
//                     <button style={styles.toolBtn}>🔗</button>
//                     <button style={styles.toolBtn}>🖼️</button>
//                     <button style={styles.toolBtn}>📎</button>
//                     <button style={styles.toolBtn}>😊</button>
//                     <button style={styles.toolBtn}>🧩</button>
//                     <button style={styles.toolBtn}>+ ▼</button>
//                     <button style={styles.toolBtn}>✨</button>
//                   </div>
//                   <textarea
//                     placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                     style={styles.textarea}
//                   />
//                 </div>
//               </div>
//               <div style={styles.buttonRow}>
//                 <button style={styles.saveButton}>Save</button>
//                 <button style={styles.cancelButton}>Cancel</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Scrollable Section */}
//         <div style={styles.scrollWrapperRight}>
//           <div style={styles.rightSection}>
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle}>Details</h4>
//               <div style={styles.detailRow}><span>👤</span> Unassigned <span style={styles.link}>Assign to me</span></div>
//               <div style={styles.detailRow}><span>🏷️</span> Labels: None</div>
//               <div style={styles.detailRow}><span>🧩</span> Parent: <span style={styles.parentTag}>BTS-2 (Sample) Backend Bug</span></div>
//               <div style={styles.detailRow}><span>📅</span> Due date: None</div>
//               <div style={styles.detailRow}><span>👥</span> Team: None</div>
//               <div style={styles.detailRow}><span>⏳</span> Start date: None</div>
//               <div style={styles.detailRow}><span>🌿</span> Development:</div>
//               <div style={{ marginLeft: 24 }}>
//                 <div style={styles.link}>🔀 Create branch</div>
//                 <div style={styles.link}>✅ Create commit</div>
//               </div>
//               <div style={styles.detailRow}><span>🧑‍💼</span> Reporter: AYAZ KHAN</div>
//             </div>
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle}>Automation</h4>
//               <div style={styles.detailRow}>⚡ Rule executions</div>
//             </div>
//             <div style={styles.timestamp}>Created 2 days ago<br />Updated 2 days ago</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
//};

// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 20,
//     left: '5%',
//     width: '90%',
//     height: '90vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   scrollWrapperLeft: {
//     flex: 2,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   scrollWrapperRight: {
//     flex: 1,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//   },
//   leftSection: {
//     width: '100%',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   title: { marginBottom: 10, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42' },
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { fontSize: 12, color: '#666' },
// };

// export default IssueModal;


// import React, { useState } from 'react';

// const IssueModal = ({ onClose }) => {
//   const [showDetails, setShowDetails] = useState(true);
//   const [showAutomation, setShowAutomation] = useState(false);
//   const [activeTab, setActiveTab] = useState('Comments');
//   const [showEditor, setShowEditor] = useState(false);

//   const handleCancel = () => {
//     setShowEditor(false);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setShowEditor(true);
//   };

//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>
//         {/* <button style={styles.closeButton} onClick={onClose}>✖</button> */}

//         {/* Left Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>
//             <h2 style={styles.title}>(Sample) Fix Database Connection Errors</h2>
//             <p style={styles.description}>Users are experiencing database connection errors.</p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 {['All', 'Comments', 'History', 'Work log'].map(tab => (
//                   <button
//                     key={tab}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === tab ? styles.activeTab : {})
//                     }}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {showEditor && (
//                 <>
//                   <div style={styles.commentBox}>
//                     <div style={styles.userIcon}>AK</div>
//                     <div style={styles.editorArea}>
//                       <div style={styles.toolbar}>
//                         <button style={styles.toolBtn}>Tt ▼</button>
//                         <button style={styles.toolBtn}><b>B</b></button>
//                         <button style={styles.toolBtn}><i>I</i></button>
//                         <button style={styles.toolBtn}>A ▼</button>
//                         <button style={styles.toolBtn}>•</button>
//                         <button style={styles.toolBtn}>1.</button>
//                         <button style={styles.toolBtn}>☑</button>
//                         <button style={styles.toolBtn}>🔗</button>
//                         <button style={styles.toolBtn}>🖼️</button>
//                         <button style={styles.toolBtn}>📎</button>
//                         <button style={styles.toolBtn}>😊</button>
//                         <button style={styles.toolBtn}>🧩</button>
//                         <button style={styles.toolBtn}>+ ▼</button>
//                         <button style={styles.toolBtn}>✨</button>
//                       </div>
//                       <textarea
//                         placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                         style={styles.textarea}
//                       />
//                     </div>
//                   </div>
//                   <div style={styles.buttonRow}>
//                     <button style={styles.saveButton}>Save</button>
//                     <button style={styles.cancelButton} onClick={handleCancel}>Cancel</button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div style={styles.scrollWrapperRight}>
//           <button style={styles.closeButton} onClick={onClose}>✖</button>
//           <div style={styles.rightSection}>
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowDetails(!showDetails)} 
//               // style={{cursor:'pointer'}}
//                 >Details ▾</h4>
//               {showDetails && (
//                 <>
//                   <div style={styles.detailRow}><span>👤</span> Unassigned <span style={styles.link}>Assign to me</span></div>
//                   <div style={styles.detailRow}><span>🏷️</span> Labels: None</div>
//                   <div style={styles.detailRow}><span>🧩</span> Parent: <span style={styles.parentTag}>BTS-2 (Sample) Backend Bug</span></div>
//                   <div style={styles.detailRow}><span>📅</span> Due date: None</div>
//                   <div style={styles.detailRow}><span>👥</span> Team: None</div>
//                   <div style={styles.detailRow}><span>⏳</span> Start date: None</div>
//                   <div style={styles.detailRow}><span>🌿</span> Development:</div>
//                   <div style={{ marginLeft: 24 }}>
//                     <div style={styles.link}>🔀 Create branch</div>
//                     <div style={styles.link}>✅ Create commit</div>
//                   </div>
//                   <div style={styles.detailRow}><span>🧑‍💼</span> Reporter: AYAZ KHAN</div>
//                 </>
//               )}
//             </div>
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowAutomation(!showAutomation)} 
//               // style={{cursor:'pointer'}}
//                 >Automation ▾</h4>
//               {showAutomation && (
//                 <div style={styles.detailRow}>⚡ Rule executions</div>
//               )}
//             </div>
//             <div style={styles.timestamp}>Created 2 days ago<br />Updated 2 days ago</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 20,
//     left: '5%',
//     width: '90%',
//     height: '90vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '12px',
//     right: '16px',
//     background: 'none',
//     border: 'none',
//     fontSize: '24px',
//     cursor: 'pointer',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   scrollWrapperLeft: {
//     flex: 2,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   scrollWrapperRight: {
//     flex: 1,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//   },
//   leftSection: {
//     width: '100%',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   title: { marginBottom: 10, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42' , cursor:'pointer'},
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { fontSize: 12, color: '#666' },
// };

// export default IssueModal;


// import React, { useState } from 'react';

// const IssueModal = ({ onClose }) => {
//   const [showDetails, setShowDetails] = useState(true);
//   const [showAutomation, setShowAutomation] = useState(false);
//   const [activeTab, setActiveTab] = useState('Comments');
//   const [showEditor, setShowEditor] = useState(false);

//   const handleCancel = () => {
//     setShowEditor(false);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setShowEditor(true);
//   };

//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>

//         {/* Left Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>
//             <h2 style={styles.title}>(Sample) Fix Database Connection Errors</h2>
//             <p style={styles.description}>Users are experiencing database connection errors.</p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 {['All', 'Comments', 'History', 'Work log'].map(tab => (
//                   <button
//                     key={tab}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === tab ? styles.activeTab : {})
//                     }}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {showEditor && (
//                 <>
//                   <div style={styles.commentBox}>
//                     <div style={styles.userIcon}>AK</div>
//                     <div style={styles.editorArea}>
//                       <div style={styles.toolbar}>
//                         <button style={styles.toolBtn}>Tt ▼</button>
//                         <button style={styles.toolBtn}><b>B</b></button>
//                         <button style={styles.toolBtn}><i>I</i></button>
//                         <button style={styles.toolBtn}>A ▼</button>
//                         <button style={styles.toolBtn}>•</button>
//                         <button style={styles.toolBtn}>1.</button>
//                         <button style={styles.toolBtn}>☑</button>
//                         <button style={styles.toolBtn}>🔗</button>
//                         <button style={styles.toolBtn}>🖼️</button>
//                         <button style={styles.toolBtn}>📎</button>
//                         <button style={styles.toolBtn}>😊</button>
//                         <button style={styles.toolBtn}>🧩</button>
//                         <button style={styles.toolBtn}>+ ▼</button>
//                         <button style={styles.toolBtn}>✨</button>
//                       </div>
//                       <textarea
//                         placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                         style={styles.textarea}
//                       />
//                     </div>
//                   </div>
//                   <div style={styles.buttonRow}>
//                     <button style={styles.saveButton}>Save</button>
//                     <button style={styles.cancelButton} onClick={handleCancel}>Cancel</button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div style={styles.scrollWrapperRight}>
//           <div style={styles.rightSection}>
//             <div style={styles.rightTopBar}>
//               <button style={styles.closeButtonRight} onClick={onClose}>✖</button>
//             </div>

//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowDetails(!showDetails)}>
//                 Details ▾
//               </h4>
//               {showDetails && (
//                 <>
//                   <div style={styles.detailRow}><span>👤</span> Unassigned <span style={styles.link}>Assign to me</span></div>
//                   <div style={styles.detailRow}><span>🏷️</span> Labels: None</div>
//                   <div style={styles.detailRow}><span>🧩</span> Parent: <span style={styles.parentTag}>BTS-2 (Sample) Backend Bug</span></div>
//                   <div style={styles.detailRow}><span>📅</span> Due date: None</div>
//                   <div style={styles.detailRow}><span>👥</span> Team: None</div>
//                   <div style={styles.detailRow}><span>⏳</span> Start date: None</div>
//                   <div style={styles.detailRow}><span>🌿</span> Development:</div>
//                   <div style={{ marginLeft: 24 }}>
//                     <div style={styles.link}>🔀 Create branch</div>
//                     <div style={styles.link}>✅ Create commit</div>
//                   </div>
//                   <div style={styles.detailRow}><span>🧑‍💼</span> Reporter: AYAZ KHAN</div>
//                 </>
//               )}
//             </div>

//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowAutomation(!showAutomation)}>
//                 Automation ▾
//               </h4>
//               {showAutomation && (
//                 <div style={styles.detailRow}>⚡ Rule executions</div>
//               )}
//             </div>

//             <div style={styles.timestamp}>Created 2 days ago<br></br>Updated 2 days ago</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 60,
//     left: '10%',
//     width: '80%',
//     height: '80vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   scrollWrapperLeft: {
//     flex: 2,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   scrollWrapperRight: {
//     flex: 1,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//   },
//   leftSection: {
//     width: '90%',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   title: { marginBottom: 10, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42', cursor: 'pointer' },
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { marginLeft:'110px',fontSize: 12, color: '#666' },
//   rightTopBar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: 10,
//   },
//   closeButtonRight: {
//     background: 'none',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//     color: '#333',
//   },
// };

// export default IssueModal;


// import React, { useState } from 'react';

// const IssueModal = ({ onClose }) => {
//   const [showDetails, setShowDetails] = useState(true);
//   const [showAutomation, setShowAutomation] = useState(false);
//   const [activeTab, setActiveTab] = useState('Comments');
//   const [showEditor, setShowEditor] = useState(false);
//   const [showAddMenu, setShowAddMenu] = useState(false);

//   const handleCancel = () => {
//     setShowEditor(false);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setShowEditor(true);
//   };

//   const toggleAddMenu = () => {
//     setShowAddMenu((prev) => !prev);
//   };

//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>

//         {/* Left Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>

//             {/* Header with Title and Add */}
//             <div style={styles.headerRow}>
//               <div>
//                 <h2 style={styles.title}>(Sample) Fix Database Connection Errors</h2>
//               </div>
//               {/* <div style={styles.addContainer}>
//                 <button style={styles.addButton} onClick={toggleAddMenu}>+ Add</button>
//                 {showAddMenu && (
//                   <div style={styles.dropdown}>
//                     <div style={styles.dropdownItem}>📎 Attachment</div>
//                     <div style={styles.dropdownItem}>🧷 Child work item</div>
//                     <div style={styles.dropdownItem}>🔗 Linked work item</div>
//                     <div style={styles.dropdownItem}>🌐 Web link</div>
//                     <div style={styles.dropdownItem}>
//                       🎥 Loom video <span style={styles.addTag}>ADD</span>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <button style={styles.appsButton}>⚙ Apps</button> */}
//             </div>

//             <p style={styles.description}>Users are experiencing database connection errors.</p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 {['All', 'Comments', 'History', 'Work log'].map(tab => (
//                   <button
//                     key={tab}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === tab ? styles.activeTab : {})
//                     }}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {showEditor && (
//                 <>
//                   <div style={styles.commentBox}>
//                     <div style={styles.userIcon}>AK</div>
//                     <div style={styles.editorArea}>
//                       <div style={styles.toolbar}>
//                         <button style={styles.toolBtn}>Tt ▼</button>
//                         <button style={styles.toolBtn}><b>B</b></button>
//                         <button style={styles.toolBtn}><i>I</i></button>
//                         <button style={styles.toolBtn}>A ▼</button>
//                         <button style={styles.toolBtn}>•</button>
//                         <button style={styles.toolBtn}>1.</button>
//                         <button style={styles.toolBtn}>☑</button>
//                         <button style={styles.toolBtn}>🔗</button>
//                         <button style={styles.toolBtn}>🖼️</button>
//                         <button style={styles.toolBtn}>📎</button>
//                         <button style={styles.toolBtn}>😊</button>
//                         <button style={styles.toolBtn}>🧩</button>
//                         <button style={styles.toolBtn}>+ ▼</button>
//                         <button style={styles.toolBtn}>✨</button>
//                       </div>
//                       <textarea
//                         placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                         style={styles.textarea}
//                       />
//                     </div>
//                   </div>
//                   <div style={styles.buttonRow}>
//                     <button style={styles.saveButton}>Save</button>
//                     <button style={styles.cancelButton} onClick={handleCancel}>Cancel</button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div style={styles.scrollWrapperRight}>
//           <div style={styles.rightSection}>
//             <div style={styles.rightTopBar}>
//               <button style={styles.closeButtonRight} onClick={onClose}>✖</button>
//             </div>

//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowDetails(!showDetails)}>
//                 Details ▾
//               </h4>
//               {showDetails && (
//                 <>
//                   <div style={styles.detailRow}><span>👤</span> Unassigned <span style={styles.link}>Assign to me</span></div>
//                   <div style={styles.detailRow}><span>🏷️</span> Labels: None</div>
//                   <div style={styles.detailRow}><span>🧩</span> Parent: <span style={styles.parentTag}>BTS-2 (Sample) Backend Bug</span></div>
//                   <div style={styles.detailRow}><span>📅</span> Due date: None</div>
//                   <div style={styles.detailRow}><span>👥</span> Team: None</div>
//                   <div style={styles.detailRow}><span>⏳</span> Start date: None</div>
//                   <div style={styles.detailRow}><span>🌿</span> Development:</div>
//                   <div style={{ marginLeft: 24 }}>
//                     <div style={styles.link}>🔀 Create branch</div>
//                     <div style={styles.link}>✅ Create commit</div>
//                   </div>
//                   <div style={styles.detailRow}><span>🧑‍💼</span> Reporter: AYAZ KHAN</div>
//                 </>
//               )}
//             </div>

//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowAutomation(!showAutomation)}>
//                 Automation ▾
//               </h4>
//               {showAutomation && (
//                 <div style={styles.detailRow}>⚡ Rule executions</div>
//               )}
//             </div>

//             <div style={styles.timestamp}>Created 2 days ago<br />Updated 2 days ago</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 60,
//     left: '10%',
//     width: '80%',
//     height: '80vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   scrollWrapperLeft: {
//     flex: 2,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   scrollWrapperRight: {
//     flex: 1,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//   },
//   leftSection: {
//     width: '95%',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   title: { marginBottom: 4, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42', cursor: 'pointer' },
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { fontSize: 12, color: '#666' },
//   rightTopBar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: 10,
//   },
//   closeButtonRight: {
//     background: 'none',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//     color: '#333',
//   },
//   headerRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 10
//   },
//   addContainer: {
//     position: 'relative'
//   },
//   addButton: {
//     padding: '4px 10px',
//     backgroundColor: '#e9f2ff',
//     border: '1px solid #4c9aff',
//     borderRadius: 4,
//     cursor: 'pointer',
//     color: '#0747a6'
//   },
//   dropdown: {
//     position: 'absolute',
//     top: '120%',
//     left: 0,
//     background: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: 6,
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     zIndex: 10,
//     minWidth: 180,
//     padding: '6px 0'
//   },
//   dropdownItem: {
//     padding: '8px 12px',
//     cursor: 'pointer',
//     fontSize: 14,
//     color: '#172b4d',
//     whiteSpace: 'nowrap'
//   },
//   addTag: {
//     backgroundColor: '#e6fcff',
//     color: '#00b8d9',
//     padding: '2px 4px',
//     fontSize: 10,
//     borderRadius: 3,
//     marginLeft: 6
//   },
//   appsButton: {
//     padding: '4px 10px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f4f5f7',
//     cursor: 'pointer'
//   }
// };

// export default IssueModal;






// import React, { useState } from 'react';

// const IssueModal = ({ onClose }) => {
//   const [showDetails, setShowDetails] = useState(true);
//   const [showAutomation, setShowAutomation] = useState(false);
//   const [activeTab, setActiveTab] = useState('Comments');
//   const [showEditor, setShowEditor] = useState(false);
//   const [showAddMenu, setShowAddMenu] = useState(false);

//   const handleCancel = () => {
//     setShowEditor(false);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setShowEditor(true);
//   };

//   const toggleAddMenu = () => {
//     setShowAddMenu((prev) => !prev);
//   };

//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>

//         {/* Left Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>

//             {/* Header with Title and Add */}
//             <div style={styles.headerRow}>
//               <div>
//                 <h2 style={styles.title}>(Sample) Fix Database Connection Errors</h2>
//               </div>
//             </div>

//             <p style={styles.description}>Users are experiencing database connection errors.</p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 {['All', 'Comments', 'History', 'Work log'].map(tab => (
//                   <button
//                     key={tab}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === tab ? styles.activeTab : {})
//                     }}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {showEditor && (
//                 <>
//                   <div style={styles.commentBox}>
//                     <div style={styles.userIcon}>AK</div>
//                     <div style={styles.editorArea}>
//                       <div style={styles.toolbar}>
//                         <button style={styles.toolBtn}>Tt ▼</button>
//                         <button style={styles.toolBtn}><b>B</b></button>
//                         <button style={styles.toolBtn}><i>I</i></button>
//                         <button style={styles.toolBtn}>A ▼</button>
//                         <button style={styles.toolBtn}>•</button>
//                         <button style={styles.toolBtn}>1.</button>
//                         <button style={styles.toolBtn}>☑</button>
//                         <button style={styles.toolBtn}>🔗</button>
//                         <button style={styles.toolBtn}>🖼️</button>
//                         <button style={styles.toolBtn}>📎</button>
//                         <button style={styles.toolBtn}>😊</button>
//                         <button style={styles.toolBtn}>🧩</button>
//                         <button style={styles.toolBtn}>+ ▼</button>
//                         <button style={styles.toolBtn}>✨</button>
//                       </div>
//                       <textarea
//                         placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                         style={styles.textarea}
//                       />
//                     </div>
//                   </div>
//                   <div style={styles.buttonRow}>
//                     <button style={styles.saveButton}>Save</button>
//                     <button style={styles.cancelButton} onClick={handleCancel}>Cancel</button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div style={styles.scrollWrapperRight}>
//           <div style={styles.rightSection}>
//             <div style={styles.rightTopBar}>
//               <button style={styles.closeButtonRight} onClick={onClose}>✖</button>
//             </div>

//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowDetails(!showDetails)}>
//                 Details ▾
//               </h4>
//               {showDetails && (
//                 <>
//                   <div style={styles.detailRow}><span>👤</span> Unassigned <span style={styles.link}>Assign to me</span></div>
//                   <div style={styles.detailRow}><span>🏷️</span> Labels: None</div>
//                   <div style={styles.detailRow}><span>🧩</span> Parent: <span style={styles.parentTag}>BTS-2 (Sample) Backend Bug</span></div>
//                   <div style={styles.detailRow}><span>📅</span> Due date: None</div>
//                   <div style={styles.detailRow}><span>👥</span> Team: None</div>
//                   <div style={styles.detailRow}><span>⏳</span> Start date: None</div>
//                   <div style={styles.detailRow}><span>🌿</span> Development:</div>
//                   <div style={{ marginLeft: 24 }}>
//                     <div style={styles.link}>🔀 Create branch</div>
//                     <div style={styles.link}>✅ Create commit</div>
//                   </div>
//                   <div style={styles.detailRow}><span>🧑‍💼</span> Reporter: AYAZ KHAN</div>
//                 </>
//               )}
//             </div>

//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowAutomation(!showAutomation)}>
//                 Automation ▾
//               </h4>
//               {showAutomation && (
//                 <div style={styles.detailRow}>⚡ Rule executions</div>
//               )}
//             </div>

//             <div style={styles.timestamp}>Created 2 days ago<br />Updated 2 days ago</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 60,
//     left: '10%',
//     width: '80%',
//     height: '80vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   scrollWrapperLeft: {
//     flex: 2,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   scrollWrapperRight: {
//     flex: 1,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//   },
//   leftSection: {
//     width: '95%',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   title: { marginBottom: 4, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42', cursor: 'pointer' },
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { fontSize: 12, color: '#666' },
//   rightTopBar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: 10,
//   },
//   closeButtonRight: {
//     background: 'none',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//     color: '#333',
//   },
//   headerRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 10
//   },
//   addContainer: {
//     position: 'relative'
//   },
//   addButton: {
//     padding: '4px 10px',
//     backgroundColor: '#e9f2ff',
//     border: '1px solid #4c9aff',
//     borderRadius: 4,
//     cursor: 'pointer',
//     color: '#0747a6'
//   },
//   dropdown: {
//     position: 'absolute',
//     top: '120%',
//     left: 0,
//     background: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: 6,
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     zIndex: 10,
//     minWidth: 180,
//     padding: '6px 0'
//   },
//   dropdownItem: {
//     padding: '8px 12px',
//     cursor: 'pointer',
//     fontSize: 14,
//     color: '#172b4d',
//     whiteSpace: 'nowrap'
//   },
//   addTag: {
//     backgroundColor: '#e6fcff',
//     color: '#00b8d9',
//     padding: '2px 4px',
//     fontSize: 10,
//     borderRadius: 3,
//     marginLeft: 6
//   },
//   appsButton: {
//     padding: '4px 10px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f4f5f7',
//     cursor: 'pointer'
//   }
// };

// export default IssueModal;


// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../api/axiosInstance';

// const IssueModal = ({ onClose }) => {
//   const [showDetails, setShowDetails] = useState(true);
//   const [showAutomation, setShowAutomation] = useState(false);
//   const [activeTab, setActiveTab] = useState('Comments');
//   const [showEditor, setShowEditor] = useState(false);
//   const [ticketData, setTicketData] = useState(null); // ← Store ticket details

//   useEffect(() => {
//     const fetchTicketData = async () => {
//       try {
//         const userName = localStorage.getItem('username'); // get username from localStorage
//         if (!userName) return;

//         const response = await axiosInstance.get(`/tickets/assignee/username/${userName}`);
//         setTicketData(response.data[0]); // assume API returns an array; adjust if needed
//       } catch (error) {
//         console.error('Failed to fetch ticket data:', error);
//       }
//     };

//     fetchTicketData();
//   }, []);

//   const handleCancel = () => setShowEditor(false);
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setShowEditor(true);
//   };

//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>
//         {/* Left Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>
//             <div style={styles.headerRow}>
//               <div>
//                 <h2 style={styles.title}>
//                   {(ticketData?.summary || '(Sample) Fix Database Connection Errors')}
//                 </h2>
//               </div>
//             </div>

//             <p style={styles.description}>
//               {ticketData?.description || 'Users are experiencing database connection errors.'}
//             </p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 {['All', 'Comments', 'History', 'Work log'].map(tab => (
//                   <button
//                     key={tab}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === tab ? styles.activeTab : {})
//                     }}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {showEditor && (
//                 <>
//                   <div style={styles.commentBox}>
//                     <div style={styles.userIcon}>AK</div>
//                     <div style={styles.editorArea}>
//                       <div style={styles.toolbar}>
//                         {['Tt ▼', <b>B</b>, <i>I</i>, 'A ▼', '•', '1.', '☑', '🔗', '🖼️', '📎', '😊', '🧩', '+ ▼', '✨'].map((btn, i) => (
//                           <button key={i} style={styles.toolBtn}>{btn}</button>
//                         ))}
//                       </div>
//                       <textarea
//                         placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                         style={styles.textarea}
//                       />
//                     </div>
//                   </div>
//                   <div style={styles.buttonRow}>
//                     <button style={styles.saveButton}>Save</button>
//                     <button style={styles.cancelButton} onClick={handleCancel}>Cancel</button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div style={styles.scrollWrapperRight}>
//           <div style={styles.rightSection}>
//             <div style={styles.rightTopBar}>
//               <button style={styles.closeButtonRight} onClick={onClose}>✖</button>
//             </div>

//             {/* DETAILS CARD */}
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowDetails(!showDetails)}>
//                 Details ▾
//               </h4>
//               {showDetails && (
//                 <>
//                   <div style={styles.detailRow}>
//                     <span>👤</span> {ticketData?.assignee || 'Unassigned'}
//                     {ticketData?.assignee === null && (
//                       <span style={styles.link}>Assign to me</span>
//                     )}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>🏷️</span> Labels: {ticketData?.labels?.join(', ') || 'None'}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>🧩</span> Parent: {' '}
//                     <span style={styles.parentTag}>
//                       {ticketData?.parentKey ? `${ticketData.parentKey} (${ticketData.parentSummary})` : 'None'}
//                     </span>
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>📅</span> Due date: {ticketData?.dueDate || 'None'}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>👥</span> Team: {ticketData?.team || 'None'}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>⏳</span> Start date: {ticketData?.startDate || 'None'}
//                   </div>
//                   <div style={styles.detailRow}><span>🌿</span> Development:</div>
//                   <div style={{ marginLeft: 24 }}>
//                     <div style={styles.link}>🔀 Create branch</div>
//                     <div style={styles.link}>✅ Create commit</div>
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>🧑‍💼</span> Reporter: {ticketData?.reporter || 'AYAZ KHAN'}
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* AUTOMATION CARD */}
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowAutomation(!showAutomation)}>
//                 Automation ▾
//               </h4>
//               {showAutomation && (
//                 <div style={styles.detailRow}>⚡ Rule executions</div>
//               )}
//             </div>

//             <div style={styles.timestamp}>
//               Created {ticketData?.createdAt || '2 days ago'}<br />
//               Updated {ticketData?.updatedAt || '2 days ago'}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 60,
//     left: '10%',
//     width: '80%',
//     height: '80vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   scrollWrapperLeft: {
//     flex: 2,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   scrollWrapperRight: {
//     flex: 1,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//   },
//   leftSection: {
//     width: '95%',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   title: { marginBottom: 4, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42', cursor: 'pointer' },
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { fontSize: 12, color: '#666' },
//   rightTopBar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: 10,
//   },
//   closeButtonRight: {
//     background: 'none',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//     color: '#333',
//   },
//   headerRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 10
//   },
//   addContainer: {
//     position: 'relative'
//   },
//   addButton: {
//     padding: '4px 10px',
//     backgroundColor: '#e9f2ff',
//     border: '1px solid #4c9aff',
//     borderRadius: 4,
//     cursor: 'pointer',
//     color: '#0747a6'
//   },
//   dropdown: {
//     position: 'absolute',
//     top: '120%',
//     left: 0,
//     background: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: 6,
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     zIndex: 10,
//     minWidth: 180,
//     padding: '6px 0'
//   },
//   dropdownItem: {
//     padding: '8px 12px',
//     cursor: 'pointer',
//     fontSize: 14,
//     color: '#172b4d',
//     whiteSpace: 'nowrap'
//   },
//   addTag: {
//     backgroundColor: '#e6fcff',
//     color: '#00b8d9',
//     padding: '2px 4px',
//     fontSize: 10,
//     borderRadius: 3,
//     marginLeft: 6
//   },
//   appsButton: {
//     padding: '4px 10px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f4f5f7',
//     cursor: 'pointer'
//   }
// };

// export default IssueModal;



// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../api/axiosInstance';

// const IssueModal = ({ onClose, visible }) => {
//   const [showDetails, setShowDetails] = useState(true);
//   const [showAutomation, setShowAutomation] = useState(false);
//   const [activeTab, setActiveTab] = useState('Comments');
//   const [showEditor, setShowEditor] = useState(false);
//   const [ticketData, setTicketData] = useState(null);

//   useEffect(() => {
//     const fetchTicketData = async () => {
//       try {
//         const userName = localStorage.getItem('userName');
//         if (!userName) return;

//         const response = await axiosInstance.get(`/tickets/assignee/username/${userName}`);
//         setTicketData(response.data[0]);
//       } catch (error) {
//         console.error('Failed to fetch ticket data:', error);
//       }
//     };

//     if (visible) {
//       fetchTicketData();
//     }
//   }, [visible]);

//   const handleCancel = () => setShowEditor(false);
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setShowEditor(true);
//   };

//   if (!visible) return null; // Don't render if not visible

//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>
//         {/* Left Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>
//             <div style={styles.headerRow}>
//               <div>
//                 <h2 style={styles.title}>
//                   {(ticketData?.summary || '(Sample) Fix Database Connection Errors')}
//                 </h2>
//               </div>
//             </div>

//             <p style={styles.description}>
//               {ticketData?.description || 'Users are experiencing database connection errors.'}
//             </p>

//             <div style={styles.section}>
//               <h3 style={styles.subTitle}>Activity</h3>
//               <div style={styles.tabBar}>
//                 {['All', 'Comments', 'History', 'Work log'].map(tab => (
//                   <button
//                     key={tab}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === tab ? styles.activeTab : {})
//                     }}
//                     onClick={() => handleTabClick(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               {showEditor && (
//                 <>
//                   <div style={styles.commentBox}>
//                     <div style={styles.userIcon}>AK</div>
//                     <div style={styles.editorArea}>
//                       <div style={styles.toolbar}>
//                         {['Tt ▼', <b>B</b>, <i>I</i>, 'A ▼', '•', '1.', '☑', '🔗', '🖼️', '📎', '😊', '🧩', '+ ▼', '✨'].map((btn, i) => (
//                           <button key={i} style={styles.toolBtn}>{btn}</button>
//                         ))}
//                       </div>
//                       <textarea
//                         placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                         style={styles.textarea}
//                       />
//                     </div>
//                   </div>
//                   <div style={styles.buttonRow}>
//                     <button style={styles.saveButton}>Save</button>
//                     <button style={styles.cancelButton} onClick={handleCancel}>Cancel</button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div style={styles.scrollWrapperRight}>
//           <div style={styles.rightSection}>
//             <div style={styles.rightTopBar}>
//               <button style={styles.closeButtonRight} onClick={onClose}>✖</button>
//             </div>

//             {/* DETAILS CARD */}
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowDetails(!showDetails)}>
//                 Details ▾
//               </h4>
//               {showDetails && (
//                 <>
//                   <div style={styles.detailRow}>
//                     <span>👤</span> {ticketData?.assignee || 'Unassigned'}
//                     {ticketData?.assignee === null && (
//                       <span style={styles.link}>Assign to me</span>
//                     )}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>🏷️</span> Labels: {ticketData?.labels?.join(', ') || 'None'}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>🧩</span> Parent: {' '}
//                     <span style={styles.parentTag}>
//                       {ticketData?.parentKey ? `${ticketData.parentKey} (${ticketData.parentSummary})` : 'None'}
//                     </span>
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>📅</span> Due date: {ticketData?.dueDate || 'None'}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>👥</span> Team: {ticketData?.team || 'None'}
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>⏳</span> Start date: {ticketData?.startDate || 'None'}
//                   </div>
//                   <div style={styles.detailRow}><span>🌿</span> Development:</div>
//                   <div style={{ marginLeft: 24 }}>
//                     <div style={styles.link}>🔀 Create branch</div>
//                     <div style={styles.link}>✅ Create commit</div>
//                   </div>
//                   <div style={styles.detailRow}>
//                     <span>🧑‍💼</span> Reporter: {ticketData?.reporter || 'AYAZ KHAN'}
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* AUTOMATION CARD */}
//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowAutomation(!showAutomation)}>
//                 Automation ▾
//               </h4>
//               {showAutomation && (
//                 <div style={styles.detailRow}>⚡ Rule executions</div>
//               )}
//             </div>

//             <div style={styles.timestamp}>
//               Created {ticketData?.createdAt || '2 days ago'}<br />
//               Updated {ticketData?.updatedAt || '2 days ago'}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Rest of the modal UI remains the same */}
//       {/* ... */}
//     </div>
//   );
// };

// // Keep your styles as-is
// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 60,
//     left: '10%',
//     width: '80%',
//     height: '80vh',
//     backgroundColor: '#fff',
//     boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   scrollWrapperLeft: {
//     flex: 2,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//     borderRight: '1px solid #eee',
//   },
//   scrollWrapperRight: {
//     flex: 1,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     padding: '20px',
//   },
//   leftSection: {
//     width: '95%',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   title: { marginBottom: 4, fontSize: 20 },
//   description: { marginBottom: 20, color: '#333' },
//   section: { marginBottom: 20 },
//   subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
//   tabBar: { display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap' },
//   tab: {
//     padding: '6px 12px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f9f9f9',
//     cursor: 'pointer'
//   },
//   activeTab: {
//     background: '#e6f0ff',
//     borderColor: '#4c9aff'
//   },
//   commentBox: {
//     display: 'flex',
//     gap: 10,
//     alignItems: 'flex-start'
//   },
//   userIcon: {
//     background: '#0052CC',
//     color: '#fff',
//     borderRadius: '50%',
//     width: 32,
//     height: 32,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   editorArea: { flex: 1 },
//   toolbar: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: 6,
//     marginBottom: 6
//   },
//   toolBtn: {
//     padding: '4px 6px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#fff',
//     cursor: 'pointer',
//     fontSize: 12
//   },
//   textarea: {
//     width: '100%',
//     height: 100,
//     padding: 10,
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     resize: 'none'
//   },
//   buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
//   saveButton: {
//     backgroundColor: '#0052CC',
//     color: '#fff',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   cancelButton: {
//     backgroundColor: '#f4f5f7',
//     color: '#172B4D',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer'
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: 6,
//     padding: 16,
//     marginBottom: 16,
//     background: '#fefefe'
//   },
//   cardTitle: { fontSize: 15, marginBottom: 12, color: '#091e42', cursor: 'pointer' },
//   detailRow: { fontSize: 13, marginBottom: 10 },
//   link: { color: '#0052CC', cursor: 'pointer', marginLeft: 6 },
//   parentTag: {
//     backgroundColor: '#eae6ff',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     color: '#5243aa'
//   },
//   timestamp: { fontSize: 12, color: '#666' },
//   rightTopBar: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: 10,
//   },
//   closeButtonRight: {
//     background: 'none',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//     color: '#333',
//   },
//   headerRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 10
//   },
//   addContainer: {
//     position: 'relative'
//   },
//   addButton: {
//     padding: '4px 10px',
//     backgroundColor: '#e9f2ff',
//     border: '1px solid #4c9aff',
//     borderRadius: 4,
//     cursor: 'pointer',
//     color: '#0747a6'
//   },
//   dropdown: {
//     position: 'absolute',
//     top: '120%',
//     left: 0,
//     background: '#fff',
//     border: '1px solid #ccc',
//     borderRadius: 6,
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     zIndex: 10,
//     minWidth: 180,
//     padding: '6px 0'
//   },
//   dropdownItem: {
//     padding: '8px 12px',
//     cursor: 'pointer',
//     fontSize: 14,
//     color: '#172b4d',
//     whiteSpace: 'nowrap'
//   },
//   addTag: {
//     backgroundColor: '#e6fcff',
//     color: '#00b8d9',
//     padding: '2px 4px',
//     fontSize: 10,
//     borderRadius: 3,
//     marginLeft: 6
//   },
//   appsButton: {
//     padding: '4px 10px',
//     border: '1px solid #ccc',
//     borderRadius: 4,
//     background: '#f4f5f7',
//     cursor: 'pointer'
//   }
// };
// export default IssueModal;
