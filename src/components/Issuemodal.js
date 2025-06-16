// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../api/axiosInstance'; // Ensure path is inside src/
  
// const IssueModal = ({ onClose, ticketId }) => {
//   const [showDetails, setShowDetails] = useState(true);
//   const [showAutomation, setShowAutomation] = useState(false);
//   const [activeTab, setActiveTab] = useState('Comments');
//   const [showEditor, setShowEditor] = useState(false);
//   const [ticketData, setTicketData] = useState(null);
//   const [commentText, setCommentText] = useState('');

//   useEffect(() => {
//     const fetchTicket = async () => {
//       try {
//         const response = await axiosInstance.get(`/tickets/${ticketId}`);
//         setTicketData(response.data);
//       } catch (err) {
//         console.error('Error fetching ticket:', err);
//       }
//     };

//     if (ticketId) fetchTicket();
//   }, [ticketId]);

//   const handleCancel = () => {
//     setShowEditor(false);
//     setCommentText('');
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setShowEditor(true);
//   };

//   const handleSave = async () => {
//     try {
//       await axiosInstance.post(`/tickets/${ticketId}/replies?content=${encodeURIComponent(commentText)}`);
//       alert('Reply saved successfully');
//       setCommentText('');
//       setShowEditor(false);
//     } catch (err) {
//       console.error('Error saving reply:', err);
//       alert('Failed to save reply');
//     }
//   };

//   return (
//     <div style={styles.modal}>
//       <div style={styles.modalContent}>
//         {/* Left Section */}
//         <div style={styles.scrollWrapperLeft}>
//           <div style={styles.leftSection}>
//             <div style={styles.headerRow}>
//               <h2 style={styles.title}>
//                 {ticketData?.summary || 'Fix Database Connection Errors'}
//               </h2>
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
//                         value={commentText}
//                         onChange={(e) => setCommentText(e.target.value)}
//                         placeholder="Type /ai for Atlassian Intelligence or @ to mention and notify someone."
//                         style={styles.textarea}
//                       />
//                     </div>
//                   </div>
//                   <div style={styles.buttonRow}>
//                     <button style={styles.saveButton} onClick={handleSave}>Save</button>
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
//               <h4 style={styles.cardTitle} onClick={() => setShowDetails(!showDetails)}>Details ▾</h4>
//               {showDetails && (
//                 <>
//                   <div style={styles.detailRow}><span>👤</span> {ticketData?.assignee || 'Unassigned'}</div>
//                   <div style={styles.detailRow}><span>🏷️</span> Labels: {ticketData?.labels?.join(', ') || 'None'}</div>
//                   <div style={styles.detailRow}><span>🧩</span> Parent: <span style={styles.parentTag}>{ticketData?.parentKey || 'None'}</span></div>
//                   <div style={styles.detailRow}><span>📅</span> Due date: {ticketData?.dueDate || 'None'}</div>
//                   <div style={styles.detailRow}><span>👥</span> Team: {ticketData?.team || 'None'}</div>
//                   <div style={styles.detailRow}><span>⏳</span> Start date: {ticketData?.startDate || 'None'}</div>
//                   <div style={styles.detailRow}><span>🧑‍💼</span> Reporter: {ticketData?.reporter || 'AYAZ KHAN'}</div>
//                 </>
//               )}
//             </div>

//             <div style={styles.card}>
//               <h4 style={styles.cardTitle} onClick={() => setShowAutomation(!showAutomation)}>Automation ▾</h4>
//               {showAutomation && <div style={styles.detailRow}>⚡ Rule executions</div>}
//             </div>

//             <div style={styles.timestamp}>
//               Created {ticketData?.createdAt || 'N/A'}<br />
//               Updated {ticketData?.updatedAt || 'N/A'}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // 🔁 Keep your styles object from before here, unchanged
// // (To save space, I'm not pasting it again since you already have it in full)
// const styles = {
//   modal: {
//     position: 'fixed',
//     top: 50,
//     left: '5%',
//     width: '90%',
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


import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const IssueModal = ({ onClose, ticketId }) => {
  const [ticketData, setTicketData] = useState(null);
  const [activeTab, setActiveTab] = useState('Comments');
  const [showEditor, setShowEditor] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const userName = localStorage.getItem('username') || '';
        const initials = userName.substring(0, 2).toUpperCase();
        setUserInitials(initials);
        const response = await axiosInstance.get(`/tickets/${ticketId}`);
        setTicketData(response.data.data);
      } catch (error) {
        console.error('Failed to fetch ticket data:', error);
      }
    };
    if (ticketId) fetchTicketData();
  }, [ticketId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowEditor(tab === 'Comments');
  };

  const handleSave = async () => {
    try {
      if (!commentText.trim()) return;
      await axiosInstance.post(`/tickets/${ticketId}/replies?content=${encodeURIComponent(commentText)}`);
      setCommentText('');
      setShowEditor(false);
      const response = await axiosInstance.get(`/tickets/${ticketId}`);
      setTicketData(response.data.data);
    } catch (error) {
      console.error('Failed to post reply:', error);
    }
  };

  const renderReplies = () => {
    return (
      <div>
        {ticketData?.replies?.map(reply => (
          <div key={reply.id} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10, borderRadius: 6 }}>
            <div><b>Reply ID:</b> {reply.id}</div>
            <div><b>Content:</b> {reply.content}</div>
            <div><b>Timestamp:</b> {new Date(reply.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        {/* Left Section */}
        <div style={styles.scrollWrapperLeft}>
          <div style={styles.leftSection}>
            <div style={styles.headerRow}>
              <h2 style={styles.title}>{ticketData?.title || 'Loading title...'}</h2>
            </div>
            <p style={styles.description}>{ticketData?.description || 'Loading description...'}</p>

            <div style={styles.section}>
              <h3 style={styles.subTitle}>Activity</h3>
              <div style={styles.tabBar}>
                {['Comments', 'History'].map(tab => (
                  <button
                    key={tab}
                    style={{ ...styles.tab, ...(activeTab === tab ? styles.activeTab : {}) }}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'Comments' && showEditor && (
                <>
                  <div style={styles.commentBox}>
                    <div style={styles.userIcon}>{userInitials}</div>
                    <div style={styles.editorArea}>
                      <div style={styles.toolbar}>
                        {['Tt ▼', <b>B</b>, <i>I</i>, 'A ▼', '•', '1.', '☑', '🔗', '🖼️', '📎', '😊', '🧩', '+ ▼', '✨'].map((btn, i) => (
                          <button key={i} style={styles.toolBtn}>{btn}</button>
                        ))}
                      </div>
                      <textarea
                        placeholder="Type your comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        style={styles.textarea}
                      />
                    </div>
                  </div>
                  <div style={styles.buttonRow}>
                    <button style={styles.saveButton} onClick={handleSave}>Post</button>
                    <button style={styles.cancelButton} onClick={() => setShowEditor(false)}>Cancel</button>
                  </div>
                </>
              )}

              {activeTab === 'History' && renderReplies()}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.scrollWrapperRight}>
          <div style={styles.rightSection}>
            <div style={styles.rightTopBar}>
              <button style={styles.closeButtonRight} onClick={onClose}>✖</button>
            </div>

            <div style={styles.card}>
              <h4 style={styles.cardTitle}>Details </h4>
              <div style={styles.detailRow}><span>📝</span> Ticket No: {ticketData?.ticketCode|| 'N/A'}</div>
              <div style={styles.detailRow}><span>📌</span> Status: {ticketData?.status || 'N/A'}</div>
              <div style={styles.detailRow}><span>🏷️</span> Title: {ticketData?.title || 'N/A'}</div>
              <div style={styles.detailRow}><span>🏢</span> Company: {ticketData?.company || 'N/A'}</div>
              <div style={styles.detailRow}><span>🏢</span> Assigned By: {ticketData?.assignedBy || 'N/A'}</div>
              <div style={styles.detailRow}><span>📅</span> Resolved At: {ticketData?.resolvedAt || 'N/A'}</div>
              <div style={styles.detailRow}><span>⏳</span> Created At: {ticketData?.createdAt || 'N/A'}</div>
              <div style={styles.detailRow}><span>👥</span> Team: Orbitax</div>
              <div style={styles.detailRow}><span>📝</span> Replies: {ticketData?.replies?.length || 0}</div>             
            </div>

            <div style={styles.timestamp}>
              Created {ticketData?.createdAt || '...'}<br />
              Updated {ticketData?.lastUpdatedAt || '...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed', top: 50, left: '5%', width: '90%', height: '80vh',
    backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  modalContent: { display: 'flex', width: '100%', height: '100%', overflow: 'hidden' },
  scrollWrapperLeft: { flex: 2, overflowY: 'auto', padding: 20, borderRight: '1px solid #eee' },
  scrollWrapperRight: { flex: 1, overflowY: 'auto', padding: 20 },
  leftSection: { width: '100%' },
  rightSection: { width: '100%' },
  headerRow: { marginBottom: 10 },
  title: { fontSize: 20 },
  description: { marginBottom: 20, color: '#333' },
  section: { marginBottom: 20 },
  subTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  tabBar: { display: 'flex', gap: 10, marginBottom: 10 },
  tab: {
    padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4,
    background: '#f9f9f9', cursor: 'pointer'
  },
  activeTab: { background: '#e6f0ff', borderColor: '#4c9aff' },
  commentBox: { display: 'flex', gap: 10, alignItems: 'flex-start' },
  userIcon: {
    background: '#0052CC', color: '#fff', borderRadius: '50%',
    width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 'bold'
  },
  editorArea: { flex: 1 },
  toolbar: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6 },
  toolBtn: {
    padding: '4px 6px', border: '1px solid #ccc', borderRadius: 4,
    background: '#fff', cursor: 'pointer', fontSize: 12
  },
  textarea: {
    width: '90%', height: 100, padding: 10, border: '1px solid #ccc',
    borderRadius: 4, resize: 'none'
  },
  buttonRow: { marginTop: 10, display: 'flex', gap: 10 },
  saveButton: {
    backgroundColor: '#0052CC', color: '#fff', padding: '8px 16px',
    border: 'none', borderRadius: '4px', cursor: 'pointer'
  },
  cancelButton: {
    backgroundColor: '#f4f5f7', color: '#172B4D', padding: '8px 16px',
    border: 'none', borderRadius: '4px', cursor: 'pointer'
  },
  card: {
    border: '1px solid #e0e0e0', borderRadius: 6, padding: 16,
    marginBottom: 16, background: '#fefefe'
  },
  cardTitle: { fontSize: 18, marginBottom: 12, color: '#091e42', cursor: 'pointer' },
  detailRow: { fontSize: 15, marginBottom: 10 },
  timestamp: { fontSize: 12, color: '#666' },
  rightTopBar: { display: 'flex', justifyContent: 'flex-end', marginBottom: 10 },
  closeButtonRight: {
    background: 'none', border: 'none', fontSize: '20px',
    cursor: 'pointer', color: '#333',
  },
};

export default IssueModal;
