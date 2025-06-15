

// import React, { useState, useEffect, useRef } from 'react';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';
// import { CircularProgress } from '@mui/material';

// const CreateTicket = ({ onClose, onCreate, priorities, users }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     assignedTo: '',
//     priority: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const modalRef = useRef(null);
//   const firstFocusableElementRef = useRef(null);
//   const lastFocusableElementRef = useRef(null);

//   // Use the username from localStorage
//   const loggedInUser = localStorage.getItem('username') || 'admin';

//   useEffect(() => {
//     const focusableElements = modalRef.current.querySelectorAll(
//       'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
//     );
//     const firstElement = focusableElements[0];
//     const lastElement = focusableElements[focusableElements.length - 1];

//     firstFocusableElementRef.current = firstElement;
//     lastFocusableElementRef.current = lastElement;

//     firstElement.focus();

//     const handleKeyDown = (e) => {
//       if (e.key === 'Tab') {
//         if (e.shiftKey && document.activeElement === firstElement) {
//           e.preventDefault();
//           lastElement.focus();
//         } else if (!e.shiftKey && document.activeElement === lastElement) {
//           e.preventDefault();
//           firstElement.focus();
//         }
//       }
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [onClose]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!formData.title || !formData.description || !formData.assignedTo || !formData.priority) {
//       Swal.fire({
//         title: 'Validation Error',
//         icon: 'error',
//         text: 'Title, Description, Assignee, and Priority are required!',
//       });
//       return;
//     }

//     const selectedUser = users.find((user) => user.id === parseInt(formData.assignedTo));
//     if (!selectedUser) {
//       Swal.fire({
//         title: 'Validation Error',
//         icon: 'error',
//         text: 'Invalid assignee selected.',
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const payload = {
//         title: formData.title,
//         description: formData.description,
//         assignedTo: parseInt(formData.assignedTo),
//         assignedBy: loggedInUser,
//         priorityId: parseInt(formData.priority),
//       };
//       console.log('Create ticket payload:', payload);
//       const response = await axiosInstance.post('/tickets', payload);
//       onCreate({ ...response.data, priorityId: parseInt(formData.priority) });
//       Swal.fire({
//         title: 'Success',
//         icon: 'success',
//         text: 'Ticket created successfully!',
//       });
//       onClose();
//     } catch (error) {
//       console.error('Create ticket error:', error.response?.data || error.message);
//       Swal.fire({
//         title: 'Error',
//         icon: 'error',
//         text: error.response?.data?.message || 'Failed to create ticket.',
//       });
//     } finally {
//       setIsLoading(false);
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
//     zIndex: 2000,
//   };

//   const formContainerStyle = {
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '500px',
//     maxHeight: '80vh',
//     overflowY: 'auto',
//   };

//   const labelStyle = {
//     display: 'block',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '8px',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '8px',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '15px',
//   };

//   const buttonStyle = {
//     padding: '8px 16px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#ffffff',
//     backgroundColor: '#0052cc',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginRight: '10px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   };

//   const disabledButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#cccccc',
//     cursor: 'not-allowed',
//   };

//   return (
//     <div style={modalStyle} role="dialog" aria-modal="true" aria-labelledby="modal-title">
//       <div style={formContainerStyle} ref={modalRef}>
//         <h2 id="modal-title" style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
//           Create New Ticket
//         </h2>
//         <label style={labelStyle}>Title *</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           style={inputStyle}
//           disabled={isLoading}
//         />
//         <label style={labelStyle}>Description *</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           rows="4"
//           style={{ ...inputStyle, resize: 'none' }}
//           disabled={isLoading}
//         />
//         <label style={labelStyle}>Assignee *</label>
//         <select name="assignedTo" value={formData.assignedTo} onChange={handleChange} style={inputStyle} disabled={isLoading}>
//           <option value="" disabled>Select Assignee</option>
//           {users.map((user) => (
//             <option key={user.id} value={user.id}>{user.username}</option>
//           ))}
//         </select>
//         <label style={labelStyle}>Priority *</label>
//         <select name="priority" value={formData.priority} onChange={handleChange} style={inputStyle} disabled={isLoading}>
//           <option value="" disabled>Select Priority</option>
//           {priorities.map((p) => (
//             <option key={p.id} value={p.id}>{p.name}</option>
//           ))}
//         </select>
//         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//           <button
//             style={isLoading ? disabledButtonStyle : buttonStyle}
//             onClick={handleSubmit}
//             disabled={isLoading}
//           >
//             {isLoading && <CircularProgress size={20} color="inherit" />}
//             {isLoading ? 'Creating...' : 'Create'}
//           </button>
//           <button
//             style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }}
//             onClick={onClose}
//             disabled={isLoading}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateTicket;


import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';
import { CircularProgress } from '@mui/material';

const CreateTicket = ({ onClose, onCreate, priorities, users }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedTo: '',
    priority: '',
    files: [], // Added to store multiple files
  });
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const firstFocusableElementRef = useRef(null);
  const lastFocusableElementRef = useRef(null);

  const loggedInUser = localStorage.getItem('username') || 'admin';

  useEffect(() => {
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstFocusableElementRef.current = firstElement;
    lastFocusableElementRef.current = lastElement;

    firstElement.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, files });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.assignedTo || !formData.priority) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        text: 'Title, Description, Assignee, and Priority are required!',
      });
      return;
    }

    const selectedUser = users.find((user) => user.id === parseInt(formData.assignedTo));
    if (!selectedUser) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        text: 'Invalid assignee selected.',
      });
      return;
    }

    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('assignedTo', parseInt(formData.assignedTo));
      formDataToSend.append('assignedBy', loggedInUser);
      formDataToSend.append('priorityId', parseInt(formData.priority));
      formData.files.forEach((file, index) => {
        formDataToSend.append(`files[${index}]`, file);
      });

      console.log('Create ticket payload:', {
        title: formData.title,
        description: formData.description,
        assignedTo: parseInt(formData.assignedTo),
        assignedBy: loggedInUser,
        priorityId: parseInt(formData.priority),
        files: formData.files.map((file) => file.name),
      });

      const response = await axiosInstance.post('/tickets', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onCreate({ ...response.data, priorityId: parseInt(formData.priority), images: formData.files.map((file) => file.name) });
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Ticket created successfully!',
      });
      onClose();
    } catch (error) {
      console.error('Create ticket error:', error.response?.data || error.message);
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: error.response?.data?.message || 'Failed to create ticket.',
      });
    } finally {
      setIsLoading(false);
    }
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
    zIndex: 2000,
  };

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    width: '500px',
    maxHeight: '80vh',
    overflowY: 'auto',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '15px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0052cc',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  };

  return (
    <div style={modalStyle} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div style={formContainerStyle} ref={modalRef}>
        <h2 id="modal-title" style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
          Create New Ticket
        </h2>
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
        <label style={labelStyle}>Assignee *</label>
        <select name="assignedTo" value={formData.assignedTo} onChange={handleChange} style={inputStyle} disabled={isLoading}>
          <option value="" disabled>Select Assignee</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
        <label style={labelStyle}>Priority *</label>
        <select name="priority" value={formData.priority} onChange={handleChange} style={inputStyle} disabled={isLoading}>
          <option value="" disabled>Select Priority</option>
          {priorities.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <label style={labelStyle}>Attachments (Images/PDFs)</label>
        <input
          type="file"
          name="files"
          onChange={handleFileChange}
          style={inputStyle}
          disabled={isLoading}
          multiple
          accept="image/jpeg,image/png,application/pdf"
        />
        {formData.files.length > 0 && (
          <div style={{ marginBottom: '15px', fontSize: '14px', color: '#172b4d' }}>
            <strong>Selected Files:</strong>
            <ul>
              {formData.files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            style={isLoading ? disabledButtonStyle : buttonStyle}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading && <CircularProgress size={20} color="inherit" />}
            {isLoading ? 'Creating...' : 'Create'}
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }}
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;