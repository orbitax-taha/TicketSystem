// //For EDIT Ticket

// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';
// import { CircularProgress } from '@mui/material';

// const TicketDetails = ({ ticket, onClose }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // Add loading state
//   const [formData, setFormData] = useState({
//     title: ticket.title || '',
//     description: ticket.description || '',
//     status: ticket.status || '',
//     assignedTo: ticket.assignedTo || '', // Align with MyTickets
//     priorityName: ticket.priorityName || '' // Use priorityName
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     if (!formData.title || !formData.description || !formData.assignedTo || !formData.priorityName) {
//       Swal.fire({
//         title: 'Validation Error',
//         icon: 'error',
//         text: 'Title, Description, Assignee, and Priority are required!'
//       });
//       return;
//     }

//     setIsLoading(true); // Start loading

//     try {
//      const response = await axiosInstance.put(`/tickets/${ticket.id}`, {
//          id: ticket.id,
//         title: formData.title,
//         description: formData.description,
//         status: formData.status,
//         assignedToDep: formData.assignedTo, // Map to API's assignedToDep
//         priorityName: formData.priorityName
//       });
//       Swal.fire({
//         title: 'Success',
//         icon: 'success',
//         text: 'Ticket updated successfully!'
//       });
//       setFormData({
//         title: response.data.title,
//         description: response.data.description,
//         status: response.data.status,
//         assignedTo: response.data.assignedToDep, // Update with API response
//         priorityName: response.data.priorityName
//       });
//       setIsEditing(false);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error',
//         icon: 'error',
//         text: error.message || 'Failed to update ticket.'
//       });
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   const handleDelete = async () => {
//     const confirm = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'This action cannot be undone.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, keep it'
//     });

//     if (confirm.isConfirmed) {
//       setIsLoading(true); // Start loading
//       try {
//         await axiosInstance.delete(`/tickets/${ticket.id}`);
//         Swal.fire({
//           title: 'Deleted',
//           icon: 'success',
//           text: 'Ticket deleted successfully!'
//         });
//         onClose();
//       } catch (error) {
//         Swal.fire({
//           title: 'Error',
//           icon: 'error',
//           text: error.message || 'Failed to delete ticket.'
//         });
//       } finally {
//         setIsLoading(false); // Stop loading
//       }
//     }
//   };

//   const modalStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 2000
//   };

//   const detailsContainerStyle = {
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '600px',
//     maxHeight: '80vh',
//     overflowY: 'auto'
//   };

//   const labelStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '5px'
//   };

//   const valueStyle = {
//     fontSize: '14px',
//     color: '#172b4d',
//     marginBottom: '15px'
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '8px',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '15px'
//   };

//   const buttonStyle = {
//     padding: '8px 16px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginRight: '10px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px' // Space between spinner and text
//   };

//   const disabledButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#cccccc',
//     cursor: 'not-allowed'
//   };

//   return (
//     <div style={modalStyle}>
//       <div style={detailsContainerStyle}>
//         {isEditing ? (
//           <>
//             <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>Edit Ticket</h2>
//             <label style={labelStyle}>Title *</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               style={inputStyle}
//               disabled={isLoading}
//             />
//             <label style={labelStyle}>Description *</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               style={{ ...inputStyle, resize: 'none' }}
//               disabled={isLoading}
//             />
//             <label style={labelStyle}>Status</label>
//             <select name="status" value={formData.status} onChange={handleChange} style={inputStyle} disabled={isLoading}>
//               <option value="WAITING FOR SUPPORT">WAITING FOR SUPPORT</option>
//               <option value="WORK IN PROGRESS">WORK IN PROGRESS</option>
//               <option value="WAITING FOR APPROVAL">WAITING FOR APPROVAL</option>
//               <option value="UNDER REVIEW">UNDER REVIEW</option>
//             </select>
//             <label style={labelStyle}>Assignee *</label>
//             <select name="assignedTo" value={formData.assignedTo} onChange={handleChange} style={inputStyle} disabled={isLoading}>
//               <option value="sumit">Sumit Kumar</option>
//               <option value="abhishek">Abhishek</option>
//               <option value="taleem">Taleem</option>
//               <option value="jb">JB</option>
//             </select>
//             <label style={labelStyle}>Priority *</label>
//             <select name="priorityName" value={formData.priorityName} onChange={handleChange} style={inputStyle} disabled={isLoading}>
//               <option value="" disabled>Select Priority</option>
//               <option value="Low">Low</option>
//               <option value="Moderate">Moderate</option>
//               <option value="High">High</option>
//             </select>
//             <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//               <button
//                 style={isLoading ? disabledButtonStyle : { ...buttonStyle, backgroundColor: '#0052cc' }}
//                 onClick={handleUpdate}
//                 disabled={isLoading}
//               >
//                 {isLoading && <CircularProgress size={20} color="inherit" />}
//                 {isLoading ? 'Saving...' : 'Save'}
//               </button>
//               <button
//                 style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }}
//                 onClick={() => setIsEditing(false)}
//                 disabled={isLoading}
//               >
//                 Cancel
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>{ticket.title}</h2>
//             <div style={labelStyle}>Key</div>
//             <div style={valueStyle}>{ticket.id}</div>
//             <div style={labelStyle}>Description</div>
//             <div style={valueStyle}>{ticket.description || 'No description provided'}</div>
//             <div style={labelStyle}>Assigned To</div>
//             <div style={valueStyle}>{ticket.assignedTo || 'Not assigned'}</div>
//             <div style={labelStyle}>Status</div>
//             <div style={valueStyle}>{ticket.status}</div>
//             <div style={labelStyle}>Priority</div>
//             <div style={valueStyle}>{ticket.priorityName || 'Not set'}</div>
//             <div style={labelStyle}>Created</div>
//             <div style={valueStyle}>{ticket.createdAt}</div>
//             <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//               <button
//                 style={{ ...buttonStyle, backgroundColor: '#0052cc' }}
//                 onClick={() => setIsEditing(true)}
//                 disabled={isLoading}
//               >
//                 Edit
//               </button>
//               <button
//                 style={isLoading ? disabledButtonStyle : { ...buttonStyle, backgroundColor: '#de350b' }}
//                 onClick={handleDelete}
//                 disabled={isLoading}
//               >
//                 {isLoading && <CircularProgress size={20} color="inherit" />}
//                 {isLoading ? 'Deleting...' : 'Delete'}
//               </button>
//               <button
//                 style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }}
//                 onClick={onClose}
//                 disabled={isLoading}
//               >
//                 Close
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TicketDetails;

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';
import { CircularProgress } from '@mui/material';

const TicketDetails = ({ ticket, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [priorities, setPriorities] = useState([]);
  const assigneeMap = {
    sumit: '1',
    abhishek: '2',
    taleem: '3',
    jb: '4'
  };
  const reverseAssigneeMap = {
    '1': 'Sumit Kumar',
    '2': 'Abhishek',
    '3': 'Taleem',
    '4': 'JB'
  };
  const [formData, setFormData] = useState({
    id: ticket.id || '',
    title: ticket.title || '',
    description: ticket.description || '',
    status: ticket.status || 'OPEN',
    assignedTo: assigneeMap[ticket.assignedTo?.toLowerCase()] || '',
    priority: ticket.priority?.toString() || ''
  });

  useEffect(() => {
    const fetchPriorities = async () => {
      try {
        const response = await axiosInstance.get('/priorities');
        const normalizedPriorities = (response.data || []).map(p => ({
          id: p.id,
          name: p.name.replace('Heigh', 'High')
        }));
        setPriorities(normalizedPriorities);
      } catch (error) {
        console.error('Error fetching priorities:', error);
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Failed to load priorities.'
        });
      }
    };
    fetchPriorities();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!formData.id || !formData.title || !formData.description || !formData.assignedTo || !formData.priority) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        text: 'ID, Title, Description, Assignee, and Priority are required!'
      });
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        id: formData.id,
        title: formData.title,
        description: formData.description,
        status: formData.status,
        assignedTo: parseInt(formData.assignedTo),
        priority: parseInt(formData.priority)
      };
      console.log('Updating ticket with payload:', payload);
      const response = await axiosInstance.put(`/tickets/${ticket.id}`, payload);
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Ticket updated successfully!'
      });
      setFormData({
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        status: response.data.status,
        assignedTo: assigneeMap[response.data.assignedToDep?.toLowerCase()] || response.data.assignedTo?.toString(),
        priority: response.data.priority?.toString() || ''
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Update error:', error.response?.data || error.message);
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: error.response?.data?.message || 'Failed to update ticket.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    });

    if (confirm.isConfirmed) {
      setIsLoading(true);
      try {
        await axiosInstance.delete(`/tickets/${ticket.id}`);
        Swal.fire({
          title: 'Deleted',
          icon: 'success',
          text: 'Ticket deleted successfully!'
        });
        onClose();
      } catch (error) {
        console.error('Delete error:', error.response?.data || error.message);
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: error.response?.data?.message || 'Failed to delete ticket.'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getPriorityName = (priorityId) => {
    const priority = priorities.find(p => p.id === parseInt(priorityId));
    return priority ? priority.name : 'Not set';
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000
  };

  const detailsContainerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    width: '600px',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '5px'
  };

  const valueStyle = {
    fontSize: '14px',
    color: '#172b4d',
    marginBottom: '15px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '15px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#cccccc',
    cursor: 'not-allowed'
  };

  console.log('Ticket prop:', ticket);

  return (
    <div style={modalStyle}>
      <div style={detailsContainerStyle}>
        {isEditing ? (
          <>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>Edit Ticket</h2>
            <label style={labelStyle}>ID</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              readOnly
              style={{ ...inputStyle, backgroundColor: '#f4f5f7' }}
            />
            <label style={labelStyle}>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={inputStyle}
              disabled={isLoading}
            />
            <label style={labelStyle}>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              style={{ ...inputStyle, resize: 'none' }}
              disabled={isLoading}
            />
            <label style={labelStyle}>Status</label>
            <select name="status" value={formData.status} onChange={handleChange} style={inputStyle} disabled={isLoading}>
              <option value="OPEN">OPEN</option>
              <option value="WAITING FOR SUPPORT">WAITING FOR SUPPORT</option>
              <option value="WORK IN PROGRESS">WORK IN PROGRESS</option>
              <option value="WAITING FOR APPROVAL">WAITING FOR APPROVAL</option>
              <option value="UNDER REVIEW">UNDER REVIEW</option>
            </select>
            <label style={labelStyle}>Assignee *</label>
            <select name="assignedTo" value={formData.assignedTo} onChange={handleChange} style={inputStyle} disabled={isLoading}>
              <option value="1">Sumit Kumar</option>
              <option value="2">Abhishek</option>
              <option value="3">Taleem</option>
              <option value="4">JB</option>
            </select>
            <label style={labelStyle}>Priority *</label>
            <select name="priority" value={formData.priority} onChange={handleChange} style={inputStyle} disabled={isLoading}>
              <option value="" disabled>Select Priority</option>
              {priorities.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={isLoading ? disabledButtonStyle : { ...buttonStyle, backgroundColor: '#0052cc' }}
                onClick={handleUpdate}
                disabled={isLoading}
              >
                {isLoading && <CircularProgress size={20} color="inherit" />}
                {isLoading ? 'Saving...' : 'Save'}
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }}
                onClick={() => setIsEditing(false)}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>{ticket.title || 'No Title'}</h2>
            <div style={labelStyle}>Key</div>
            <div style={valueStyle}>{ticket.id || 'N/A'}</div>
            <div style={labelStyle}>Description</div>
            <div style={valueStyle}>{ticket.description || 'No description provided'}</div>
            <div style={labelStyle}>Assigned To</div>
            <div style={valueStyle}>{reverseAssigneeMap[assigneeMap[ticket.assignedTo?.toLowerCase()]] || ticket.assignedTo || 'Not assigned'}</div>
            <div style={labelStyle}>Status</div>
            <div style={valueStyle}>{ticket.status || 'N/A'}</div>
            <div style={labelStyle}>Priority</div>
            <div style={valueStyle}>{getPriorityName(ticket.priority)}</div>
            <div style={labelStyle}>Created</div>
            <div style={valueStyle}>{ticket.createdAt || 'N/A'}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{ ...buttonStyle, backgroundColor: '#0052cc' }}
                onClick={() => setIsEditing(true)}
                disabled={isLoading}
              >
                Edit
              </button>
              <button
                style={isLoading ? disabledButtonStyle : { ...buttonStyle, backgroundColor: '#de350b' }}
                onClick={handleDelete}
                disabled={isLoading}
              >
                {isLoading && <CircularProgress size={20} color="inherit" />}
                {isLoading ? 'Deleting...' : 'Delete'}
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }}
                onClick={onClose}
                disabled={isLoading}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TicketDetails; 