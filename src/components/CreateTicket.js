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
    files: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [skipFiles, setSkipFiles] = useState(false); // Toggle for testing without files
  const modalRef = useRef(null);
  const firstFocusableElementRef = useRef(null);
  const lastFocusableElementRef = useRef(null);

  const loggedInUser = localStorage.getItem('username') || 'sumit';

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
    const selectedFiles = e.target.files;
    setFormData({ ...formData, files: Array.from(selectedFiles) });
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.title.trim()) {
      errors.push('Title is required.');
    } else if (formData.title.trim().length < 5) {
      errors.push('Title must be at least 5 characters long.');
    }

    if (!formData.description.trim()) {
      errors.push('Description is required.');
    } else if (formData.description.trim().length < 10) {
      errors.push('Description must be at least 10 characters long.');
    }

    if (!formData.assignedTo) {
      errors.push('Assignee is required.');
    } else {
      const assignedToId = parseInt(formData.assignedTo);
      if (isNaN(assignedToId) || assignedToId <= 0) {
        errors.push('Invalid assignee ID.');
      } else {
        const selectedUser = users.find((user) => user.id === assignedToId);
        if (!selectedUser) {
          errors.push('Invalid assignee selected.');
        }
      }
    }

    if (!formData.priority) {
      errors.push('Priority is required.');
    } else {
      const priorityId = parseInt(formData.priority);
      if (isNaN(priorityId) || priorityId <= 0) {
        errors.push('Invalid priority ID.');
      } else {
        const selectedPriority = priorities.find((p) => p.id === priorityId);
        if (!selectedPriority) {
          errors.push('Invalid priority selected.');
        }
      }
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();

    if (errors.length > 0) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        html: errors.join('<br>'),
        customClass: {
          container: 'swal-high-zindex',
        },
      });
      return;
    }

    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      const ticketDto = {
        title: formData.title,
        description: formData.description,
        assignedTo: parseInt(formData.assignedTo),
        assignedBy: loggedInUser,
        priorityId: parseInt(formData.priority),
      };
      formDataToSend.append('dto', new Blob([JSON.stringify(ticketDto)], { type: 'application/json' }));
      if (!skipFiles) {
        formData.files.forEach((file) => {
          formDataToSend.append('files', file);
        });
      }

      console.log('Create ticket payload:', {
        dto: ticketDto,
        files: skipFiles ? [] : formData.files.map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        })),
        skipFiles,
      });

      const response = await axiosInstance.post('/tickets', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onCreate({ ...response.data.data, priorityId: parseInt(formData.priority), images: skipFiles ? [] : formData.files.map((file) => file.name) });
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Ticket created successfully!',
        customClass: {
          container: 'swal-high-zindex',
        },
      });
      onClose();
    } catch (error) {
      console.error('Create ticket error:', error.response?.data || error.message);
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: error.response?.data?.message || 'Failed to create ticket.',
        customClass: {
          container: 'swal-high-zindex',
        },
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
          aria-required="true"
        />
        <label style={labelStyle}>Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          style={{ ...inputStyle, resize: 'none' }}
          disabled={isLoading}
          aria-required="true"
        />
        <label style={labelStyle}>Assignee *</label>
        <select name="assignedTo" value={formData.assignedTo} onChange={handleChange} style={inputStyle} disabled={isLoading} aria-required="true">
          <option value="" disabled>Select Assignee</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
        <label style={labelStyle}>Priority *</label>
        <select name="priority" value={formData.priority} onChange={handleChange} style={inputStyle} disabled={isLoading} aria-required="true">
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
        {/* Toggle for testing without files */}
        <label style={{ ...labelStyle, fontWeight: 'normal' }}>
          <input
            type="checkbox"
            checked={skipFiles}
            onChange={(e) => setSkipFiles(e.target.checked)}
            disabled={isLoading}
          />
          Skip file uploads (for testing)
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px' }}>
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
        <style>
          {`
            .swal-high-zindex {
              z-index: 2100 !important;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default CreateTicket;