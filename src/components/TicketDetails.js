import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';

const TicketDetails = ({ ticket, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...ticket });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axiosInstance.put(`/tickets/${ticket.id}`, {
        title: formData.summary,
        description: formData.description,
      });
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Ticket updated successfully!'
      });
      // Update the local form data with the response
      setFormData({
        ...formData,
        summary: response.data.title,
        description: response.data.description,
      });
      setIsEditing(false);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: error.message || 'Failed to update ticket.'
      });
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
      try {
        await axiosInstance.delete(`/tickets/${ticket.id}`);
        Swal.fire({
          title: 'Deleted',
          icon: 'success',
          text: 'Ticket deleted successfully!'
        });
        onClose();
      } catch (error) {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: error.message || 'Failed to delete ticket.'
        });
      }
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
    marginRight: '10px'
  };

  return (
    <div style={modalStyle}>
      <div style={detailsContainerStyle}>
        {isEditing ? (
          <>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>Edit Ticket</h2>
            <label style={labelStyle}>Summary</label>
            <input type="text" name="summary" value={formData.summary} onChange={handleChange} style={inputStyle} />
            <label style={labelStyle}>Description</label>
            <textarea name="description" value={formData.description || ''} onChange={handleChange} rows="4" style={{ ...inputStyle, resize: 'none' }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ ...buttonStyle, backgroundColor: '#0052cc' }} onClick={handleUpdate}>Save</button>
              <button style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }} onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>{ticket.summary}</h2>
            <div style={labelStyle}>Key</div>
            <div style={valueStyle}>{ticket.id}</div>
            <div style={labelStyle}>Type</div>
            <div style={valueStyle}>{ticket.type}</div>
            <div style={labelStyle}>Description</div>
            <div style={valueStyle}>{ticket.description || 'No description provided'}</div>
            <div style={labelStyle}>Reporter</div>
            <div style={valueStyle}>{ticket.reporter}</div>
            <div style={labelStyle}>Assignee</div>
            <div style={valueStyle}>{ticket.assignee}</div>
            <div style={labelStyle}>Status</div>
            <div style={valueStyle}>{ticket.status}</div>
            <div style={labelStyle}>Created</div>
            <div style={valueStyle}>{ticket.created}</div>
  
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ ...buttonStyle, backgroundColor: '#0052cc' }} onClick={() => setIsEditing(true)}>Edit</button>
              <button style={{ ...buttonStyle, backgroundColor: '#de350b' }} onClick={handleDelete}>Delete</button>
              <button style={{ ...buttonStyle, backgroundColor: '#d3d3d3', color: '#172b4d' }} onClick={onClose}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TicketDetails;