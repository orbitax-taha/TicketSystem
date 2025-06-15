

// import React, { useState, useEffect, useRef } from 'react';
// import Swal from 'sweetalert2';
// import axiosInstance from '../api/axiosInstance';
// import { CircularProgress } from '@mui/material';

// const CreateTicket = ({ onClose, onCreate }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     assignedTo: '1', // Default value as per your code
//     priorityName: '' // Initialize priorityName
//   });
//   const [isLoading, setIsLoading] = useState(false); // Loading state

//   const modalRef = useRef(null);
//   const firstFocusableElementRef = useRef(null);
//   const lastFocusableElementRef = useRef(null);

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
//       const response = await axiosInstance.post('/tickets', {
//         title: formData.title,
//         description: formData.description,
//         assignedTo: formData.assignedTo,
//         priorityName: formData.priorityName
//       });

//       const newTicket = response.data;
//       onCreate(newTicket);
//       Swal.fire({
//         title: 'Success',
//         icon: 'success',
//         text: 'Ticket created successfully!'
//       });
//       onClose();
//     } catch (error) {
//       Swal.fire({
//         title: 'Error',
//         icon: 'error',
//         text: error.message || 'Failed to create ticket.'
//       });
//     } finally {
//       setIsLoading(false); // Stop loading
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

//   const formContainerStyle = {
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '500px',
//     maxHeight: '80vh',
//     overflowY: 'auto'
//   };

//   const labelStyle = {
//     display: 'block',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#172b4d',
//     marginBottom: '8px'
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
//     backgroundColor: '#0052cc',
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
//     <div style={modalStyle} role="dialog" aria-modal="true" aria-labelledby="modal-title">
//       <div style={formContainerStyle} ref={modalRef}>
//         <h2 id="modal-title" style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
//           Create New Ticket
//         </h2>
//         <label style={labelStyle}>Title *</label>
//         <input type="text" name="title" value={formData.title} onChange={handleChange} style={inputStyle} disabled={isLoading} />
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
//           <option value="1">Sumit Kumar</option>
//           <option value="2">Abhishek</option>
//           <option value="3">Taleem</option>
//           <option value="4">JB</option>
//         </select>
//         <label style={labelStyle}>Priority *</label>
//         <select name="priorityName" value={formData.priorityName} onChange={handleChange} style={inputStyle} disabled={isLoading}>
//           <option value="" disabled>Select Priority</option>
//           <option value="Low">Low</option>
//           <option value="Moderate">Moderate</option>
//           <option value="High">High</option>
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

const CreateTicket = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedTo: '1',
    priority: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [priorities, setPriorities] = useState([]);
  const modalRef = useRef(null);
  const firstFocusableElementRef = useRef(null);
  const lastFocusableElementRef = useRef(null);

  useEffect(() => {
    const fetchPriorities = async () => {
      try {
        const response = await axiosInstance.get('/priorities');
        const normalizedPriorities = (response.data || []).map(p => ({
          id: p.id,
          name: p.name.replace('Heigh', 'High') // Normalize typos
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.assignedTo || !formData.priority) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        text: 'Title, Description, Assignee, and Priority are required!'
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/tickets', {
        title: formData.title,
        description: formData.description,
        assignedTo: parseInt(formData.assignedTo),
        priority: parseInt(formData.priority)
      });
      onCreate(response.data);
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Ticket created successfully!'
      });
      onClose();
    } catch (error) {
      console.error('Create error:', error.response?.data || error.message);
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: error.response?.data?.message || 'Failed to create ticket.'
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
    zIndex: 2000
  };

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    width: '500px',
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '8px'
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
    backgroundColor: '#0052cc',
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

  return (
    <div style={modalStyle} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div style={formContainerStyle} ref={modalRef}>
        <h2 id="modal-title" style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
          Create New Ticket
        </h2>
        <label style={labelStyle}>Title *</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} style={inputStyle} disabled={isLoading} />
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