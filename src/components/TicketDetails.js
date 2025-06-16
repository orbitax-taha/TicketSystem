


import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '../api/axiosInstance';
import { CircularProgress } from '@mui/material';

const TicketDetails = ({ ticket, onClose, priorities, users }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ticketExists, setTicketExists] = useState(true);
  const loggedInUser = localStorage.getItem('username') || 'admin';
  const user = users.find((u) => u.username === loggedInUser);
  const userRole = user ? user.role : 'Unknown';
  const isAdmin = userRole === 'Admin';
  const isClient = userRole === 'Client';
  const canChangeStatus = !isClient; // All roles except Client can change status

  const [formData, setFormData] = useState({
    id: ticket.id || '',
    title: ticket.title || '',
    description: ticket.description || '',
    status: ticket.status || 'OPEN',
    assignedTo: ticket.assignedTo?.toString() || '',
    priority: ticket.priority?.toString() || '',
  });

  useEffect(() => {
    const validateTicket = async () => {
      if (!ticket.id) {
        setTicketExists(false);
        Swal.fire({
          title: 'Invalid Ticket',
          icon: 'error',
          text: 'No valid ticket ID provided.',
          confirmButtonText: 'Return to Tickets',
          allowOutsideClick: false,
        }).then(() => onClose());
        return;
      }

      try {
        setIsLoading(true);
        await axiosInstance.get(`/tickets/${ticket.id}`);
        setTicketExists(true);
      } catch (error) {
        console.error('Error validating ticket:', error.response?.data || error.message);
        setTicketExists(false);
        Swal.fire({
          title: 'Ticket Not Found',
          icon: 'error',
          text: `The ticket with ID ${ticket.id} does not exist.`,
          confirmButtonText: 'Return to Tickets',
          allowOutsideClick: false,
        }).then(() => onClose());
      } finally {
        setIsLoading(false);
      }
    };

    validateTicket();
  }, [ticket.id, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isAdmin || (canChangeStatus && name === 'status')) {
      setFormData({ ...formData, [name]: value });
    } else {
      // Swal.fire({
      //   title: 'Permission Denied',
      //   icon: 'error',
      //   text: isClient
      //     ? 'Clients cannot edit tickets.'
      //     : 'You can only change the ticket status.',
      // });
    }
  };

  const handleUpdate = async () => {
    if (isClient) {
      // Swal.fire({
      //   title: 'Permission Denied',
      //   icon: 'error',
      //   text: 'Clients cannot edit tickets.',
      // });
      return;
    }

    if (!isAdmin && Object.keys(formData).some((key) => key !== 'status' && formData[key] !== ticket[key])) {
      // Swal.fire({
      //   title: 'Permission Denied',
      //   icon: 'error',
      //   text: 'You can only change the ticket status.',
      // });
      return;
    }

    if (!ticketExists) {
      Swal.fire({
        title: 'Cannot Update',
        icon: 'error',
        text: 'This ticket no longer exists.',
        confirmButtonText: 'Return to Tickets',
      }).then(() => onClose());
      return;
    }

    setIsLoading(true);
    try {
      const payload = isAdmin
        ? {
            id: formData.id,
            title: formData.title,
            description: formData.description,
            status: formData.status,
            assignedTo: parseInt(formData.assignedTo),
            priorityId: parseInt(formData.priority),
          }
        : {
            id: formData.id,
            title: ticket.title,
            description: ticket.description,
            status: formData.status,
            assignedTo: parseInt(ticket.assignedTo || '0'),
            priorityId: parseInt(ticket.priority || '0'),
          };
      const response = await axiosInstance.put(`/tickets/${ticket.id}`, payload);
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Ticket updated successfully!',
      });
      setFormData({
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        status: response.data.status,
        assignedTo: response.data.assignedTo?.toString() || '',
        priority: response.data.priorityId?.toString() || '',
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Update error:', error.response?.data || error.message);
      if (error.response?.status === 404) {
        setTicketExists(false);
        Swal.fire({
          title: 'Ticket Not Found',
          icon: 'error',
          text: `The ticket with ID ${ticket.id} was not found.`,
          confirmButtonText: 'Return to Tickets',
          allowOutsideClick: false,
        }).then(() => onClose());
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: error.response?.data?.message || 'Failed to update ticket.',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!isAdmin) {
      // Swal.fire({
      //   title: 'Permission Denied',
      //   icon: 'error',
      //   text: 'Only admin users can delete tickets.',
      // });
      return;
    }

    if (!ticketExists) {
      Swal.fire({
        title: 'Cannot Delete',
        icon: 'error',
        text: 'This ticket no longer exists.',
        confirmButtonText: 'Return to Tickets',
      }).then(() => onClose());
      return;
    }

    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    });

    if (confirm.isConfirmed) {
      setIsLoading(true);
      try {
        await axiosInstance.delete(`/tickets/${ticket.id}`);
        Swal.fire({
          title: 'Deleted',
          icon: 'success',
          text: 'Ticket deleted successfully!',
        });
        onClose();
      } catch (error) {
        console.error('Delete error:', error.response?.data || error.message);
        if (error.response?.status === 404) {
          setTicketExists(false);
          Swal.fire({
            title: 'Ticket Not Found',
            icon: 'error',
            text: `The ticket with ID ${ticket.id} was not found.`,
            confirmButtonText: 'Return to Tickets',
            allowOutsideClick: false,
          }).then(() => onClose());
        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: error.response?.data?.message || 'Failed to delete ticket.',
          });
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getPriorityName = (priorityId) => {
    const priority = priorities.find((p) => p.id === parseInt(priorityId));
    return priority ? priority.name : 'Not set';
  };

  const getAssigneeName = (assignedTo) => {
    const user = users.find((u) => u.id === parseInt(assignedTo));
    return user ? user.username : 'Not assigned';
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

  const detailsContainerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    width: '500px',
    maxHeight: '80vh',
    overflowY: 'auto',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#172b4d',
    marginBottom: '5px',
  };

  const valueStyle = {
    fontSize: '14px',
    color: '#172b4d',
    marginBottom: '15px',
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

  if (isLoading && !isEditing) {
    return (
      <div style={modalStyle}>
        <div style={detailsContainerStyle}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <CircularProgress />
            <p style={{ color: '#172b4d', marginTop: '10px' }}>Loading ticket details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!ticketExists) {
    return null; // Modal will close via Swal
  }

  return (
    <div style={modalStyle}>
      <div style={detailsContainerStyle}>
        {isEditing && (isAdmin || canChangeStatus) ? (
          <>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
              Edit Ticket
            </h2>
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
              disabled={isLoading || !isAdmin}
            />
            <label style={labelStyle}>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              style={{ ...inputStyle, resize: 'none' }}
              disabled={isLoading || !isAdmin}
            />
            <label style={labelStyle}>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={inputStyle}
              disabled={isLoading || !canChangeStatus}
            >
              <option value="OPEN">OPEN</option>
              <option value="WORK IN PROGRESS">WORK IN PROGRESS</option>
              <option value="WAITING FOR SUPPORT">WAITING FOR SUPPORT</option>
              <option value="UNDER REVIEW">UNDER REVIEW</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
            <label style={labelStyle}>Assignee *</label>
            <select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              style={inputStyle}
              disabled={isLoading || !isAdmin}
            >
              <option value="" disabled>
                Select Assignee
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
            <label style={labelStyle}>Priority *</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={inputStyle}
              disabled={isLoading || !isAdmin}
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
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#172b4d', marginBottom: '20px' }}>
              {ticket.title || 'No Title'}
            </h2>
            <div style={labelStyle}>Key</div>
            <div style={valueStyle}>{ticket.id || 'N/A'}</div>
            <div style={labelStyle}>Description</div>
            <div style={valueStyle}>{ticket.description || 'No description provided'}</div>
            <div style={labelStyle}>Assigned To</div>
            <div style={valueStyle}>{getAssigneeName(ticket.assignedTo)}</div>
            <div style={labelStyle}>Status</div>
            <div style={valueStyle}>{ticket.status || 'N/A'}</div>
            <div style={labelStyle}>Priority</div>
            <div style={valueStyle}>{getPriorityName(ticket.priority)}</div>
            <div style={labelStyle}>Created</div>
            <div style={valueStyle}>{ticket.createdAt || 'N/A'}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {/* {(isAdmin || canChangeStatus) && (
                <button
                  style={{ ...buttonStyle, backgroundColor: '#0052cc' }}
                  onClick={() => setIsEditing(true)}
                  disabled={isLoading}
                >
                  Edit
                </button>
              )}
              {isAdmin && (
                <button
                  style={{ ...buttonStyle, backgroundColor: '#ff0000' }}
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  Delete
                </button>
              )} */}
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